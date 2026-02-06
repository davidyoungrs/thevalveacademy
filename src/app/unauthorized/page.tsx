import Link from "next/link";
import { ShieldAlert } from "lucide-react";

export default function UnauthorizedPage() {
    return (
        <div className="max-w-md mx-auto mt-20 text-center">
            <div className="card border-red-900/50">
                <div className="flex justify-center mb-6 text-red-500">
                    <ShieldAlert size={64} />
                </div>
                <h2 className="text-2xl font-bold mb-4">Unauthorized Access</h2>
                <p className="text-gray-400 mb-8">
                    You do not have the required permissions to access this page. Please contact an administrator if you believe this is an error.
                </p>
                <Link href="/" className="btn btn-primary">
                    Return to Hub
                </Link>
            </div>
        </div>
    );
}
