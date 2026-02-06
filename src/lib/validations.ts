import { z } from "zod";

export const requestSchema = z.object({
    customerName: z.string().min(2, "Customer name is required"),
    customerEmail: z.string().email("Invalid email address"),
    numAttendees: z.number().int().min(2, "At least 2 attendees are required").max(10, "Maximum 10 attendees allowed"),
    deliveryType: z.enum(["ONLINE", "ONSITE"]),
    siteDetails: z.string().optional(),
    startDate: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid start date"),
    endDate: z.string().refine((val) => !isNaN(Date.parse(val)), "Invalid end date"),
    notes: z.string().optional(),
    discountPercent: z.number().min(0).max(100).optional(),
    discountReason: z.string().optional(),
    moduleId: z.string().min(1, "Module is required"),
}).refine((data) => {
    if (data.deliveryType === "ONSITE" && (!data.siteDetails || data.siteDetails.length < 3)) {
        return false;
    }
    return true;
}, {
    message: "Site details are required for onsite training",
    path: ["siteDetails"],
});

export type RequestFormData = z.infer<typeof requestSchema>;
