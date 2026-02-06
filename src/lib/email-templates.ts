export const emailTemplates = {
    base: (content: string, title: string) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; border: 1px solid #ddd; }
        .header { background-color: #1B365D; color: white; padding: 20px; text-align: center; }
        .content { padding: 30px; }
        .footer { background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        .btn { display: inline-block; background-color: #E87722; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin:0;">THE VALVE ACADEMY</h1>
        </div>
        <div class="content">
            <h2>${title}</h2>
            ${content}
        </div>
        <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Celeros Flow Technology. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
    `,

    newRequest: (customerName: string, moduleTitle: string, reference: string) => `
        <p>Hi Sales Team,</p>
        <p>A new training request has been received from <strong>${customerName}</strong>.</p>
        <ul>
            <li><strong>Module:</strong> ${moduleTitle}</li>
            <li><strong>Reference:</strong> ${reference}</li>
        </ul>
        <p><a href="${process.env.NEXTAUTH_URL}/requests/${reference}" class="btn">View Request</a></p>
    `,

    requestConfirmation: (customerName: string, moduleTitle: string, reference: string) => `
        <p>Dear ${customerName},</p>
        <p>Thank you for your interest in <strong>${moduleTitle}</strong>.</p>
        <p>We have received your request (Ref: ${reference}) and will review it shortly. You will receive a quote once a trainer has been assigned.</p>
        <p><a href="${process.env.NEXTAUTH_URL}/requests/${reference}" class="btn">View Request Status</a></p>
    `,

    quoteReady: (customerName: string, moduleTitle: string, reference: string, price: number) => `
        <p>Dear ${customerName},</p>
        <p>Great news! Your quote for <strong>${moduleTitle}</strong> is ready.</p>
        <p><strong>Total Investment:</strong> $${price.toLocaleString()}</p>
        <p>Please click below to view the full proposal and download a PDF copy.</p>
        <p><a href="${process.env.NEXTAUTH_URL}/quote/${reference}" class="btn">View Quote</a></p>
    `
};
