import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function generateReference() {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const random = Math.floor(1000 + Math.random() * 9000);
    return `VA-${yyyy}${mm}${dd}-${random}`;
}

export function calculatePrice(
    deliveryType: "ONLINE" | "ONSITE",
    attendees: number,
    onlinePrice: number,
    onsitePrice: number
) {
    if (deliveryType === "ONLINE") {
        return onlinePrice * attendees;
    } else {
        // Basic onsite logic: price per head for MVP, can be tiered later
        return onsitePrice * attendees;
    }
}
