import prisma from "@/lib/prisma";
import { FileText, Calendar, Clock, MapPin, DollarSign, CheckCircle } from "lucide-react";
import Link from "next/link";
import DownloadQuoteButton from "@/components/DownloadQuoteButton";

export default async function PublicQuotePage(props: { params: Promise<{ reference: string }> }) {
    const params = await props.params;
    // Public page - NO SESSION CHECK
    // In a real app, verify a token from query params or strict reference format

    const request = await prisma.trainingRequest.findUnique({
        where: { reference: params.reference },
        include: { module: true, salesperson: true },
    });

    if (!request) {
        return (
            <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-celeros-blue-100">
                <div className="text-center p-8">
                    <h1 className="text-3xl font-bold mb-4 text-celeros-blue-800">Quote Not Found</h1>
                    <p className="text-gray-500">The quote reference you provided is invalid or has expired.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-celeros-blue-100">

            {/* Simple Header */}
            <header className="border-b border-gray-100 bg-white sticky top-0 z-10 shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <div className="font-bold text-xl tracking-tight text-celeros-blue-800">
                            <span className="text-celeros-blue-600">VALVE</span>ACADEMY
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-sm text-gray-500 hidden md:block">
                            Quote Ref: <span className="font-mono text-celeros-blue-800 font-bold">{request.reference}</span>
                        </div>
                        <DownloadQuoteButton data={request} />
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto p-4 md:p-8 space-y-8">

                {/* Hero / Status */}
                <div className="text-center py-8">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-celeros-blue-800">
                        Training Proposal
                    </h1>
                    <p className="text-xl text-gray-600">
                        Prepared for <span className="text-celeros-blue-800 font-semibold">{request.customerName}</span>
                    </p>
                </div>

                <div className="card p-8 border-t-4 border-celeros-orange bg-white shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-celeros-blue-800">
                                <FileText className="text-celeros-orange" /> Course Details
                            </h2>
                            <div className="space-y-4">
                                <div>
                                    <span className="text-xs font-bold text-celeros-blue-600 uppercase tracking-wider">Module</span>
                                    <p className="text-lg font-medium text-gray-900">{request.module.title}</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <span className="text-xs font-bold text-celeros-blue-600 uppercase tracking-wider">Duration</span>
                                        <p className="flex items-center gap-2 text-gray-700"><Clock size={16} className="text-gray-400" /> {request.module.durationDays} Days</p>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-celeros-blue-600 uppercase tracking-wider">Type</span>
                                        <p className="flex items-center gap-2 text-gray-700">
                                            {request.deliveryType === "ONLINE" ? <MapPin size={16} className="text-gray-400" /> : <MapPin size={16} className="text-gray-400" />}
                                            {request.deliveryType}
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-celeros-blue-600 uppercase tracking-wider">Attendees</span>
                                    <p className="text-lg text-gray-900">{request.numAttendees} Participants</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-celeros-blue-50 rounded-xl p-6 border border-celeros-blue-100">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-2 text-celeros-blue-800">
                                <DollarSign className="text-celeros-blue-600" /> Investment
                            </h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-gray-500">
                                    <span>Valid Until</span>
                                    <span>{new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</span>
                                </div>
                                <div className="h-px bg-celeros-blue-200 my-4" />
                                <div className="flex justify-between items-end text-celeros-blue-900">
                                    <span className="font-bold text-xl">Total</span>
                                    <span className="font-bold text-4xl">${request.finalPrice.toLocaleString()}</span>
                                </div>
                                {request.discountPercent > 0 && (
                                    <p className="text-right text-xs text-green-600 mt-2">Includes preferred partner pricing</p>
                                )}
                            </div>

                            <button className="btn btn-primary w-full mt-8 py-3 text-lg">
                                Accept Proposal
                            </button>
                            <p className="text-center text-xs text-gray-500 mt-4">
                                By accepting, you agree to our Terms of Service.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-100">
                        <h3 className="font-bold mb-4 flex items-center gap-2 text-celeros-blue-800">
                            <Calendar size={18} className="text-gray-400" /> Proposed Schedule
                        </h3>
                        <div className="flex flex-col md:flex-row gap-4 md:items-center bg-gray-50 p-4 rounded border border-gray-200">
                            <div className="text-center md:text-left">
                                <span className="block text-2xl font-bold text-celeros-blue-800">{request.startDate.getDate()}</span>
                                <span className="block text-xs uppercase text-gray-500">{request.startDate.toLocaleString('default', { month: 'short' })}</span>
                            </div>
                            <div className="hidden md:block h-8 w-px bg-gray-300" />
                            <div className="flex-1">
                                <p className="text-gray-600">
                                    Expected start date subject to final trainer confirmation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <footer className="text-center text-gray-500 text-sm py-8">
                    &copy; {new Date().getFullYear()} TheValve.pro. All rights reserved.
                </footer>
            </main>
        </div>
    );
}
