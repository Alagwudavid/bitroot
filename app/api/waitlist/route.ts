import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Use service role key for admin operations
const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

function generateUID(): string {
    // Generate 12 random digits
    return Math.floor(100000000000 + Math.random() * 900000000000).toString();
}

function generateReferralId(): string {
    // Generate 6 random alphanumeric characters
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

function extractNameFromEmail(email: string): string {
    // Extract the part before @ and capitalize it
    const name = email.split('@')[0];
    return name.charAt(0).toUpperCase() + name.slice(1);
}

function sanitizeEmail(email: string): string {
    // Trim whitespace and convert to lowercase
    return email.trim().toLowerCase();
}

function isValidEmail(email: string): boolean {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 320; // Max email length per RFC 5321
}

export async function POST(request: NextRequest) {
    try {
        const { email: rawEmail } = await request.json();

        if (!rawEmail || typeof rawEmail !== 'string') {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        const email = sanitizeEmail(rawEmail);

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Check if email already exists
        const { data: existingEntry } = await supabaseAdmin
            .from('waitlist')
            .select('*')
            .eq('email', email)
            .single();

        if (existingEntry) {
            // Get position in waitlist
            const { count } = await supabaseAdmin
                .from('waitlist')
                .select('*', { count: 'exact', head: true })
                .lte('id', existingEntry.id);

            return NextResponse.json({
                message: 'Email already registered',
                alreadyExists: true,
                position: count || 0,
                id: existingEntry.id,
                referralId: existingEntry.referral_id,
            });
        }

        // Create new waitlist entry
        const uid = generateUID();
        const referralId = generateReferralId();
        const name = extractNameFromEmail(email);

        const { data, error } = await supabaseAdmin
            .from('waitlist')
            .insert([
                {
                    uid,
                    email,
                    name,
                    referral_id: referralId,
                },
            ])
            .select()
            .single();

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json(
                { error: 'Failed to add to waitlist' },
                { status: 500 }
            );
        }

        // Get position in waitlist
        const { count } = await supabaseAdmin
            .from('waitlist')
            .select('*', { count: 'exact', head: true })
            .lte('id', data.id);

        // Send confirmation email
        try {
            await fetch(`${request.nextUrl.origin}/api/send-confirmation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    name,
                    position: count || 0,
                    referralId,
                    id: data.id,
                }),
            });
        } catch (emailError) {
            console.error('Failed to send confirmation email:', emailError);
            // Don't fail the request if email fails
        }

        return NextResponse.json({
            success: true,
            position: count || 0,
            id: data.id,
            referralId,
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const id = searchParams.get('id');

        if (!id || isNaN(Number(id))) {
            return NextResponse.json(
                { error: 'Invalid ID' },
                { status: 400 }
            );
        }

        const { data, error } = await supabaseAdmin
            .from('waitlist')
            .select('*')
            .eq('id', id)
            .single();

        if (error || !data) {
            return NextResponse.json(
                { error: 'Not found' },
                { status: 404 }
            );
        }

        // Get position in waitlist
        const { count } = await supabaseAdmin
            .from('waitlist')
            .select('*', { count: 'exact', head: true })
            .lte('id', data.id);

        // Get total count
        const { count: totalCount } = await supabaseAdmin
            .from('waitlist')
            .select('*', { count: 'exact', head: true });

        return NextResponse.json({
            position: count || 0,
            total: totalCount || 0,
            email: data.email,
            name: data.name,
            referralId: data.referral_id,
            joinedAt: data.created_at,
        });
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
