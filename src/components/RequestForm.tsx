"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { requestSchema, type RequestFormData } from "@/lib/validations";
import { useState, useEffect } from "react";
import { submitTrainingRequest } from "@/app/actions/requests";
import { useRouter } from "next/navigation";
import { Calculator, Calendar, Users, AlertCircle, CheckCircle } from "lucide-react";
import { calculatePrice } from "@/lib/utils";

type ModuleProps = {
    id: string;
    moduleNo: string;
    title: string;
    durationDays: number;
    onlinePricePerAttendee: number;
    onsitePricePerAttendee: number;
};

export default function RequestForm({ moduleData, userEmail, userName }: { moduleData: ModuleProps, userEmail?: string, userName?: string }) {
    const router = useRouter();
    const [serverError, setServerError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const isVE02 = moduleData.moduleNo.startsWith("VE02");

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm<RequestFormData>({
        resolver: zodResolver(requestSchema),
        defaultValues: {
            moduleId: moduleData.id,
            customerName: userName || "",
            customerEmail: userEmail || "",
            numAttendees: 2,
            deliveryType: isVE02 ? "ONSITE" : "ONLINE",
            discountPercent: 0,
        },
    });

    const deliveryType = watch("deliveryType");
    const numAttendees = watch("numAttendees");
    const discountPercent = watch("discountPercent") || 0;
    const startDate = watch("startDate");

    // Enforce ONSITE for VE02 if somehow changed
    useEffect(() => {
        if (isVE02 && deliveryType !== "ONSITE") {
            setValue("deliveryType", "ONSITE");
        }
    }, [isVE02, deliveryType, setValue]);

    // Auto-calculate price for display
    const basePrice = calculatePrice(
        deliveryType,
        numAttendees || 0,
        moduleData.onlinePricePerAttendee,
        moduleData.onsitePricePerAttendee
    );
    const discountAmount = basePrice * (discountPercent / 100);
    const finalPrice = basePrice - discountAmount;

    // Auto-suggest end date
    useEffect(() => {
        if (startDate && !isNaN(Date.parse(startDate))) {
            const start = new Date(startDate);
            // Simple logic: add business days ideally, but for MVP just add days
            // A better implementation would skip weekends
            const end = new Date(start);
            // Subtract 1 because if 1 day duration, start = end
            const daysToAdd = Math.ceil(moduleData.durationDays) - 1;
            end.setDate(end.getDate() + (daysToAdd >= 0 ? daysToAdd : 0));
            setValue("endDate", end.toISOString().split("T")[0]);
        }
    }, [startDate, moduleData.durationDays, setValue]);

    const onSubmit = async (data: RequestFormData) => {
        setIsSubmitting(true);
        setServerError("");

        // Server expects strings for dates, usually works fine with ISO strings or the inputs
        // Zod schema expects strings that are parseable dates
        const res = await submitTrainingRequest(data);

        if (res.error) {
            setServerError(res.error);
            setIsSubmitting(false);
        } else {
            router.push(`/requests/${res.reference}`);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2 space-y-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 card">
                    <h2 className="text-xl font-bold border-b border-gray-200 pb-4 mb-4 text-celeros-blue-800">Request Details</h2>

                    {serverError && (
                        <div className="p-4 bg-red-900/20 border border-red-500/50 rounded-lg flex items-center gap-2 text-red-500">
                            <AlertCircle size={18} /> {serverError}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                            <input {...register("customerName")} className="input-field" placeholder="Client Name" />
                            {errors.customerName && <p className="text-red-500 text-xs mt-1">{errors.customerName.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Customer Email</label>
                            <input {...register("customerEmail")} className="input-field" placeholder="client@company.com" />
                            {errors.customerEmail && <p className="text-red-500 text-xs mt-1">{errors.customerEmail.message}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Type</label>
                            {isVE02 ? (
                                <div className="input-field bg-gray-100 text-gray-700 flex items-center">
                                    CFT Facility
                                    <input type="hidden" {...register("deliveryType")} value="ONSITE" />
                                </div>
                            ) : (
                                <select {...register("deliveryType")} className="input-field">
                                    <option value="ONLINE">Online (Webinar)</option>
                                    <option value="ONSITE">CFT Facility</option>
                                </select>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Attendees</label>
                            <div className="relative">
                                <Users className="absolute left-3 top-2.5 text-gray-500" size={18} />
                                <input
                                    type="number"
                                    {...register("numAttendees", { valueAsNumber: true })}
                                    className="input-field pl-10"
                                    min={2}
                                    max={10}
                                    step={1}
                                />
                            </div>
                            {errors.numAttendees && <p className="text-red-500 text-xs mt-1">{errors.numAttendees.message}</p>}
                        </div>
                    </div>

                    {deliveryType === "ONSITE" && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Preferred CFT Facility</label>
                            <select {...register("siteDetails")} className="input-field">
                                <option value="Houston">Houston</option>
                                <option value="Oklahoma">Oklahoma</option>
                            </select>
                            {errors.siteDetails && <p className="text-red-500 text-xs mt-1">{errors.siteDetails.message}</p>}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">Proposed Start Date</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-2.5 text-gray-500" size={18} />
                                <input type="date" {...register("startDate")} className="input-field pl-10" />
                            </div>
                            {errors.startDate && <p className="text-red-500 text-xs mt-1">{errors.startDate.message}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-1">End Date (Auto-calc)</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-2.5 text-gray-500" size={18} />
                                <input type="date" {...register("endDate")} className="input-field pl-10" />
                            </div>
                            {errors.endDate && <p className="text-red-500 text-xs mt-1">{errors.endDate.message}</p>}
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Additional Notes</label>
                        <textarea {...register("notes")} className="input-field min-h-[100px]" placeholder="Specific topics to cover..." />
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                        <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
                            <Calculator size={16} /> Discounts (Optional)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Discount %</label>
                                <input
                                    type="number"
                                    {...register("discountPercent", { valueAsNumber: true })}
                                    className="input-field"
                                    min={0} max={100} step={0.1}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Reason</label>
                                <input {...register("discountReason")} className="input-field" placeholder="Volume deal, Partner, etc." />
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary w-full py-3 text-lg mt-4"
                    >
                        {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                    </button>
                </form>
            </div>

            {/* Pricing Summary Card */}
            <div className="space-y-6">
                <div className="card sticky top-24 border-celeros-blue-100 bg-celeros-blue-50">
                    <h3 className="text-lg font-bold text-celeros-blue-800 mb-4">Quote Summary</h3>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between text-gray-500">
                            <span>Module</span>
                            <span className="text-celeros-blue-900 text-right font-medium">{moduleData.title}</span>
                        </div>
                        <div className="flex justify-between text-gray-500">
                            <span>Duration</span>
                            <span className="text-celeros-blue-900 font-medium">{moduleData.durationDays} Days</span>
                        </div>
                        <div className="flex justify-between text-gray-500">
                            <span>Type</span>
                            <span className="text-celeros-blue-900 font-medium">{deliveryType === "ONLINE" ? "Online" : "Onsite"}</span>
                        </div>
                        <div className="flex justify-between text-gray-500">
                            <span>Attendees</span>
                            <span className="text-celeros-blue-900 font-medium">{numAttendees}</span>
                        </div>

                        <div className="border-t border-celeros-blue-200 my-4 pt-4 space-y-2">
                            <div className="flex justify-between text-gray-600">
                                <span>Base Price</span>
                                <span>${basePrice.toFixed(2)}</span>
                            </div>
                            {discountPercent > 0 && (
                                <div className="flex justify-between text-green-600">
                                    <span>Discount ({discountPercent}%)</span>
                                    <span>-${discountAmount.toFixed(2)}</span>
                                </div>
                            )}
                            <div className="flex justify-between text-xl font-bold text-celeros-blue-800 pt-2 border-t border-celeros-blue-200 mt-2">
                                <span>Total</span>
                                <span>${finalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 p-3 bg-white rounded border border-celeros-blue-200 text-xs text-center text-gray-500">
                        <p className="flex items-center justify-center gap-2">
                            <CheckCircle size={14} className="text-green-500" />
                            This quote is indicative and subject to trainer availability confirmation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
