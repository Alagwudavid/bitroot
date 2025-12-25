"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check, Copy, Loader2, AlertCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center justify-center gap-2 mb-6">
                        <Image src="/logo.png" alt="Bitroot Logo" width={32} height={32} className="w-8 h-8" />
                        <h1 className="text-3xl font-bold text-foreground font-mono">Waitlist dashboard</h1>
                    </div>
                </motion.div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-background rounded-2xl shadow-xl border border-border overflow-hidden grid grid-cols-1 md:grid-cols-2"
                >
                    {/* Welcome Header */}
                    <div className=" p-8 border-b border-border">
                        <h2 className="text-2xl font-bold text-foreground mb-4">Welcome!</h2>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 text-primary border rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 448 512"><path fill="currentColor" d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8M13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3c0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57c0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6"></path></svg>
                            </div>
                            <h2 className="text-2xl font-bold text-foreground">{data.name}</h2>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 text-primary border rounded-lg flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth={1.5}><rect width={18.5} height={17} x={2.682} y={3.5} rx={4}></rect><path strokeLinecap="round" strokeLinejoin="round" d="m2.729 7.59l7.205 4.13a3.96 3.96 0 0 0 3.975 0l7.225-4.13"></path></g></svg>
                            </div>
                            <p className="text-muted-foreground">{data.email}</p>
                        </div>
                        <div className="bg-muted/50 rounded-xl p-8 text-center mt-8 border">
                            <p className="text-sm text-muted-foreground mb-2">Your position</p>
                            <div className="flex items-baseline justify-center gap-2 text-sm text-muted-foreground">
                                <motion.p
                                initial={{ scale: 0.5 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                className="text-6xl font-bold text-primary mb-2"
                                >
                                    #{data.position}
                                </motion.p>
                                <p className="text-muted-foreground text-base">
                                    /{data.total}
                                </p>
                            </div>
                            {/* <div className="mt-4 pt-4 border-t border-primary/20">
                                <p className="text-sm text-muted-foreground">
                                    You're ahead of <span className="font-semibold text-primary">{percentageAhead}%</span> of the waitlist
                                </p>
                            </div> */}
                        </div>
                    </div>

                    {/* Position Display */}
                    <div className="p-8">

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
                    <p>We'll notify you via email on updates and launch news!</p>
                </motion.div>
            </div>
        </div>
    );
}
