import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Clock, CheckCircle, ChevronRight } from "lucide-react";

export default async function TrainerInboxPage() {
    const session = await getServerSession(authOptions);
    if (!session || ((session.user as any).role !== "TRAINER" && (session.user as any).role !== "ADMIN")) {
        redirect("/unauthorized");
    }

    const userId = (session.user as any).id;

    const pendingRequests = await prisma.trainingRequest.findMany({
        where: {
            trainerId: userId,
            status: "AWAITING_TRAINER_CONFIRMATION",
        },
        include: { module: true },
        orderBy: { startDate: "asc" },
    });

    const upcomingTraining = await prisma.trainingRequest.findMany({
        where: {
            trainerId: userId,
            status: { in: ["TRAINER_CONFIRMED", "AWAITING_APPROVER_1", "AWAITING_APPROVER_2", "CONFIRMED"] },
        },
        include: { module: true },
        orderBy: { startDate: "asc" },
    });

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold">Trainer Inbox</h1>

            {/* Pending Actions */}
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-orange-400 flex items-center gap-2">
                    <Clock size={24} /> Action Required
                </h2>
                {pendingRequests.length === 0 ? (
                    <p className="text-gray-500">No pending requests.</p>
                ) : (
                    <div className="grid gap-4">
                        {pendingRequests.map((req) => (
                            <Link
                                key={req.id}
                                href={`/requests/${req.reference}`}
                                className="card border-orange-500/30 hover:bg-orange-950/20 transition-all flex items-center justify-between p-4"
                            >
                                <div>
                                    <h3 className="font-bold">{req.module.title}</h3>
                                    <p className="text-sm text-gray-400">
                                        {req.startDate.toLocaleDateString()} - {req.endDate.toLocaleDateString()}
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-orange-500 font-bold text-sm">Needs Confirmation</span>
                                    <ChevronRight />
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>

            {/* Upcoming */}
            <section className="space-y-4 pt-8 border-t border-gray-800">
                <h2 className="text-xl font-bold text-blue-400 flex items-center gap-2">
                    <CheckCircle size={24} /> Upcoming Training
                </h2>
                {upcomingTraining.length === 0 ? (
                    <p className="text-gray-500">No upcoming confirmed training.</p>
                ) : (
                    <div className="grid gap-4">
                        {upcomingTraining.map((req) => (
                            <Link
                                key={req.id}
                                href={`/requests/${req.reference}`}
                                className="card hover:border-blue-500/50 transition-all flex items-center justify-between p-4"
                            >
                                <div>
                                    <h3 className="font-bold">{req.module.title}</h3>
                                    <p className="text-sm text-gray-400">
                                        {req.startDate.toLocaleDateString()} - {req.endDate.toLocaleDateString()}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-xs bg-industrial-800 px-2 py-1 rounded">{req.status.replace(/_/g, " ")}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
