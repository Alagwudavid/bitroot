"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Send, MessageSquare } from "lucide-react";
import Link from "next/link";

export default function FeedbackPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        title: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log("Feedback submitted:", formData);
        setSubmitted(true);
        setIsSubmitting(false);

        // Reset form after successful submission
        setTimeout(() => {
            setFormData({ name: "", email: "", title: "", message: "" });
            setSubmitted(false);
        }, 3000);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
                <Card className="w-full max-w-md text-center">
                    <CardContent className="pt-6">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Thank You!
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Your feedback has been submitted successfully. We appreciate your input and will get back to you soon.
                        </p>
                        <Link href="/">
                            <Button className="w-full">
                                Return to Home
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Back to Home
                    </Link>

                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                            <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Send Feedback
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400">
                                We'd love to hear from you
                            </p>
                        </div>
                    </div>
                </div>

                {/* Feedback Form */}
                <Card className="shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                    <CardHeader>
                        <CardTitle className="text-xl">Share Your Thoughts</CardTitle>
                        <CardDescription>
                            Your feedback helps us improve our platform. Please fill out the form below to share your thoughts, suggestions, or report any issues.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name and Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name *</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Enter your full name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="transition-colors focus:border-blue-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address *</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="transition-colors focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <div className="space-y-2">
                                <Label htmlFor="title">Subject *</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder="Brief description of your feedback"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    required
                                    className="transition-colors focus:border-blue-500"
                                />
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <Label htmlFor="message">Message *</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Please share your detailed feedback, suggestions, or any issues you've encountered..."
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    className="transition-colors focus:border-blue-500 resize-none"
                                />
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {formData.message.length}/500 characters
                                </p>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-end pt-4">
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="min-w-[120px] bg-blue-600 hover:bg-blue-700 transition-colors"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Sending...
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-2">
                                            <Send className="w-4 h-4" />
                                            Send Feedback
                                        </div>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>

                {/* Additional Info */}
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        You can also reach us directly at{" "}
                        <a
                            href="mailto:feedback@bitroot.com"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            feedback@bitroot.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}
