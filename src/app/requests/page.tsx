import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Plus, FileText, ChevronRight } from "lucide-react";

export default async function RequestsListPage() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/login");
    }

    // Fetch requests based on role
    // SALES: Own requests
    // ADMIN: All
    // TRAINER/APPROVER: Theirs (handled in specialized dashboards, but for this shared list maybe just own or all?)
    // For simplicity, let's treat this as "My Requests" for Sales, and redirect others or show all for admin.

    const role = (session.user as any).role;
    let requests;

    if (role === "ADMIN") {
        requests = await prisma.trainingRequest.findMany({
            orderBy: { createdAt: "desc" },
            include: { module: true }
        });
    } else {
        requests = await prisma.trainingRequest.findMany({
            where: { salespersonId: (session.user as any).id },
            orderBy: { createdAt: "desc" },
            include: { module: true }
        });
    }

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">My Requests</h1>
                <Link href="/" className="btn btn-primary">
                    <Plus size={18} /> New Request
                </Link>
            </div>

            <div className="grid gap-4">
                {requests.length === 0 ? (
                    <div className="text-center py-12 text-gray-500 bg-industrial-900/30 rounded-lg border border-gray-800">
                        <FileText size={48} className="mx-auto mb-4 opacity-50" />
                        <p>No requests found. Create your first one!</p>
                    </div>
                ) : (
                    requests.map((req) => (
                        <Link
                            key={req.id}
                            href={`/requests/${req.reference}`}
                            className="card group hover:border-blue-500/50 transition-all flex items-center justify-between p-4"
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                                <div className="w-32 text-xs font-mono text-gray-500">
                                    {req.reference}
                                </div>
                                <div className="w-48">
                                    <h3 className="font-bold group-hover:text-blue-400 transition-colors">
                                        {req.module.title}
                                    </h3>
                                    <p className="text-xs text-gray-500">{new Date(req.createdAt).toLocaleDateString()}</p>
                                </div>
                                <div className="w-32 text-sm text-gray-400">
                                    {req.customerName}
                                </div>
                                <div>
                                    <span className={`text-xs px-2 py-1 rounded font-bold border border-white/5 
                     ${req.status === 'CONFIRMED' ? 'bg-green-500/20 text-green-400' :
                                            req.status === 'REJECTED' ? 'bg-red-500/20 text-red-400' :
                                                'bg-yellow-500/10 text-yellow-500'}`
                                    }>
                                        {req.status}
                                    </span>
                                </div>
                            </div>
                            <ChevronRight className="text-gray-600 group-hover:text-white transition-colors" />
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}
