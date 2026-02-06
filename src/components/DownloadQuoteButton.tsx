'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Download } from 'lucide-react';
// import { PDFDownloadLink } from '@react-pdf/renderer'; // Dynamically import this to avoid SSR issues
import QuotePDF from '@/components/pdf/QuotePDF';

// Dynamically import PDFDownloadLink to prevent SSR errors with @react-pdf/renderer
const PDFDownloadLink = dynamic(
    () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
    {
        ssr: false,
        loading: () => (
            <button className="btn btn-secondary flex items-center gap-2 opacity-50 cursor-wait">
                <Download size={16} /> Loading PDF...
            </button>
        ),
    }
);

interface DownloadQuoteButtonProps {
    data: {
        reference: string;
        customerName: string;
        customerEmail: string;
        startDate: Date;
        numAttendees: number;
        deliveryType: string;
        discountPercent: number;
        finalPrice: number;
        module: {
            moduleNo: string;
            title: string;
            durationDays: number;
        }
    }
}

export default function DownloadQuoteButton({ data }: DownloadQuoteButtonProps) {
    return (
        <PDFDownloadLink
            document={<QuotePDF data={data} />}
            fileName={`Quote-${data.reference}.pdf`}
            className="btn btn-secondary flex items-center gap-2"
        >
            {/* The render prop pattern isn't fully supported by the dynamic import types easily, 
                so we simplify by just rendering children. 
                React-PDF's PDFDownloadLink renders its children as the link/button content.
                It can accept a render prop ({ blob, url, loading, error }) but simple children work too.
             */}
            <Download size={16} /> Download PDF
        </PDFDownloadLink>
    );
}
