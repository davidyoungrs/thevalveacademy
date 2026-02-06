import prisma from "@/lib/prisma";
import RequestForm from "@/components/RequestForm";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function NewRequestPage(props: { params: Promise<{ moduleNo: string }> }) {
    const params = await props.params;

    const session = await getServerSession(authOptions);

    if (!session) {
        redirect(`/login?callbackUrl=/request/new/${params.moduleNo}`);
    }

    const moduleData = await prisma.module.findUnique({
        where: { moduleNo: params.moduleNo },
    });

    if (!moduleData) {
        return <div className="container mx-auto p-8 text-center">Module not found</div>;
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold mb-2 text-celeros-blue-800">New Training Request</h1>
                <p className="text-gray-600">
                    Configure training details for <span className="text-celeros-blue-800 font-bold">{moduleData.title}</span>.
                </p>
            </div>

            <RequestForm
                moduleData={moduleData}
                userEmail={session.user?.email || ""}
                userName={session.user?.name || ""}
            />
        </div>
    );
}
