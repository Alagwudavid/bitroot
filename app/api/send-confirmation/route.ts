import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { email, name, position, referralId, id } = await request.json();

        const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
        const referralLink = `${appUrl}?ref=${referralId}`;
        const statusLink = `${appUrl}/waitlist/${id}`;

        // If RESEND_API_KEY is not configured, log and skip email
        if (!process.env.RESEND_API_KEY) {
            console.log('Email not sent - RESEND_API_KEY not configured');
            console.log('Would send to:', email);
            return NextResponse.json({
                success: true,
                skipped: true,
                message: 'Email service not configured'
            });
        }

        const { data, error } = await resend.emails.send({
            from: 'Bitroot Waitlist <onboarding@resend.dev>',
            to: [email],
            subject: 'Thank you for signing up!',
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Bitroot Waitlist</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center; border-radius: 10px 10px 0 0;">
              <div style="background: white; width: 60px; height: 60px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px;">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#667eea" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h1 style="color: white; margin: 0; font-size: 28px;">Congratulations</h1>
            </div>
            
            <div style="background: #f8f9fa; padding: 40px 30px; border-radius: 0 0 10px 10px;">
              <h2 style="color: #1a1a1a; font-size: 24px; margin-top: 0;">You are in! Welcome aboard</h2>
              
              <p style="color: #666; font-size: 16px;">Thanks for signing up!</p>
              <p style="color: #666; font-size: 16px;">We'll notify you the moment early access opens.</p>
              
              <div style="background: white; border: 2px solid #667eea; border-radius: 8px; padding: 20px; margin: 30px 0; text-align: center;">
                <p style="color: #666; font-size: 14px; margin: 0 0 10px 0;">You are</p>
                <p style="color: #667eea; font-size: 36px; font-weight: bold; margin: 0;">#${position}</p>
                <p style="color: #666; font-size: 14px; margin: 10px 0 0 0;">on the Waitlist</p>
              </div>
              
              <div style="background: white; border-radius: 8px; padding: 20px; margin: 20px 0;">
                <h3 style="color: #1a1a1a; font-size: 16px; margin-top: 0;">Awesome Wait</h3>
                
                <p style="color: #666; font-size: 14px; margin-bottom: 15px;">
                  <strong>Welcome!</strong> You are #${position} out of 0 on the Waitlist. Share your unique referral link to move up in line:
                </p>
                
                <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; margin-bottom: 15px;">
                  <a href="${referralLink}" style="color: #667eea; text-decoration: none; word-break: break-all; font-size: 14px;">
                    ${referralLink}
                  </a>
                </div>
                
                <p style="color: #666; font-size: 14px; margin-bottom: 15px;">
                  You can check your status in line here:
                </p>
                
                <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; margin-bottom: 20px;">
                  <a href="${statusLink}" style="color: #667eea; text-decoration: none; word-break: break-all; font-size: 14px;">
                    ${statusLink}
                  </a>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
                <p style="color: #999; font-size: 12px; margin: 5px 0;">
                  Need Help? Reply to this email, or write to 
                  <a href="mailto:signup_support@getwaitlist.com" style="color: #667eea; text-decoration: none;">signup_support@getwaitlist.com</a>
                </p>
                <p style="color: #999; font-size: 12px; margin: 5px 0;">
                  Sent by <strong>Bitroot</strong>
                </p>
                <p style="color: #999; font-size: 12px; margin: 5px 0;">
                  <a href="#" style="color: #667eea; text-decoration: none;">Unsubscribe</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
