"use client";

import { useState } from "react";
import { processWorkflowAction } from "@/app/actions/workflow";
import { CheckCircle, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WorkflowActions({ requestId, currentStatus, userRole }: { requestId: string, currentStatus: string, userRole: string }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleAction = async (action: "APPROVE" | "REJECT") => {
        if (!confirm(`Are you sure you want to ${action} this request?`)) return;

        setLoading(true);
        const res = await processWorkflowAction(requestId, action);
        setLoading(false);

        if (res.success) {
            router.refresh();
        } else {
            alert(res.error || "Action failed");
        }
    };

    // Determine if buttons should be shown based on role and status
    // Logic matches workflow.ts but simplified for UI
    const showTrainerActions = userRole === "TRAINER" && currentStatus === "AWAITING_TRAINER_CONFIRMATION";
    const showApproverActions = userRole === "APPROVER" && (currentStatus.startsWith("AWAITING_APPROVER"));
    const showAdminActions = userRole === "ADMIN"; // Admin can force things? Ideally explicit state check too

    if (!showTrainerActions && !showApproverActions && !showAdminActions) return null;

    // Refine: Admin shouldn't see it unless they are acting as that role or we have explicit Admin overrides.
    // For MVP, lets just stick to the strict workflow logic + Admin override.
    // Actually, specifically for MVP:
    // Trainer sees buttons if status is AWAITING_TRAINER_CONFIRMATION
    // Approver sees buttons if status is AWAITING_APPROVER_1 or 2


    // Hide if terminal
    if (["CONFIRMED", "REJECTED", "NO_TRAINER_AVAILABLE"].includes(currentStatus)) return null;

    return (
        <div className="card border-celeros-blue-100 bg-celeros-blue-50 mt-6">
            <h3 className="text-lg font-bold mb-4 text-celeros-blue-800">Actions Required</h3>
            <div className="flex gap-4">
                <button
                    onClick={() => handleAction("APPROVE")}
                    disabled={loading}
                    className="btn bg-green-600 hover:bg-green-700 text-white"
                >
                    <CheckCircle size={18} /> {userRole === "TRAINER" ? "Confirm Availability" : "Approve Request"}
                </button>
                <button
                    onClick={() => handleAction("REJECT")}
                    disabled={loading}
                    className="btn bg-red-600 hover:bg-red-700 text-white"
                >
                    <XCircle size={18} /> Reject
                </button>
            </div>
        </div>
    );
}
