import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, purpose, message } = await request.json();

        // Validate input
        if (!name || !email || !purpose || !message) {
            return NextResponse.json(
                { message: 'All fields are required' },
                { status: 400 }
            );
        }

        // Send email to admin
        await resend.emails.send({
            from: 'Bitroot Contact Form <onboarding@resend.dev>',
            to: 'bitrootinfo@gmail.com',
            subject: `New Contact Form Submission: ${purpose}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <div style="margin: 20px 0;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Purpose:</strong> ${purpose}</p>
                    </div>
                    <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
                        <h3 style="color: #333; margin-top: 0;">Message:</h3>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
                        <p>This email was sent from the Bitroot contact form.</p>
                        <p>Reply to: ${email}</p>
                    </div>
                </div>
            `,
            reply_to: email,
        });

        // Send confirmation email to user
        await resend.emails.send({
            from: 'Bitroot <onboarding@resend.dev>',
            to: email,
            subject: 'Thank you for contacting Bitroot',
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
                        Thank You for Reaching Out!
                    </h2>
                    <p>Hi ${name},</p>
                    <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
                    <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
                        <h3 style="color: #333; margin-top: 0;">Your Message:</h3>
                        <p><strong>Purpose:</strong> ${purpose}</p>
                        <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    <p>Best regards,<br>The Bitroot Team</p>
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
                        <p>If you did not send this message, please ignore this email.</p>
                    </div>
                </div>
            `,
        });

        return NextResponse.json(
            { message: 'Message sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { message: 'Failed to send message. Please try again later.' },
            { status: 500 }
        );
    }
}
