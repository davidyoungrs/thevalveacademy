"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { LogOut, User, LayoutDashboard, FileText, Settings, Inbox, Menu, X, Calendar } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    const roleNavigation: Record<string, { label: string; href: string; icon: any }[]> = {
        SALES: [
            { label: "Our Modules", href: "/", icon: FileText },
            { label: "My Requests", href: "/requests", icon: Inbox },
        ],
        TRAINER: [
            { label: "My Inbox", href: "/trainer/inbox", icon: Inbox },
        ],
        APPROVER: [
            { label: "Approvals", href: "/approver/inbox", icon: Inbox },
        ],
        ADMIN: [
            { label: "Modules", href: "/admin/modules", icon: FileText },
            { label: "Availability", href: "/admin/availability", icon: Calendar },
            { label: "Users", href: "/admin/users", icon: User },
            { label: "Settings", href: "/admin/settings", icon: Settings },
        ],
    };

    const navItems = session?.user ? roleNavigation[(session.user as any).role] || [] : [];

    return (
        <nav className="bg-celeros-blue-800 text-white border-b border-celeros-blue-900 sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-4 group">
                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-celeros-orange-500 transition-colors">
                        VALVE ACADEMY
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} className="text-gray-300 hover:text-white flex items-center gap-2 text-sm transition-colors">
                            <item.icon size={16} />
                            {item.label}
                        </Link>
                    ))}
                    {session ? (
                        <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-800">
                            <span className="text-sm text-gray-400">{(session.user as any).role}</span>
                            <button onClick={() => signOut()} className="text-gray-400 hover:text-white transition-colors">
                                <LogOut size={18} />
                            </button>
                        </div>
                    ) : (
                        <Link href="/login" className="btn btn-primary py-1.5 text-sm">
                            Login
                        </Link>
                    )}
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden text-gray-400" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-celeros-blue-900 border-b border-celeros-blue-700 p-4 space-y-4">
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-gray-300 py-2">
                            <item.icon size={20} />
                            {item.label}
                        </Link>
                    ))}
                    {!session && (
                        <Link href="/login" className="btn btn-primary w-full">Login</Link>
                    )}
                    {session && (
                        <button onClick={() => signOut()} className="btn btn-secondary w-full">
                            <LogOut size={18} /> Logout
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
}
