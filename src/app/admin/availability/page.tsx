import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { addBusyBlock, deleteBusyBlock } from "@/app/actions/availability";
import { Trash2, Calendar, Plus } from "lucide-react";

export default async function AdminAvailabilityPage() {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== "ADMIN") {
        redirect("/unauthorized");
    }

    const trainers = await prisma.trainerProfile.findMany({
        include: {
            user: true,
            busyBlocks: {
                orderBy: { startDate: 'asc' }
            }
        }
    });

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <h1 className="text-3xl font-bold text-celeros-blue-800">Trainer Availability Management</h1>
            <p className="text-gray-600">Manage busy periods (holidays, external commitments) for trainers. Trainers will not be auto-assigned during these blocks.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainers.map((trainer) => (
                    <div key={trainer.id} className="card p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-celeros-blue-100 flex items-center justify-center text-celeros-blue-800 font-bold">
                                {trainer.user.name?.[0] || "T"}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">{trainer.user.name}</h3>
                                <p className="text-xs text-gray-500">{trainer.user.email}</p>
                            </div>
                        </div>

                        {/* Add Block Form */}
                        <form action={async (formData) => {
                            "use server";
                            await addBusyBlock(formData);
                        }} className="mb-6 bg-gray-50 p-4 rounded text-sm space-y-3">
                            <input type="hidden" name="trainerProfileId" value={trainer.id} />

                            <div>
                                <label className="block text-xs font-bold text-gray-600 mb-1">Add Busy Period</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <input type="date" name="startDate" required className="input-field text-xs py-1" />
                                    <input type="date" name="endDate" required className="input-field text-xs py-1" />
                                </div>
                            </div>
                            <input
                                type="text"
                                name="reason"
                                placeholder="Reason (e.g., Annual Leave)"
                                required
                                className="input-field text-xs py-1"
                            />
                            <button type="submit" className="btn btn-secondary w-full py-1 text-xs flex items-center justify-center gap-1">
                                <Plus size={12} /> Add Block
                            </button>
                        </form>

                        {/* Existing Blocks */}
                        <div className="space-y-2">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                                <Calendar size={12} /> Scheduled Blocks
                            </h4>
                            {trainer.busyBlocks.length === 0 ? (
                                <p className="text-xs text-gray-400 italic">No busy blocks scheduled.</p>
                            ) : (
                                <div className="space-y-2">
                                    {trainer.busyBlocks.map((block) => (
                                        <div key={block.id} className="flex justify-between items-center bg-red-50 p-2 rounded border border-red-100">
                                            <div>
                                                <p className="text-xs font-bold text-red-800">{block.reason}</p>
                                                <p className="text-[10px] text-red-600">
                                                    {new Date(block.startDate).toLocaleDateString()} - {new Date(block.endDate).toLocaleDateString()}
                                                </p>
                                            </div>
                                            <form action={async () => {
                                                "use server";
                                                await deleteBusyBlock(block.id);
                                            }}>
                                                <button className="text-red-400 hover:text-red-600 transition-colors p-1">
                                                    <Trash2 size={14} />
                                                </button>
                                            </form>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
