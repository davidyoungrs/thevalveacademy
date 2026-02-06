import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Calendar, CheckCircle, Clock, MapPin, DollarSign, FileText } from "lucide-react";
import Link from "next/link";
import WorkflowActions from "@/components/WorkflowActions";

export default async function RequestSummaryPage(props: { params: Promise<{ reference: string }> }) {
    const params = await props.params;
    const session = await getServerSession(authOptions);

    // Note: ideally check if user is allowed to view this specific request (Sales=own, Trainer/Admin/Approver=relevant)
    // For MVP, if logged in, we fetch. (Add specific RBAC check later alongside data fetch)

    const request = await prisma.trainingRequest.findUnique({
        where: { reference: params.reference },
        include: { module: true, salesperson: true, assignedTrainer: true },
    });

    if (!request) {
        return <div className="container mx-auto p-8 text-center">Request not found</div>;
    }

    // Simple RBAC check: if Sales, must be theirs. If other, allowed.
    if (session?.user && (session.user as any).role === "SALES" && request.salespersonId !== (session.user as any).id) {
        return <div className="container mx-auto p-8 text-center text-red-500">Unauthorized to view this request</div>;
    }

    const statusColors: Record<string, string> = {
        SUBMITTED: "text-yellow-500",
        AWAITING_TRAINER_CONFIRMATION: "text-orange-500",
        TRAINER_CONFIRMED: "text-blue-500",
        CONFIRMED: "text-green-500",
        REJECTED: "text-red-500",
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-200 pb-6">
                <div>
                    <h1 className="text-2xl font-bold flex items-center gap-3 text-celeros-blue-800">
                        <FileText className="text-celeros-orange" />
                        Request {request.reference}
                    </h1>
                    <p className="text-gray-500 mt-1">Created on {request.createdAt.toLocaleDateString()}</p>
                </div>
                <div className={`px-4 py-2 rounded-full border font-mono font-bold ${statusColors[request.status] || "text-gray-500 border-gray-200 bg-gray-100"}`}>
                    {request.status.replace(/_/g, " ")}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Main Details */}
                <div className="md:col-span-2 space-y-6">
                    <div className="card space-y-4">
                        <h2 className="text-lg font-bold border-b border-gray-200 pb-2 text-celeros-blue-800">Training Details</h2>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="block text-gray-500">Module</span>
                                <span className="block font-medium text-gray-900">{request.module.title}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500">Delivery Type</span>
                                <span className="block font-medium text-gray-900">{request.deliveryType}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500">Proposed Dates</span>
                                <span className="block font-medium text-gray-900">
                                    {request.startDate.toLocaleDateString()} - {request.endDate.toLocaleDateString()}
                                </span>
                            </div>
                            <div>
                                <span className="block text-gray-500">Attendees</span>
                                <span className="block font-medium text-gray-900">{request.numAttendees}</span>
                            </div>
                        </div>
                        {request.siteDetails && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <span className="block text-gray-500 mb-1">Site Details</span>
                                <p className="text-gray-700 text-sm">{request.siteDetails}</p>
                            </div>
                        )}
                    </div>

                    <div className="card space-y-4">
                        <h2 className="text-lg font-bold border-b border-gray-200 pb-2 text-celeros-blue-800">Customer Info</h2>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="block text-gray-500">Customer Name</span>
                                <span className="block font-medium text-gray-900">{request.customerName}</span>
                            </div>
                            <div>
                                <span className="block text-gray-500">Customer Email</span>
                                <span className="block font-medium text-gray-900">{request.customerEmail}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sidebar / Actions */}
                <div className="space-y-6">
                    <div className="card bg-celeros-blue-50 border-celeros-blue-100">
                        <h2 className="text-lg font-bold mb-4 flex items-center gap-2 text-celeros-blue-800">
                            <DollarSign size={20} className="text-celeros-blue-600" /> Pricing
                        </h2>
                        <div className="flex justify-between items-end">
                            <span className="text-gray-600">Total Quote</span>
                            <span className="text-2xl font-bold text-celeros-blue-900">${request.finalPrice.toLocaleString()}</span>
                        </div>
                        {request.discountPercent > 0 && (
                            <p className="text-xs text-green-600 mt-2 text-right">
                                Includes {request.discountPercent}% discount
                            </p>
                        )}
                    </div>

                    <div className="card">
                        <h2 className="text-lg font-bold mb-4 text-celeros-blue-800">Assigned Trainer</h2>
                        {request.assignedTrainer ? (
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-celeros-blue-100 text-celeros-blue-800 flex items-center justify-center font-bold">
                                    {request.assignedTrainer.name?.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-medium text-gray-900">{request.assignedTrainer.name}</p>
                                    <p className="text-xs text-gray-500">Trainer</p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-sm text-gray-500 italic">Pending assignment...</p>
                        )}
                    </div>

                    <WorkflowActions
                        requestId={request.id}
                        currentStatus={request.status}
                        userRole={(session?.user as any).role || ""}
                    />
                    <Link href="/requests" className="btn btn-outline w-full justify-center">
                        Back to My Requests
                    </Link>
                </div>
            </div>
        </div>
    );
}
