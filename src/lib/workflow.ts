export type RequestStatus =
    | "SUBMITTED"
    | "AWAITING_TRAINER_CONFIRMATION"
    | "TRAINER_CONFIRMED"
    | "AWAITING_APPROVER_1"
    | "AWAITING_APPROVER_2"
    | "CONFIRMED"
    | "REJECTED"
    | "NO_TRAINER_AVAILABLE";

export const ALLOWED_TRANSITIONS: Record<RequestStatus, RequestStatus[]> = {
    SUBMITTED: ["AWAITING_TRAINER_CONFIRMATION", "NO_TRAINER_AVAILABLE"],
    AWAITING_TRAINER_CONFIRMATION: ["TRAINER_CONFIRMED", "REJECTED", "NO_TRAINER_AVAILABLE"], // Trainer accepts or rejects
    TRAINER_CONFIRMED: ["AWAITING_APPROVER_1", "REJECTED"],
    AWAITING_APPROVER_1: ["CONFIRMED", "AWAITING_APPROVER_2", "REJECTED"], // Appr 1 accepts (-> Confirmed or Appr 2) or rejects
    AWAITING_APPROVER_2: ["CONFIRMED", "REJECTED"],
    CONFIRMED: [], // Terminal
    REJECTED: ["SUBMITTED"], // Can be resubmitted (maybe creates new request or resets this one?)
    NO_TRAINER_AVAILABLE: ["SUBMITTED", "REJECTED"], // Admin can re-trigger or reject
};

export const ROLE_PERMISSIONS: Record<string, RequestStatus[]> = {
    SALES: ["SUBMITTED"], // Sales can only "Submit" (create)
    TRAINER: ["TRAINER_CONFIRMED", "REJECTED", "AWAITING_TRAINER_CONFIRMATION"], // Trainer can act on these
    APPROVER: ["CONFIRMED", "REJECTED", "AWAITING_APPROVER_2"],
    ADMIN: ["SUBMITTED", "AWAITING_TRAINER_CONFIRMATION", "TRAINER_CONFIRMED", "AWAITING_APPROVER_1", "AWAITING_APPROVER_2", "CONFIRMED", "REJECTED", "NO_TRAINER_AVAILABLE"],
};

export function canTransition(currentStatus: string, nextStatus: string): boolean {
    const allowed = ALLOWED_TRANSITIONS[currentStatus as RequestStatus];
    return allowed ? allowed.includes(nextStatus as RequestStatus) : false;
}

export function getNextStatus(currentStatus: string, action: "APPROVE" | "REJECT", discountPercent: number): string {
    if (action === "REJECT") return "REJECTED";

    switch (currentStatus) {
        case "AWAITING_TRAINER_CONFIRMATION":
            return "TRAINER_CONFIRMED";
        case "TRAINER_CONFIRMED":
            return "AWAITING_APPROVER_1";
        case "AWAITING_APPROVER_1":
            // If discount > 20%, need Approver 2
            if (discountPercent > 20) return "AWAITING_APPROVER_2";
            return "CONFIRMED";
        case "AWAITING_APPROVER_2":
            return "CONFIRMED";
        default:
            return currentStatus;
    }
}
