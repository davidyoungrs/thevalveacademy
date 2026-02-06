import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

// Define styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        padding: 40,
        fontFamily: 'Helvetica',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#1B365D',
        paddingBottom: 20,
    },
    brandTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1B365D', // Celeros Blue
    },
    brandSubtitle: {
        fontSize: 10,
        color: '#A7A8AA', // Celeros Grey
        marginTop: 4,
    },
    quoteInfo: {
        textAlign: 'right',
    },
    quoteTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1B365D',
        marginBottom: 5,
    },
    quoteRef: {
        fontSize: 12,
        color: '#555',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#E87722', // Celeros Orange
        marginBottom: 10,
        textTransform: 'uppercase',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 5,
    },
    label: {
        width: 100,
        fontSize: 10,
        color: '#666',
        fontWeight: 'bold',
    },
    value: {
        flex: 1,
        fontSize: 10,
        color: '#333',
    },
    table: {
        display: "flex",
        width: "auto",
        borderStyle: "solid",
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderColor: "#bfbfbf",
        marginTop: 20,
        marginBottom: 20,
    },
    tableRow: {
        margin: "auto",
        flexDirection: "row"
    },
    tableCol: {
        width: "25%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderColor: "#bfbfbf"
    },
    tableHeader: {
        backgroundColor: '#E6E6E6',
        fontWeight: 'bold',
    },
    tableCell: {
        margin: 5,
        fontSize: 10,
    },
    totalSection: {
        marginTop: 20,
        alignItems: 'flex-end',
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200,
        marginBottom: 5,
    },
    totalLabel: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1B365D',
    },
    totalValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1B365D',
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 40,
        right: 40,
        textAlign: 'center',
        fontSize: 8,
        color: '#999',
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 10,
    },
});

interface QuotePDFProps {
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

const QuotePDF = ({ data }: QuotePDFProps) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <View>
                    <Text style={styles.brandTitle}>THE VALVE ACADEMY</Text>
                    <Text style={styles.brandSubtitle}>From fundamentals to field ready.</Text>
                </View>
                <View style={styles.quoteInfo}>
                    <Text style={styles.quoteTitle}>TRAINING PROPOSAL</Text>
                    <Text style={styles.quoteRef}>Ref: {data.reference}</Text>
                    <Text style={{ fontSize: 10, color: '#666', marginTop: 4 }}>
                        Date: {new Date().toLocaleDateString()}
                    </Text>
                </View>
            </View>

            {/* Customer Details */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Prepared For</Text>
                <Text style={{ fontSize: 12, marginBottom: 4 }}>{data.customerName}</Text>
                <Text style={{ fontSize: 10, color: '#666' }}>{data.customerEmail}</Text>
            </View>

            {/* Training Details */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Training Module Details</Text>
                <View style={styles.row}>
                    <Text style={styles.label}>Module Code:</Text>
                    <Text style={styles.value}>{data.module.moduleNo}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Title:</Text>
                    <Text style={styles.value}>{data.module.title}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Duration:</Text>
                    <Text style={styles.value}>{data.module.durationDays} Days</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Delivery:</Text>
                    <Text style={styles.value}>{data.deliveryType === 'ONSITE' ? 'CFT Facility' : 'Online (Webinar)'}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Attendees:</Text>
                    <Text style={styles.value}>{data.numAttendees}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Proposed Date:</Text>
                    <Text style={styles.value}>{data.startDate.toLocaleDateString()}</Text>
                </View>
            </View>

            {/* Financials */}
            <View style={styles.table}>
                <View style={[styles.tableRow, styles.tableHeader]}>
                    <View style={[styles.tableCol, { width: '50%' }]}>
                        <Text style={styles.tableCell}>Description</Text>
                    </View>
                    <View style={[styles.tableCol, { width: '20%' }]}>
                        <Text style={styles.tableCell}>Qty</Text>
                    </View>
                    <View style={[styles.tableCol, { width: '30%' }]}>
                        <Text style={styles.tableCell}>Total</Text>
                    </View>
                </View>
                <View style={styles.tableRow}>
                    <View style={[styles.tableCol, { width: '50%' }]}>
                        <Text style={styles.tableCell}>{data.module.title} Training</Text>
                    </View>
                    <View style={[styles.tableCol, { width: '20%' }]}>
                        <Text style={styles.tableCell}>1</Text>
                    </View>
                    <View style={[styles.tableCol, { width: '30%' }]}>
                        <Text style={styles.tableCell}>${data.finalPrice.toLocaleString()}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.totalSection}>
                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Total Investment:</Text>
                    <Text style={styles.totalValue}>${data.finalPrice.toLocaleString()}</Text>
                </View>
                {data.discountPercent > 0 && (
                    <Text style={{ fontSize: 10, color: 'green', marginTop: 4 }}>
                        * Includes {data.discountPercent}% preferred partner discount
                    </Text>
                )}
            </View>

            {/* Terms */}
            <View style={[styles.section, { marginTop: 40 }]}>
                <Text style={[styles.sectionTitle, { fontSize: 10 }]}>Terms & Conditions</Text>
                <Text style={{ fontSize: 8, color: '#666', lineHeight: 1.5 }}>
                    1. This proposal is valid for 30 days from the date of issue.
                    {'\n'}2. Payment terms are Net 30 days from invoice date.
                    {'\n'}3. Cancellations made less than 7 days before the start date may incur a fee.
                    {'\n'}4. Training dates are subject to trainer availability and final confirmation.
                    {'\n'}5. For CFT Facility training, travel and accommodation expenses for attendees are not included.
                </Text>
            </View>

            {/* Footer */}
            <Text style={styles.footer}>
                © {new Date().getFullYear()} TheValve.pro. All rights reserved. | www.thevalve.pro
            </Text>
        </Page>
    </Document>
);

export default QuotePDF;
