"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-lg"
            >
                {/* Icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-destructive/10 mb-6"
                >
                    <AlertCircle className="w-12 h-12 text-destructive" />
                </motion.div>

                {/* Content */}
                <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                    Page Not Found
                </h2>
                <p className="text-muted-foreground mb-8">
                    The waitlist entry you're looking for doesn't exist or the link is invalid.
                    Please check the URL and try again.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        onClick={() => router.back()}
                        variant="outline"
                        className="gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </Button>
                    <Button
                        onClick={() => router.push('/')}
                        className="gap-2"
                    >
                        <Home className="w-4 h-4" />
                        Back to Home
                    </Button>
                </div>

                {/* Help Text */}
                <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                        Need help? Join our waitlist from the{" "}
                        <button
                            onClick={() => router.push('/')}
                            className="text-primary hover:underline font-medium"
                        >
                            home page
                        </button>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
