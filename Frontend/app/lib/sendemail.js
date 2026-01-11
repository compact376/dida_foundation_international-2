import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export async function sendEmailDonation({ to, name, amount, donationType }) {
    try {
        const info = await transporter.sendMail({
            from: `"Dida Foundation" <${process.env.EMAIL_USER}>`,
            to,
            subject: 'Thank You for Your Donation',
            html: `
                <p>Dear ${name},</p>
                <p>Thank you for your donation of <strong>$${amount}</strong> towards <strong>${donationType}</strong>.</p>
                <p>We appreciate your support!</p>
                <p>- Dida Foundation</p>
            `
        });

        console.log('Donation email sent:', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending donation email:', error);
        throw error;
    }
}

export async function sendEmailContact({ to, name, subject, message }) {
    try {
        const info = await transporter.sendMail({
            from: `"Dida Foundation" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html: `
                <p>Dear ${name},</p>
                <p>Thank you for reaching out. We received the following message from you:</p>
                <blockquote>${message}</blockquote>
                <p>We'll get back to you shortly.</p>
                <p>- Dida Foundation</p>
            `
        });
        console.log(to)
        console.log('Contact email sent:', info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending contact email:', error);
        throw error;
    }
}
