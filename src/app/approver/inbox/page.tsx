import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FileCheck, ChevronRight } from "lucide-react";

export default async function ApproverInboxPage() {
    const session = await getServerSession(authOptions);
    if (!session || ((session.user as any).role !== "APPROVER" && (session.user as any).role !== "ADMIN")) {
        redirect("/unauthorized");
    }

    // Fetch requests waiting for approval
    // For MVP, just show all that are in AWAITING_APPROVER_1 or AWAITING_APPROVER_2
    // Real app might distinguish Approver 1 vs 2 users, but here we treat role generically
    const displayStatus = ["AWAITING_APPROVER_1", "AWAITING_APPROVER_2"];

    const approvalRequests = await prisma.trainingRequest.findMany({
        where: {
            status: { in: displayStatus },
        },
        include: { module: true, salesperson: true },
        orderBy: { createdAt: "asc" },
    });

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold">Approver Inbox</h1>

            <section className="space-y-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <FileCheck size={24} className="text-blue-500" /> Pending Approval
                </h2>
                {approvalRequests.length === 0 ? (
                    <p className="text-gray-500">No requests pending approval.</p>
                ) : (
                    <div className="grid gap-4">
                        {approvalRequests.map((req) => (
                            <Link
                                key={req.id}
                                href={`/requests/${req.reference}`}
                                className="card border-blue-500/30 hover:bg-blue-900/10 transition-all flex items-center justify-between p-4"
                            >
                                <div>
                                    <h3 className="font-bold text-lg">{req.module.title}</h3>
                                    <div className="flex gap-4 text-sm text-gray-400">
                                        <span>by {req.salesperson.name}</span>
                                        <span>•</span>
                                        <span className="text-white font-bold">${req.finalPrice.toLocaleString()}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    {req.discountPercent > 0 && (
                                        <span className="text-xs bg-red-900/50 text-red-300 px-2 py-1 rounded border border-red-800">
                                            {req.discountPercent}% Discount
                                        </span>
                                    )}
                                    <ChevronRight className="text-gray-500" />
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
