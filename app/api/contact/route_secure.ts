import { NextRequest, NextResponse } from 'next/server';
import nodemailer from "nodemailer";
import contactFormSchema from "@/app/api/validation/contact-form";
import { z } from "zod";

// Rate limiting map (in production, use Redis or database)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

// Rate limiting function
function rateLimit(ip: string, maxRequests = 5, windowMs = 60000): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now > record.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
        return true;
    }

    if (record.count >= maxRequests) {
        return false;
    }

    record.count++;
    return true;
}

// Sanitize input to prevent XSS and injection attacks
function sanitizeInput(input: any): any {
    if (typeof input === 'string') {
        return input
            .replace(/[<>]/g, '') // Remove potential HTML tags
            .replace(/javascript:/gi, '') // Remove javascript: protocol
            .replace(/on\w+\s*=/gi, '') // Remove event handlers
            .trim();
    }
    if (typeof input === 'object' && input !== null) {
        const sanitized: any = {};
        for (const [key, value] of Object.entries(input)) {
            sanitized[key] = sanitizeInput(value);
        }
        return sanitized;
    }
    return input;
}

export async function POST(request: NextRequest) {
    try {
        // Security headers
        const responseHeaders = {
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
            'Content-Security-Policy': "default-src 'self'",
        };

        // Get client IP for rate limiting
        const forwarded = request.headers.get('x-forwarded-for');
        const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown';

        // Apply rate limiting
        if (!rateLimit(ip)) {
            return NextResponse.json({
                success: false,
                message: "Too many requests. Please try again later.",
            }, {
                status: 429,
                headers: responseHeaders
            });
        }

        // Validate Content-Type
        const contentType = request.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            return NextResponse.json({
                success: false,
                message: "Invalid content type. Expected application/json.",
            }, {
                status: 400,
                headers: responseHeaders
            });
        }

        // Check request size (prevent large payloads)
        const contentLength = request.headers.get('content-length');
        if (contentLength && parseInt(contentLength) > 10000) { // 10KB limit
            return NextResponse.json({
                success: false,
                message: "Request payload too large.",
            }, {
                status: 413,
                headers: responseHeaders
            });
        }

        // Parse and sanitize the request body
        let body;
        try {
            body = await request.json();
        } catch (error) {
            return NextResponse.json({
                success: false,
                message: "Invalid JSON format.",
            }, {
                status: 400,
                headers: responseHeaders
            });
        }

        // Sanitize input data
        const sanitizedBody = sanitizeInput(body);

        // Validate form data
        const validatedData = contactFormSchema.parse(sanitizedBody);

        // Check if required environment variables are set
        if (!process.env.SMTP_USERNAME || !process.env.SMTP_PASSWORD || !process.env.MAIL_RECEIVER_ADDRESS) {
            console.error("Missing required environment variables for email configuration");
            return NextResponse.json({
                success: false,
                message: "Email service is not configured properly. Please try again later.",
            }, {
                status: 500,
                headers: responseHeaders
            });
        }

        // Validate email domains (optional: restrict to certain domains)
        const allowedDomains = process.env.ALLOWED_EMAIL_DOMAINS?.split(',') || [];
        if (allowedDomains.length > 0) {
            const emailDomain = validatedData.email.split('@')[1]?.toLowerCase();
            if (!allowedDomains.some(domain => emailDomain?.endsWith(domain.toLowerCase()))) {
                return NextResponse.json({
                    success: false,
                    message: "Email domain not allowed.",
                }, {
                    status: 403,
                    headers: responseHeaders
                });
            }
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD,
            },
            // Security options
            secure: true,
            requireTLS: true,
        });

        // Verify transporter configuration
        await transporter.verify();

        const mailOptions = {
            from: process.env.SMTP_USERNAME, // Use authenticated email as sender
            to: process.env.MAIL_RECEIVER_ADDRESS,
            replyTo: validatedData.email, // Set reply-to as the form submitter's email
            subject: `Contact Form: ${validatedData.subject}`,
            text: `
Name: ${validatedData.name}
Email: ${validatedData.email}
Subject: ${validatedData.subject}

Message:
${validatedData.message}
            `,
            html: `
                <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; line-height: 1.6;">
                    <h2 style="color: #333; border-bottom: 3px solid #007bff; padding-bottom: 10px;">New Contact Form Submission</h2>
                    <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong>Name:</strong> ${validatedData.name}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
                        <p style="margin: 10px 0;"><strong>Subject:</strong> ${validatedData.subject}</p>
                    </div>
                    <div style="background: white; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
                        <h3 style="color: #495057; margin-top: 0;">Message:</h3>
                        <p style="color: #6c757d; white-space: pre-wrap;">${validatedData.message}</p>
                    </div>
                    <div style="margin-top: 20px; padding: 15px; background: #e9ecef; border-radius: 5px; text-align: center;">
                        <small style="color: #6c757d;">This message was sent from the Bitroot contact form</small>
                    </div>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            success: true,
            message: "Thank you! Your message has been sent successfully. We'll get back to you soon."
        }, {
            status: 200,
            headers: responseHeaders
        });

    } catch (error) {
        console.error("Error sending email:", error);

        const responseHeaders = {
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block',
            'Referrer-Policy': 'strict-origin-when-cross-origin',
            'Content-Security-Policy': "default-src 'self'",
        };

        // Handle specific error types
        if (error instanceof z.ZodError) {
            return NextResponse.json({
                success: false,
                message: "Please check your form inputs and try again.",
                errors: error.errors
            }, {
                status: 400,
                headers: responseHeaders
            });
        }

        if (error instanceof Error) {
            // Handle specific nodemailer errors
            if (error.message.includes('authentication') || error.message.includes('auth')) {
                return NextResponse.json({
                    success: false,
                    message: "Email service authentication failed. Please try again later.",
                }, {
                    status: 500,
                    headers: responseHeaders
                });
            }

            if (error.message.includes('network') || error.message.includes('ENOTFOUND')) {
                return NextResponse.json({
                    success: false,
                    message: "Network error occurred. Please check your connection and try again.",
                }, {
                    status: 500,
                    headers: responseHeaders
                });
            }

            if (error.message.includes('timeout')) {
                return NextResponse.json({
                    success: false,
                    message: "Request timed out. Please try again.",
                }, {
                    status: 408,
                    headers: responseHeaders
                });
            }
        }

        return NextResponse.json({
            success: false,
            message: "An unexpected error occurred while sending your message. Please try again later.",
        }, {
            status: 500,
            headers: responseHeaders
        });
    }
}

// Handle other HTTP methods
export async function GET() {
    const responseHeaders = {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Content-Security-Policy': "default-src 'self'",
    };

    return NextResponse.json({
        message: "Contact API endpoint. Use POST method to send contact form data."
    }, {
        status: 405,
        headers: responseHeaders
    });
}
