"use server";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function addBusyBlock(formData: FormData) {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== "ADMIN") {
        return { error: "Unauthorized" };
    }

    const trainerProfileId = formData.get("trainerProfileId") as string;
    const startDate = formData.get("startDate") as string;
    const endDate = formData.get("endDate") as string;
    const reason = formData.get("reason") as string;

    if (!trainerProfileId || !startDate || !endDate) {
        return { error: "Missing required fields" };
    }

    try {
        await prisma.busyBlock.create({
            data: {
                trainerProfileId,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                reason,
            },
        });

        revalidatePath("/admin/availability");
        return { success: true };
    } catch (error) {
        console.error("Failed to add busy block:", error);
        return { error: "Failed to add block" };
    }
}

export async function deleteBusyBlock(blockId: string) {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== "ADMIN") {
        return { error: "Unauthorized" };
    }

    try {
        await prisma.busyBlock.delete({
            where: { id: blockId },
        });

        revalidatePath("/admin/availability");
        return { success: true };
    } catch (error) {
        console.error("Failed to delete busy block:", error);
        return { error: "Failed to delete block" };
    }
}
