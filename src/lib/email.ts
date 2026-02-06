import nodemailer from 'nodemailer';

export async function sendEmail({ to, subject, html }: { to: string, subject: string, html: string }) {
    // Basic validation to prevent crashing if configs are missing
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER) {
        console.warn("⚠️ SMTP not configured. Falling back to console log.");
        console.log("---------------------------------------------------");
        console.log(`[EMAIL STUB] To: ${to}`);
        console.log(`[EMAIL STUB] Subject: ${subject}`);
        console.log("---------------------------------------------------");
        return Promise.resolve(true);
    }

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        const info = await transporter.sendMail({
            from: process.env.SMTP_FROM || '"Valve Academy" <noreply@valveacademy.com>',
            to,
            subject,
            html,
        });
        console.log(`✅ Email sent: ${info.messageId}`);
        return true;
    } catch (error) {
        console.error("❌ Email sending failed:", error);
        return false;
    }
}
