"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check, Copy, Loader2, AlertCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WaitlistData {
    position: number;
    total: number;
    email: string;
    name: string;
    referralId: string;
    joinedAt: string;
}

export default function WaitlistStatusPage() {
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<WaitlistData | null>(null);
    const [copiedReferral, setCopiedReferral] = useState(false);
    const [copiedStatus, setCopiedStatus] = useState(false);

    useEffect(() => {
        // Check if ID is a number
        if (!id || isNaN(Number(id))) {
            router.push('/404');
            return;
        }

        fetchWaitlistStatus();
    }, [id, router]);

    const fetchWaitlistStatus = async () => {
        try {
            setLoading(true);
            const response = await fetch(`/api/waitlist?id=${id}`);

            if (!response.ok) {
                if (response.status === 404) {
                    router.push('/404');
                    return;
                }
                throw new Error('Failed to fetch waitlist status');
            }

            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const copyToClipboard = (text: string, type: "referral" | "status") => {
        navigator.clipboard.writeText(text);
        if (type === "referral") {
            setCopiedReferral(true);
            setTimeout(() => setCopiedReferral(false), 2000);
        } else {
            setCopiedStatus(true);
            setTimeout(() => setCopiedStatus(false), 2000);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Loading your waitlist status...</p>
                </div>
            </div>
        );
    }

    if (error || !data) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background px-4">
                <div className="text-center max-w-md">
                    <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-foreground mb-2">Something went wrong</h2>
                    <p className="text-muted-foreground mb-6">{error || "Failed to load waitlist data"}</p>
                    <Button onClick={() => router.push('/')}>
                        Go back home
                    </Button>
                </div>
            </div>
        );
    }

    const appUrl = typeof window !== 'undefined' ? window.location.origin : '';
    const referralLink = `${appUrl}?ref=${data.referralId}`;
    const statusLink = `${appUrl}/waitlist/${id}`;
    const percentageAhead = ((data.total - data.position) / data.total * 100).toFixed(1);

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-primary"
                        >
                            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                            <path d="M13 13l6 6" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">Bitroot Waitlist</h1>
                    <p className="text-lg text-muted-foreground">Track your position and move up the line</p>
                </motion.div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-background rounded-2xl shadow-xl border border-border overflow-hidden"
                >
                    {/* Welcome Header */}
                    <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 border-b border-border">
                        <div className="flex items-center gap-3 mb-2">
                            <Check className="w-6 h-6 text-green-500" />
                            <h2 className="text-2xl font-bold text-foreground">Welcome, {data.name}!</h2>
                        </div>
                        <p className="text-muted-foreground">{data.email}</p>
                    </div>

                    {/* Position Display */}
                    <div className="p-8">
                        <div className="bg-primary/10 rounded-xl p-8 text-center mb-8 border border-primary/20">
                            <p className="text-sm text-muted-foreground mb-2">Your position</p>
                            <motion.p
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                className="text-6xl font-bold text-primary mb-2"
                            >
                                #{data.position}
                            </motion.p>
                            <p className="text-muted-foreground">
                                out of {data.total} on the waitlist
                            </p>
                            <div className="mt-4 pt-4 border-t border-primary/20">
                                <p className="text-sm text-muted-foreground">
                                    You're ahead of <span className="font-semibold text-primary">{percentageAhead}%</span> of the waitlist
                                </p>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-muted/50 rounded-lg p-4 border border-border">
                                <p className="text-sm text-muted-foreground mb-1">Joined</p>
                                <p className="text-lg font-semibold text-foreground">
                                    {new Date(data.joinedAt).toLocaleDateString('en-US', {
                                        month: 'long',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                            <div className="bg-muted/50 rounded-lg p-4 border border-border">
                                <p className="text-sm text-muted-foreground mb-1">Referral Code</p>
                                <p className="text-lg font-semibold text-foreground font-mono">
                                    {data.referralId}
                                </p>
                            </div>
                        </div>

                        {/* Referral Section */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-lg p-6 border border-primary/20">
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    🚀 Move up the waitlist
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Share your unique referral link with friends. For every person who joins using your link, you'll move up in the queue!
                                </p>
                            </div>

                            {/* Referral Link */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground">
                                    Your Referral Link
                                </label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={referralLink}
                                        readOnly
                                        className="flex-1 px-4 py-3 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => copyToClipboard(referralLink, "referral")}
                                        className="shrink-0 h-[46px]"
                                    >
                                        {copiedReferral ? (
                                            <>
                                                <Check className="w-4 h-4 mr-2" />
                                                Copied
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4 mr-2" />
                                                Copy
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>

                            {/* Status Link */}
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-foreground">
                                    Your Status Page
                                </label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="text"
                                        value={statusLink}
                                        readOnly
                                        className="flex-1 px-4 py-3 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                                    />
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        onClick={() => copyToClipboard(statusLink, "status")}
                                        className="shrink-0 h-[46px]"
                                    >
                                        {copiedStatus ? (
                                            <>
                                                <Check className="w-4 h-4 mr-2" />
                                                Copied
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4 mr-2" />
                                                Copy
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 flex gap-4">
                            <Button
                                onClick={() => router.push('/')}
                                variant="outline"
                                className="flex-1"
                            >
                                Back to Home
                            </Button>
                            <Button
                                onClick={fetchWaitlistStatus}
                                className="flex-1"
                            >
                                Refresh Status
                            </Button>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-8 text-sm text-muted-foreground"
                >
                    <p>We'll notify you via email when it's your turn!</p>
                </motion.div>
            </div>
        </div>
    );
}
