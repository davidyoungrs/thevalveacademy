"use client";

import { signIn } from "next-auth/react";
import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, Mail, AlertCircle } from "lucide-react";

function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false,
            });

            if (res?.error) {
                setError("Invalid email or password");
            } else {
                router.push(callbackUrl);
                router.refresh();
            }
        } catch (err) {
            setError("An unexpected error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20">
            <div className="card">
                <h2 className="text-2xl font-bold text-center mb-8">Login to Portal</h2>

                {error && (
                    <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-400 text-sm">
                        <AlertCircle size={18} />
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-2.5 text-gray-500" size={18} />
                            <input
                                type="email"
                                required
                                className="input-field pl-10"
                                placeholder="sales@valveacademy.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-2.5 text-gray-500" size={18} />
                            <input
                                type="password"
                                required
                                className="input-field pl-10"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary w-full mt-6"
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-gray-800 text-center">
                    <p className="text-sm text-gray-500">
                        Use seeded credentials for testing: <br />
                        <span className="text-gray-400">admin@valveacademy.com / password123</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function LoginPage() {
    return (
        <Suspense fallback={<div className="text-center mt-20">Loading login...</div>}>
            <LoginForm />
        </Suspense>
    );
}
