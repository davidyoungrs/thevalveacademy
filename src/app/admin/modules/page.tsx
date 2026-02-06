import prisma from "@/lib/prisma";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Edit, Plus } from "lucide-react";

export default async function AdminModulesPage() {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== "ADMIN") {
        redirect("/unauthorized");
    }

    const modules = await prisma.module.findMany({
        orderBy: { moduleNo: "asc" },
    });

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Manage Modules</h1>
            </div>

            <div className="grid gap-4">
                {modules.map((mod) => (
                    <div key={mod.id} className="card flex items-center justify-between p-4">
                        <div>
                            <div className="flex items-center gap-3 mb-1">
                                <span className="font-mono text-blue-400 font-bold">{mod.moduleNo}</span>
                                <span className="text-xs text-gray-400 uppercase border border-gray-700 px-1.5 rounded">
                                    {mod.category}
                                </span>
                            </div>
                            <h3 className="font-bold">{mod.title}</h3>
                            <p className="text-sm text-gray-500">
                                {mod.durationDays} days • ${mod.onlinePricePerAttendee} Online / ${mod.onsitePricePerAttendee} Onsite
                            </p>
                        </div>
                        <button className="btn btn-secondary py-1.5 px-3">
                            <Edit size={16} /> Edit
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
