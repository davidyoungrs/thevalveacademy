module.exports = [
"[project]/src/lib/workflow.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALLOWED_TRANSITIONS",
    ()=>ALLOWED_TRANSITIONS,
    "ROLE_PERMISSIONS",
    ()=>ROLE_PERMISSIONS,
    "canTransition",
    ()=>canTransition,
    "getNextStatus",
    ()=>getNextStatus
]);
const ALLOWED_TRANSITIONS = {
    SUBMITTED: [
        "AWAITING_TRAINER_CONFIRMATION",
        "NO_TRAINER_AVAILABLE"
    ],
    AWAITING_TRAINER_CONFIRMATION: [
        "TRAINER_CONFIRMED",
        "REJECTED",
        "NO_TRAINER_AVAILABLE"
    ],
    TRAINER_CONFIRMED: [
        "AWAITING_APPROVER_1",
        "REJECTED"
    ],
    AWAITING_APPROVER_1: [
        "CONFIRMED",
        "AWAITING_APPROVER_2",
        "REJECTED"
    ],
    AWAITING_APPROVER_2: [
        "CONFIRMED",
        "REJECTED"
    ],
    CONFIRMED: [],
    REJECTED: [
        "SUBMITTED"
    ],
    NO_TRAINER_AVAILABLE: [
        "SUBMITTED",
        "REJECTED"
    ]
};
const ROLE_PERMISSIONS = {
    SALES: [
        "SUBMITTED"
    ],
    TRAINER: [
        "TRAINER_CONFIRMED",
        "REJECTED",
        "AWAITING_TRAINER_CONFIRMATION"
    ],
    APPROVER: [
        "CONFIRMED",
        "REJECTED",
        "AWAITING_APPROVER_2"
    ],
    ADMIN: [
        "SUBMITTED",
        "AWAITING_TRAINER_CONFIRMATION",
        "TRAINER_CONFIRMED",
        "AWAITING_APPROVER_1",
        "AWAITING_APPROVER_2",
        "CONFIRMED",
        "REJECTED",
        "NO_TRAINER_AVAILABLE"
    ]
};
function canTransition(currentStatus, nextStatus) {
    const allowed = ALLOWED_TRANSITIONS[currentStatus];
    return allowed ? allowed.includes(nextStatus) : false;
}
function getNextStatus(currentStatus, action, discountPercent) {
    if (action === "REJECT") return "REJECTED";
    switch(currentStatus){
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
}),
"[project]/src/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const prismaClientSingleton = ()=>{
    return new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
};
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();
const __TURBOPACK__default__export__ = prisma;
if ("TURBOPACK compile-time truthy", 1) globalThis.prismaGlobal = prisma;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/lib/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authOptions",
    ()=>authOptions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
;
;
const authOptions = {
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "sales@valveacademy.com"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                if (!credentials?.email || !credentials?.password) return null;
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                if (!user) return null;
                // In production, use bcrypt/argon2 to verify passwordHash
                // For MVP/Demo, we compare as is (seed uses 'password123')
                if (credentials.password === user.passwordHash) {
                    return {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role
                    };
                }
                return null;
            }
        })
    ],
    callbacks: {
        async jwt ({ token, user }) {
            if (user) {
                token.role = user.role;
                token.id = user.id;
            }
            return token;
        },
        async session ({ session, token }) {
            if (session.user) {
                session.user.role = token.role;
                session.user.id = token.id;
            }
            return session;
        }
    },
    pages: {
        signIn: "/login"
    },
    session: {
        strategy: "jwt"
    }
};
}),
"[project]/src/app/actions/workflow.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"7071eea652842acfddef1c5cb27751da7f5db7600c":"processWorkflowAction"},"",""] */ __turbopack_context__.s([
    "processWorkflowAction",
    ()=>processWorkflowAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workflow$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/workflow.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function processWorkflowAction(requestId, action, reason) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServerSession"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["authOptions"]);
    if (!session || !session.user) return {
        error: "Unauthorized"
    };
    const userRole = session.user.role;
    // TODO: Add strict RBAC check based on current status vs user role
    const request = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trainingRequest.findUnique({
        where: {
            id: requestId
        }
    });
    if (!request) return {
        error: "Request not found"
    };
    const nextStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workflow$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNextStatus"])(request.status, action, request.discountPercent);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$workflow$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canTransition"])(request.status, nextStatus)) {
        return {
            error: `Invalid transition from ${request.status} to ${nextStatus}`
        };
    }
    // Update Request
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].trainingRequest.update({
        where: {
            id: requestId
        },
        data: {
            status: nextStatus,
            approvals: {
                create: {
                    userId: session.user.id,
                    stage: request.status,
                    decision: action,
                    reason: reason
                }
            }
        }
    });
    if (nextStatus === "CONFIRMED") {
        // Create Confirmed Calendar Event
        if (request.trainerId) {
            // Check if one exists first?
            // Just create new confirmed event
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].calendarEvent.create({
                data: {
                    requestId: request.id,
                    trainerId: request.trainerId,
                    start: request.startDate,
                    end: request.endDate,
                    type: "CONFIRMED"
                }
            });
        // Also maybe delete TENTATIVE ones?
        }
    }
    // TODO: Trigger Email Notifications
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/requests/${request.reference}`);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/trainer/inbox");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/approver/inbox");
    return {
        success: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    processWorkflowAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(processWorkflowAction, "7071eea652842acfddef1c5cb27751da7f5db7600c", null);
}),
"[project]/.next-internal/server/app/requests/[reference]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/workflow.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$workflow$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/workflow.ts [app-rsc] (ecmascript)");
;
}),
"[project]/.next-internal/server/app/requests/[reference]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/actions/workflow.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "7071eea652842acfddef1c5cb27751da7f5db7600c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$workflow$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["processWorkflowAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$requests$2f5b$reference$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2f$workflow$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/requests/[reference]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/actions/workflow.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$workflow$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions/workflow.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f4e064d5._.js.map