import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function GET(request: NextRequest) {
    try {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

        // Check environment variables
        if (!supabaseUrl || !supabaseServiceKey) {
            return NextResponse.json({
                status: 'error',
                message: 'Missing environment variables',
                hasUrl: !!supabaseUrl,
                hasServiceKey: !!supabaseServiceKey,
                urlPrefix: supabaseUrl ? supabaseUrl.substring(0, 20) + '...' : 'missing',
            });
        }

        // Create Supabase client
        const supabase = createClient(supabaseUrl, supabaseServiceKey);

        // Test connection by checking if table exists
        const { data, error, count } = await supabase
            .from('waitlist')
            .select('*', { count: 'exact', head: true });

        if (error) {
            return NextResponse.json({
                status: 'error',
                message: 'Database connection failed',
                error: error.message,
                hint: error.hint,
                details: error.details,
            });
        }

        return NextResponse.json({
            status: 'success',
            message: 'Database connection successful',
            tableExists: true,
            totalEntries: count || 0,
        });
    } catch (error: any) {
        return NextResponse.json({
            status: 'error',
            message: 'Test failed',
            error: error.message,
        });
    }
}
