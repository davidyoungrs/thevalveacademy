(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/validations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requestSchema",
    ()=>requestSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const requestSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    customerName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(2, "Customer name is required"),
    customerEmail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email("Invalid email address"),
    numAttendees: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().int().min(2, "At least 2 attendees are required").max(10, "Maximum 10 attendees allowed"),
    deliveryType: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "ONLINE",
        "ONSITE"
    ]),
    siteDetails: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    startDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((val)=>!isNaN(Date.parse(val)), "Invalid start date"),
    endDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().refine((val)=>!isNaN(Date.parse(val)), "Invalid end date"),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    discountPercent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0).max(100).optional(),
    discountReason: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    moduleId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Module is required")
}).refine((data)=>{
    if (data.deliveryType === "ONSITE" && (!data.siteDetails || data.siteDetails.length < 3)) {
        return false;
    }
    return true;
}, {
    message: "Site details are required for onsite training",
    path: [
        "siteDetails"
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/actions/data:e0d051 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitTrainingRequest",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40b8c1c22ab8e98a92af3aae39b36aaf7ef022d14a":"submitTrainingRequest"},"src/app/actions/requests.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("40b8c1c22ab8e98a92af3aae39b36aaf7ef022d14a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitTrainingRequest");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcmVxdWVzdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc2VydmVyXCI7XG5cbmltcG9ydCBwcmlzbWEgZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgcmVxdWVzdFNjaGVtYSB9IGZyb20gXCJAL2xpYi92YWxpZGF0aW9uc1wiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIkAvbGliL2F1dGhcIjtcbmltcG9ydCB7IGdlbmVyYXRlUmVmZXJlbmNlLCBjYWxjdWxhdGVQcmljZSB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiO1xuaW1wb3J0IHsgcmVkaXJlY3QgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzdWJtaXRUcmFpbmluZ1JlcXVlc3QoZm9ybURhdGE6IGFueSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcblxuICAgIGlmICghc2Vzc2lvbiB8fCAhc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IHJlcXVlc3RTY2hlbWEuc2FmZVBhcnNlKGZvcm1EYXRhKTtcblxuICAgIGlmICghdmFsaWRhdGlvbi5zdWNjZXNzKSB7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIlZhbGlkYXRpb24gZmFpbGVkXCIsIGRldGFpbHM6IHZhbGlkYXRpb24uZXJyb3IuZmxhdHRlbigpIH07XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IHZhbGlkYXRpb24uZGF0YTtcblxuICAgIC8vIEZldGNoIG1vZHVsZSBmb3IgcHJpY2luZ1xuICAgIGNvbnN0IG1vZHVsZURhdGEgPSBhd2FpdCBwcmlzbWEubW9kdWxlLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyBpZDogZGF0YS5tb2R1bGVJZCB9LFxuICAgICAgICBpbmNsdWRlOiB7IHRyYWluZXJzOiB7IG9yZGVyQnk6IHsgcHJpb3JpdHlPcmRlcjogJ2FzYycgfSB9IH1cbiAgICB9KTtcblxuICAgIGlmICghbW9kdWxlRGF0YSkge1xuICAgICAgICByZXR1cm4geyBlcnJvcjogXCJNb2R1bGUgbm90IGZvdW5kXCIgfTtcbiAgICB9XG5cbiAgICBjb25zdCBwcmljZSA9IGNhbGN1bGF0ZVByaWNlKFxuICAgICAgICBkYXRhLmRlbGl2ZXJ5VHlwZSxcbiAgICAgICAgZGF0YS5udW1BdHRlbmRlZXMsXG4gICAgICAgIG1vZHVsZURhdGEub25saW5lUHJpY2VQZXJBdHRlbmRlZSxcbiAgICAgICAgbW9kdWxlRGF0YS5vbnNpdGVQcmljZVBlckF0dGVuZGVlXG4gICAgKTtcblxuICAgIC8vIEFwcGx5IGRpc2NvdW50IGlmIGFueVxuICAgIGxldCBmaW5hbFByaWNlID0gcHJpY2U7XG4gICAgaWYgKGRhdGEuZGlzY291bnRQZXJjZW50ICYmIGRhdGEuZGlzY291bnRQZXJjZW50ID4gMCkge1xuICAgICAgICBmaW5hbFByaWNlID0gcHJpY2UgKiAoMSAtIGRhdGEuZGlzY291bnRQZXJjZW50IC8gMTAwKTtcbiAgICB9XG5cbiAgICAvLyBHZW5lcmF0ZSBSZWZlcmVuY2VcbiAgICBsZXQgcmVmZXJlbmNlID0gZ2VuZXJhdGVSZWZlcmVuY2UoKTtcbiAgICAvLyBFbnN1cmUgdW5pcXVlbmVzcyAoc2ltcGxlIHJldHJ5IGxvb3ApXG4gICAgbGV0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLnRyYWluaW5nUmVxdWVzdC5maW5kVW5pcXVlKHsgd2hlcmU6IHsgcmVmZXJlbmNlIH0gfSk7XG4gICAgd2hpbGUgKGV4aXN0aW5nKSB7XG4gICAgICAgIHJlZmVyZW5jZSA9IGdlbmVyYXRlUmVmZXJlbmNlKCk7XG4gICAgICAgIGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLnRyYWluaW5nUmVxdWVzdC5maW5kVW5pcXVlKHsgd2hlcmU6IHsgcmVmZXJlbmNlIH0gfSk7XG4gICAgfVxuXG4gICAgLy8gRGV0ZXJtaW5lIGluaXRpYWwgc3RhdHVzXG4gICAgLy8gRm9yIE1WUCwgaWYgZGlzY291bnQgPiAyMCUsIGdvIHRvIEFwcHJvdmVyPyBPciBqdXN0IHN0YXJ0IG1vc3RseSBhcyBTVUJNSVRURUQvQVdBSVRJTkdfVFJBSU5FUlxuICAgIC8vIFJlcXVpcmVtZW50cyBzYXk6IFNVQk1JVFRFRCAtPiBBV0FJVElOR19UUkFJTkVSX0NPTkZJUk1BVElPTlxuICAgIGNvbnN0IGluaXRpYWxTdGF0dXMgPSBcIkFXQUlUSU5HX1RSQUlORVJfQ09ORklSTUFUSU9OXCI7XG5cbiAgICAvLyBBdHRlbXB0IGF1dG8tYXNzaWduIHRyYWluZXJcbiAgICBsZXQgYXNzaWduZWRUcmFpbmVySWQgPSBudWxsO1xuICAgIGxldCBhc3NpZ25lZFN0YXR1cyA9IGluaXRpYWxTdGF0dXM7XG5cbiAgICBjb25zdCBzdGFydERhdGVPYmogPSBuZXcgRGF0ZShkYXRhLnN0YXJ0RGF0ZSk7XG4gICAgY29uc3QgZW5kRGF0ZU9iaiA9IG5ldyBEYXRlKGRhdGEuZW5kRGF0ZSk7XG5cbiAgICBmb3IgKGNvbnN0IHRyYWluZXJSZWwgb2YgbW9kdWxlRGF0YS50cmFpbmVycykge1xuICAgICAgICBjb25zdCB0cElkID0gdHJhaW5lclJlbC50cmFpbmVyUHJvZmlsZUlkO1xuXG4gICAgICAgIC8vIENoZWNrIGZvciBCdXN5QmxvY2tzXG4gICAgICAgIGNvbnN0IGJ1c3lCbG9ja3MgPSBhd2FpdCBwcmlzbWEuYnVzeUJsb2NrLmNvdW50KHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgdHJhaW5lclByb2ZpbGVJZDogdHBJZCxcbiAgICAgICAgICAgICAgICBzdGFydERhdGU6IHsgbHRlOiBlbmREYXRlT2JqIH0sXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogeyBndGU6IHN0YXJ0RGF0ZU9iaiB9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoYnVzeUJsb2NrcyA+IDApIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIENoZWNrIGZvciBDb25maXJtZWQgQ2FsZW5kYXIgRXZlbnRzIChuZWVkIHVzZXJJZCBmb3IgdGhpcyB1c3VhbGx5LCBidXQgQ2FsZW5kYXJFdmVudCBsaW5rcyB0byBVc2VyKHRyYWluZXJJZCkpXG4gICAgICAgIC8vIEZpcnN0IGdldCB0aGUgVXNlciBJRCBmb3IgdGhpcyBwcm9maWxlXG4gICAgICAgIGNvbnN0IHRyYWluZXJQcm9maWxlID0gYXdhaXQgcHJpc21hLnRyYWluZXJQcm9maWxlLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHRwSWQgfSxcbiAgICAgICAgICAgIGluY2x1ZGU6IHsgdXNlcjogdHJ1ZSB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghdHJhaW5lclByb2ZpbGUpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCB0VXNlcklkID0gdHJhaW5lclByb2ZpbGUudXNlci5pZDtcblxuICAgICAgICBjb25zdCBjb25mbGljdHMgPSBhd2FpdCBwcmlzbWEuY2FsZW5kYXJFdmVudC5jb3VudCh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIHRyYWluZXJJZDogdFVzZXJJZCxcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkNPTkZJUk1FRFwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiB7IGx0ZTogZW5kRGF0ZU9iaiB9LFxuICAgICAgICAgICAgICAgIGVuZDogeyBndGU6IHN0YXJ0RGF0ZU9iaiB9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY29uZmxpY3RzID09PSAwKSB7XG4gICAgICAgICAgICBhc3NpZ25lZFRyYWluZXJJZCA9IHRVc2VySWQ7XG4gICAgICAgICAgICBicmVhazsgLy8gRm91bmQgb25lIVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFhc3NpZ25lZFRyYWluZXJJZCkge1xuICAgICAgICBhc3NpZ25lZFN0YXR1cyA9IFwiTk9fVFJBSU5FUl9BVkFJTEFCTEVcIjtcbiAgICAgICAgLy8gSWYgbm8gdHJhaW5lciBpcyBhdmFpbGFibGUsIHdlIHN0aWxsIGNyZWF0ZSB0aGUgcmVxdWVzdCBidXQgZmxhZyBpdFxuICAgIH1cblxuICAgIC8vIE5vdGU6IGlmIG5vIHRyYWluZXIsIHN0YXR1cyBjb3VsZCBiZSBOT19UUkFJTkVSX0FWQUlMQUJMRSwgYnV0IGxldCdzIHN0aWNrIHRvIGhhcHB5IHBhdGggZm9yIE1WUCBpbml0XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBuZXdSZXF1ZXN0ID0gYXdhaXQgcHJpc21hLnRyYWluaW5nUmVxdWVzdC5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHJlZmVyZW5jZSxcbiAgICAgICAgICAgICAgICBjdXN0b21lck5hbWU6IGRhdGEuY3VzdG9tZXJOYW1lLFxuICAgICAgICAgICAgICAgIGN1c3RvbWVyRW1haWw6IGRhdGEuY3VzdG9tZXJFbWFpbCxcbiAgICAgICAgICAgICAgICBudW1BdHRlbmRlZXM6IGRhdGEubnVtQXR0ZW5kZWVzLFxuICAgICAgICAgICAgICAgIGRlbGl2ZXJ5VHlwZTogZGF0YS5kZWxpdmVyeVR5cGUsXG4gICAgICAgICAgICAgICAgc2l0ZURldGFpbHM6IGRhdGEuc2l0ZURldGFpbHMsXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZShkYXRhLnN0YXJ0RGF0ZSksXG4gICAgICAgICAgICAgICAgZW5kRGF0ZTogbmV3IERhdGUoZGF0YS5lbmREYXRlKSxcbiAgICAgICAgICAgICAgICBub3RlczogZGF0YS5ub3RlcyxcbiAgICAgICAgICAgICAgICBmaW5hbFByaWNlLFxuICAgICAgICAgICAgICAgIGRpc2NvdW50UGVyY2VudDogZGF0YS5kaXNjb3VudFBlcmNlbnQgfHwgMCxcbiAgICAgICAgICAgICAgICBkaXNjb3VudFJlYXNvbjogZGF0YS5kaXNjb3VudFJlYXNvbixcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGFzc2lnbmVkU3RhdHVzLFxuICAgICAgICAgICAgICAgIG1vZHVsZUlkOiBkYXRhLm1vZHVsZUlkLFxuICAgICAgICAgICAgICAgIHNhbGVzcGVyc29uSWQ6IChzZXNzaW9uLnVzZXIgYXMgYW55KS5pZCxcbiAgICAgICAgICAgICAgICB0cmFpbmVySWQ6IGFzc2lnbmVkVHJhaW5lcklkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSW4gYSByZWFsIGFwcCwgdHJpZ2dlciBlbWFpbCBoZXJlIChhd2FpdCBzZW5kRW1haWwoLi4uKSlcblxuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi9yZXF1ZXN0c1wiKTtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgcmVmZXJlbmNlOiBuZXdSZXF1ZXN0LnJlZmVyZW5jZSB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJTdWJtaXNzaW9uIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiB7IGVycm9yOiBcIkZhaWxlZCB0byBjcmVhdGUgcmVxdWVzdFwiIH07XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxU0FVc0Isa01BQUEifQ==
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculatePrice",
    ()=>calculatePrice,
    "cn",
    ()=>cn,
    "generateReference",
    ()=>generateReference
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function generateReference() {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    const random = Math.floor(1000 + Math.random() * 9000);
    return `VA-${yyyy}${mm}${dd}-${random}`;
}
function calculatePrice(deliveryType, attendees, onlinePrice, onsitePrice) {
    if (deliveryType === "ONLINE") {
        return onlinePrice * attendees;
    } else {
        // Basic onsite logic: price per head for MVP, can be tiered later
        return onsitePrice * attendees;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/RequestForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RequestForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/validations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$e0d051__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:e0d051 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function RequestForm({ moduleData, userEmail, userName }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [serverError, setServerError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isVE02 = moduleData.moduleNo.startsWith("VE02");
    const { register, handleSubmit, watch, setValue, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$validations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["requestSchema"]),
        defaultValues: {
            moduleId: moduleData.id,
            customerName: userName || "",
            customerEmail: userEmail || "",
            numAttendees: 2,
            deliveryType: isVE02 ? "ONSITE" : "ONLINE",
            discountPercent: 0
        }
    });
    const deliveryType = watch("deliveryType");
    const numAttendees = watch("numAttendees");
    const discountPercent = watch("discountPercent") || 0;
    const startDate = watch("startDate");
    // Enforce ONSITE for VE02 if somehow changed
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RequestForm.useEffect": ()=>{
            if (isVE02 && deliveryType !== "ONSITE") {
                setValue("deliveryType", "ONSITE");
            }
        }
    }["RequestForm.useEffect"], [
        isVE02,
        deliveryType,
        setValue
    ]);
    // Auto-calculate price for display
    const basePrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculatePrice"])(deliveryType, numAttendees || 0, moduleData.onlinePricePerAttendee, moduleData.onsitePricePerAttendee);
    const discountAmount = basePrice * (discountPercent / 100);
    const finalPrice = basePrice - discountAmount;
    // Auto-suggest end date
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RequestForm.useEffect": ()=>{
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
        }
    }["RequestForm.useEffect"], [
        startDate,
        moduleData.durationDays,
        setValue
    ]);
    const onSubmit = async (data)=>{
        setIsSubmitting(true);
        setServerError("");
        // Server expects strings for dates, usually works fine with ISO strings or the inputs
        // Zod schema expects strings that are parseable dates
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$e0d051__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitTrainingRequest"])(data);
        if (res.error) {
            setServerError(res.error);
            setIsSubmitting(false);
        } else {
            router.push(`/requests/${res.reference}`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2 space-y-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit(onSubmit),
                    className: "space-y-6 card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold border-b border-gray-200 pb-4 mb-4 text-celeros-blue-800",
                            children: "Request Details"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RequestForm.tsx",
                            lineNumber: 103,
                            columnNumber: 21
                        }, this),
                        serverError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-red-900/20 border border-red-500/50 rounded-lg flex items-center gap-2 text-red-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                    size: 18
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 107,
                                    columnNumber: 29
                                }, this),
                                " ",
                                serverError
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RequestForm.tsx",
                            lineNumber: 106,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Customer Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 113,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ...register("customerName"),
                                            className: "input-field",
                                            placeholder: "Client Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 114,
                                            columnNumber: 29
                                        }, this),
                                        errors.customerName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1",
                                            children: errors.customerName.message
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 115,
                                            columnNumber: 53
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 112,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Customer Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 118,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ...register("customerEmail"),
                                            className: "input-field",
                                            placeholder: "client@company.com"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 119,
                                            columnNumber: 29
                                        }, this),
                                        errors.customerEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1",
                                            children: errors.customerEmail.message
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 120,
                                            columnNumber: 54
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 117,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RequestForm.tsx",
                            lineNumber: 111,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Delivery Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 126,
                                            columnNumber: 29
                                        }, this),
                                        isVE02 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "input-field bg-gray-100 text-gray-700 flex items-center",
                                            children: [
                                                "CFT Facility",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "hidden",
                                                    ...register("deliveryType"),
                                                    value: "ONSITE"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 128,
                                            columnNumber: 33
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            ...register("deliveryType"),
                                            className: "input-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ONLINE",
                                                    children: "Online (Webinar)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ONSITE",
                                                    children: "CFT Facility"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 133,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 125,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Attendees"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 140,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    className: "absolute left-3 top-2.5 text-gray-500",
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    ...register("numAttendees", {
                                                        valueAsNumber: true
                                                    }),
                                                    className: "input-field pl-10",
                                                    min: 2,
                                                    max: 10,
                                                    step: 1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 141,
                                            columnNumber: 29
                                        }, this),
                                        errors.numAttendees && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1",
                                            children: errors.numAttendees.message
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 152,
                                            columnNumber: 53
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 139,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RequestForm.tsx",
                            lineNumber: 124,
                            columnNumber: 21
                        }, this),
                        deliveryType === "ONSITE" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-700 mb-1",
                                    children: "Preferred CFT Facility"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 158,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    ...register("siteDetails"),
                                    className: "input-field",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Houston",
                                            children: "Houston"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 160,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "Oklahoma",
                                            children: "Oklahoma"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 161,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 159,
                                    columnNumber: 29
                                }, this),
                                errors.siteDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-xs mt-1",
                                    children: errors.siteDetails.message
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 163,
                                    columnNumber: 52
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RequestForm.tsx",
                            lineNumber: 157,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-400 mb-1",
                                            children: "Proposed Start Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 169,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "absolute left-3 top-2.5 text-gray-500",
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    ...register("startDate"),
                                                    className: "input-field pl-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 172,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 170,
                                            columnNumber: 29
                                        }, this),
                                        errors.startDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1",
                                            children: errors.startDate.message
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 174,
                                            columnNumber: 50
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 168,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-400 mb-1",
                                            children: "End Date (Auto-calc)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 177,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    className: "absolute left-3 top-2.5 text-gray-500",
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "date",
                                                    ...register("endDate"),
                                                    className: "input-field pl-10"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 178,
                                            columnNumber: 29
                                        }, this),
                                        errors.endDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-xs mt-1",
                                            children: errors.endDate.message
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 182,
                                            columnNumber: 48
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 176,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RequestForm.tsx",
                            lineNumber: 167,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-gray-400 mb-1",
                                    children: "Additional Notes"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 187,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    ...register("notes"),
                                    className: "input-field min-h-[100px]",
                                    placeholder: "Specific topics to cover..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 188,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RequestForm.tsx",
                            lineNumber: 186,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t border-gray-200 pt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-gray-700 mb-4 flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 193,
                                            columnNumber: 29
                                        }, this),
                                        " Discounts (Optional)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 192,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-400 mb-1",
                                                    children: "Discount %"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    ...register("discountPercent", {
                                                        valueAsNumber: true
                                                    }),
                                                    className: "input-field",
                                                    min: 0,
                                                    max: 100,
                                                    step: 0.1
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 196,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-400 mb-1",
                                                    children: "Reason"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 206,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    ...register("discountReason"),
                                                    className: "input-field",
                                                    placeholder: "Volume deal, Partner, etc."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 207,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 205,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 195,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RequestForm.tsx",
                            lineNumber: 191,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: isSubmitting,
                            className: "btn btn-primary w-full py-3 text-lg mt-4",
                            children: isSubmitting ? "Submitting..." : "Submit Quote Request"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RequestForm.tsx",
                            lineNumber: 212,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RequestForm.tsx",
                    lineNumber: 102,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/RequestForm.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "card sticky top-24 border-celeros-blue-100 bg-celeros-blue-50",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-bold text-celeros-blue-800 mb-4",
                            children: "Quote Summary"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RequestForm.tsx",
                            lineNumber: 225,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-3 text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-gray-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Module"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 228,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-celeros-blue-900 text-right font-medium",
                                            children: moduleData.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 229,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 227,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-gray-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Duration"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 232,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-celeros-blue-900 font-medium",
                                            children: [
                                                moduleData.durationDays,
                                                " Days"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 233,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 231,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-gray-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Type"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 236,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-celeros-blue-900 font-medium",
                                            children: deliveryType === "ONLINE" ? "Online" : "Onsite"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 237,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 235,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between text-gray-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Attendees"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 240,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-celeros-blue-900 font-medium",
                                            children: numAttendees
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 241,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 239,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-celeros-blue-200 my-4 pt-4 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Base Price"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "$",
                                                        basePrice.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 247,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 245,
                                            columnNumber: 29
                                        }, this),
                                        discountPercent > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-green-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Discount (",
                                                        discountPercent,
                                                        "%)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "-$",
                                                        discountAmount.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 250,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between text-xl font-bold text-celeros-blue-800 pt-2 border-t border-celeros-blue-200 mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "$",
                                                        finalPrice.toFixed(2)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/RequestForm.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/RequestForm.tsx",
                                            lineNumber: 255,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/RequestForm.tsx",
                                    lineNumber: 244,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/RequestForm.tsx",
                            lineNumber: 226,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 p-3 bg-white rounded border border-celeros-blue-200 text-xs text-center text-gray-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "flex items-center justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        size: 14,
                                        className: "text-green-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RequestForm.tsx",
                                        lineNumber: 263,
                                        columnNumber: 29
                                    }, this),
                                    "This quote is indicative and subject to trainer availability confirmation."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RequestForm.tsx",
                                lineNumber: 262,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/RequestForm.tsx",
                            lineNumber: 261,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RequestForm.tsx",
                    lineNumber: 224,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/RequestForm.tsx",
                lineNumber: 223,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RequestForm.tsx",
        lineNumber: 99,
        columnNumber: 9
    }, this);
}
_s(RequestForm, "N6e39V26m3l2V/qTEvqiOwE6Ygw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = RequestForm;
var _c;
__turbopack_context__.k.register(_c, "RequestForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1bffb90f._.js.map