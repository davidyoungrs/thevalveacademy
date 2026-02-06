"use server";

import { canTransition, getNextStatus } from "@/lib/workflow";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function processWorkflowAction(
    requestId: string,
    action: "APPROVE" | "REJECT",
    reason?: string
) {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) return { error: "Unauthorized" };

    const userRole = (session.user as any).role;
    // TODO: Add strict RBAC check based on current status vs user role

    const request = await prisma.trainingRequest.findUnique({
        where: { id: requestId },
    });

    if (!request) return { error: "Request not found" };

    const nextStatus = getNextStatus(request.status, action, request.discountPercent);

    if (!canTransition(request.status, nextStatus)) {
        return { error: `Invalid transition from ${request.status} to ${nextStatus}` };
    }

    // Update Request
    await prisma.trainingRequest.update({
        where: { id: requestId },
        data: {
            status: nextStatus,
            approvals: {
                create: {
                    userId: (session.user as any).id,
                    stage: request.status,
                    decision: action,
                    reason: reason,
                },
            },
            // If CONFIRMED, we might want to create the final CalendarEvent here
        },
    });

    if (nextStatus === "CONFIRMED") {
        // Create Confirmed Calendar Event
        if (request.trainerId) {
            // Check if one exists first?
            // Just create new confirmed event
            await prisma.calendarEvent.create({
                data: {
                    requestId: request.id,
                    trainerId: request.trainerId,
                    start: request.startDate,
                    end: request.endDate,
                    type: "CONFIRMED",
                }
            });

            // Also maybe delete TENTATIVE ones?
        }
    }

    // TODO: Trigger Email Notifications

    revalidatePath(`/requests/${request.reference}`);
    revalidatePath("/trainer/inbox");
    revalidatePath("/approver/inbox");
    return { success: true };
}
