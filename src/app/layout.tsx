import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Valve Academy Training Portal",
    description: "Automated quoting and booking for valve training",
    icons: {
        icon: "/icon.png",
        shortcut: "/favicon.ico",
        apple: "/icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>
                    <div className="flex flex-col min-h-screen">
                        <Navbar />
                        <main className="flex-grow container mx-auto px-4 py-8">
                            {children}
                        </main>
                        <footer className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
                            &copy; {new Date().getFullYear()} TheValve.pro. All rights reserved.
                        </footer>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
