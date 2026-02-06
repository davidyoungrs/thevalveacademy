import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    function middleware(req) {
        const token = req.nextauth.token;
        const path = req.nextUrl.pathname;

        // RBAC: Role-based access control
        if (path.startsWith("/admin") && token?.role !== "ADMIN") {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }
        if (path.startsWith("/trainer") && !["TRAINER", "ADMIN"].includes(token?.role as string)) {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }
        if (path.startsWith("/approver") && !["APPROVER", "ADMIN"].includes(token?.role as string)) {
            return NextResponse.redirect(new URL("/unauthorized", req.url));
        }
        // Sales can access most things including /request but not trainer/admin/approver specific dashboards

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: [
        "/admin/:path*",
        "/trainer/:path*",
        "/approver/:path*",
        "/request/:path*",
        "/requests/:path*",
    ],
};
