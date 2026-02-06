"use server";

import prisma from "@/lib/prisma";
import { requestSchema } from "@/lib/validations";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { generateReference, calculatePrice } from "@/lib/utils";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { sendEmail } from "@/lib/email";
import { emailTemplates } from "@/lib/email-templates";

export async function submitTrainingRequest(formData: any) {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
        return { error: "Unauthorized" };
    }

    const validation = requestSchema.safeParse(formData);

    if (!validation.success) {
        return { error: "Validation failed", details: validation.error.flatten() };
    }

    const data = validation.data;

    // Fetch module for pricing
    const moduleData = await prisma.module.findUnique({
        where: { id: data.moduleId },
        include: { trainers: { orderBy: { priorityOrder: 'asc' } } }
    });

    if (!moduleData) {
        return { error: "Module not found" };
    }

    const price = calculatePrice(
        data.deliveryType,
        data.numAttendees,
        moduleData.onlinePricePerAttendee,
        moduleData.onsitePricePerAttendee
    );

    // Apply discount if any
    let finalPrice = price;
    if (data.discountPercent && data.discountPercent > 0) {
        finalPrice = price * (1 - data.discountPercent / 100);
    }

    // Generate Reference
    let reference = generateReference();
    // Ensure uniqueness (simple retry loop)
    let existing = await prisma.trainingRequest.findUnique({ where: { reference } });
    while (existing) {
        reference = generateReference();
        existing = await prisma.trainingRequest.findUnique({ where: { reference } });
    }

    // Determine initial status
    // For MVP, if discount > 20%, go to Approver? Or just start mostly as SUBMITTED/AWAITING_TRAINER
    // Requirements say: SUBMITTED -> AWAITING_TRAINER_CONFIRMATION
    const initialStatus = "AWAITING_TRAINER_CONFIRMATION";

    // Attempt auto-assign trainer
    let assignedTrainerId = null;
    let assignedStatus = initialStatus;

    const startDateObj = new Date(data.startDate);
    const endDateObj = new Date(data.endDate);

    for (const trainerRel of moduleData.trainers) {
        const tpId = trainerRel.trainerProfileId;

        // Check for BusyBlocks
        const busyBlocks = await prisma.busyBlock.count({
            where: {
                trainerProfileId: tpId,
                startDate: { lte: endDateObj },
                endDate: { gte: startDateObj },
            }
        });

        if (busyBlocks > 0) continue;

        // Check for Confirmed Calendar Events (need userId for this usually, but CalendarEvent links to User(trainerId))
        // First get the User ID for this profile
        const trainerProfile = await prisma.trainerProfile.findUnique({
            where: { id: tpId },
            include: { user: true }
        });

        if (!trainerProfile) continue;
        const tUserId = trainerProfile.user.id;

        const conflicts = await prisma.calendarEvent.count({
            where: {
                trainerId: tUserId,
                type: "CONFIRMED",
                start: { lte: endDateObj },
                end: { gte: startDateObj },
            }
        });

        if (conflicts === 0) {
            assignedTrainerId = tUserId;
            break; // Found one!
        }
    }

    if (!assignedTrainerId) {
        assignedStatus = "NO_TRAINER_AVAILABLE";
        // If no trainer is available, we still create the request but flag it
    }

    // Note: if no trainer, status could be NO_TRAINER_AVAILABLE, but let's stick to happy path for MVP init

    try {
        const newRequest = await prisma.trainingRequest.create({
            data: {
                reference,
                customerName: data.customerName,
                customerEmail: data.customerEmail,
                numAttendees: data.numAttendees,
                deliveryType: data.deliveryType,
                siteDetails: data.siteDetails,
                startDate: new Date(data.startDate),
                endDate: new Date(data.endDate),
                notes: data.notes,
                finalPrice,
                discountPercent: data.discountPercent || 0,
                discountReason: data.discountReason,
                status: assignedStatus,
                moduleId: data.moduleId,
                salespersonId: (session.user as any).id,
                trainerId: assignedTrainerId,
            },
        });

        // Send Emails in Parallel to reduce latency
        await Promise.allSettled([
            // Send Confirmation to Customer
            sendEmail({
                to: data.customerEmail,
                subject: `Valve Academy Request Received: ${newRequest.reference}`,
                html: emailTemplates.requestConfirmation(data.customerName, moduleData.title, newRequest.reference)
            }),
            // Send Notification to Sales
            sendEmail({
                to: "sales@valveacademy.com", // In production, use env var
                subject: `New Training Request: ${newRequest.reference}`,
                html: emailTemplates.newRequest(data.customerName, moduleData.title, newRequest.reference)
            })
        ]);

        revalidatePath("/requests");
        return { success: true, reference: newRequest.reference };
    } catch (error) {
        console.error("Submission error:", error);
        return { error: "Failed to create request" };
    }
}
