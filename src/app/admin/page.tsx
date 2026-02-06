import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Users, FileText, Settings, Calendar, DollarSign } from "lucide-react";

export default async function AdminDashboard() {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== "ADMIN") {
        redirect("/unauthorized");
    }

    const adminModules = [
        { label: "Manage Modules", href: "/admin/modules", icon: FileText, desc: "Edit courses and assign trainers" },
        { label: "Manage Users", href: "/admin/users", icon: Users, desc: "Add or remove users and roles" },
        { label: "Pricing Rules", href: "/admin/pricing", icon: DollarSign, desc: "Set base prices and discounts" },
        { label: "Busy Blocks", href: "/admin/availability", icon: Calendar, desc: "Manage trainer availability" },
        { label: "Settings", href: "/admin/settings", icon: Settings, desc: "System configuration" },
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adminModules.map((mod) => (
                    <Link
                        key={mod.href}
                        href={mod.href}
                        className="card hover:border-blue-500/50 hover:bg-white/5 transition-all p-6 flex flex-col items-center text-center space-y-4"
                    >
                        <div className="p-4 rounded-full bg-industrial-800 text-blue-400">
                            <mod.icon size={32} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">{mod.label}</h3>
                            <p className="text-gray-400 text-sm">{mod.desc}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
