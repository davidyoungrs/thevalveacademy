import prisma from "@/lib/prisma";
import Link from "next/link";
import { Search, ArrowRight, Clock, Users, BookOpen } from "lucide-react";

async function getModules() {
    return await prisma.module.findMany({
        orderBy: { moduleNo: 'asc' },
    });
}

function ModuleCard({ module }: { module: any }) {
    const isVE02 = module.moduleNo.startsWith("VE02");
    const displayPrice = isVE02 ? module.onsitePricePerAttendee : module.onlinePricePerAttendee;
    const displayLabel = isVE02 ? "per person" : "online";

    return (
        <div className="card group hover:border-blue-500/50 transition-all flex flex-col">
            <div className="flex items-start justify-between mb-4">
                <span className="text-xs font-mono font-bold text-celeros-blue-600 bg-celeros-blue-50 px-2 py-1 rounded">
                    {module.moduleNo}
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                    {module.category}
                </span>
            </div>

            <h3 className="text-lg font-bold mb-2 group-hover:text-celeros-blue-600 transition-colors text-gray-900">
                {module.title}
            </h3>

            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                    <Clock size={14} /> {module.durationDays} {module.durationDays === 1 ? 'day' : 'days'}
                </span>
                <span className="flex items-center gap-1">
                    <Users size={14} /> Min 1 attendee
                </span>
            </div>

            <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="text-sm">
                    <span className="text-gray-500 block">From</span>
                    <span className="text-lg font-bold text-celeros-blue-800">${displayPrice}</span>
                    <span className="text-xs text-gray-500 ml-1">{displayLabel}</span>
                </div>

                <Link
                    href={`/request/new/${module.moduleNo}`}
                    className="btn btn-primary px-3 py-1.5 text-sm"
                >
                    Request <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
}

export default async function LandingPage() {
    const modules = await getModules();

    return (
        <div className="space-y-12">
            {/* Hero */}
            <section className="text-center max-w-3xl mx-auto space-y-6 py-12">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-celeros-blue-800">
                    The Valve <span className="text-celeros-orange">Academy.</span>
                </h1>
                <p className="text-xl text-gray-600">
                    From fundamentals to field ready.
                </p>
            </section>

            {/* Module Catalog */}
            <section className="space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h2 className="text-2xl font-bold flex items-center gap-2">
                        <BookOpen className="text-blue-500" />
                        Module Catalog
                    </h2>
                    <div className="relative max-w-sm w-full">
                        <Search className="absolute left-3 top-2.5 text-gray-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search modules..."
                            className="input-field pl-10"
                        />
                    </div>
                </div>

                <div className="space-y-8">
                    {/* Row 1: VE01-01 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {modules.filter(m => ['VE01-01'].includes(m.moduleNo)).map(module => (
                            <ModuleCard key={module.id} module={module} />
                        ))}
                    </div>

                    {/* Row 2: VE02-01, VE02-02, VE02-03, VE02-04 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {modules.filter(m => ['VE02-01', 'VE02-02', 'VE02-03', 'VE02-04'].includes(m.moduleNo)).map(module => (
                            <ModuleCard key={module.id} module={module} />
                        ))}
                    </div>

                    {/* Row 3: VE02-05, VE02-06 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {modules.filter(m => ['VE02-05', 'VE02-06'].includes(m.moduleNo)).map(module => (
                            <ModuleCard key={module.id} module={module} />
                        ))}
                    </div>
                </div>
            </section>

            <div className="flex justify-center pt-8 pb-12">
                <Link href="/requests" className="btn btn-secondary px-6 py-2">
                    My Requests
                </Link>
            </div>
        </div>
    );
}
