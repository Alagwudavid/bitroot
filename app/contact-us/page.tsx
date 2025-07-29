"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    ArrowLeft,
    Send,
    Mail,
    Phone,
    MapPin,
    Clock,
    MessageCircle,
    Globe,
    Twitter,
    Linkedin,
    Facebook
} from "lucide-react";
import Link from "next/link";

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
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

        console.log("Contact form submitted:", formData);
        setSubmitted(true);
        setIsSubmitting(false);

        // Reset form after successful submission
        setTimeout(() => {
            setFormData({ name: "", email: "", subject: "", message: "" });
            setSubmitted(false);
        }, 3000);
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center p-4">
                <Card className="w-full max-w-md text-center">
                    <CardContent className="pt-6">
                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Message Sent!
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Thank you for contacting us. We'll get back to you within 24 hours.
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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-4 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Back to Home
                    </Link>

                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                            Contact Us
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-6">
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MessageCircle className="w-5 h-5 text-blue-600" />
                                    Get in Touch
                                </CardTitle>
                                <CardDescription>
                                    We're here to help and answer any questions you might have.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-blue-600 mt-1" />
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Email</p>
                                        <p className="text-gray-600 dark:text-gray-400">contact@bitroot.com</p>
                                        <p className="text-gray-600 dark:text-gray-400">support@bitroot.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-blue-600 mt-1" />
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                                        <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                                        <p className="text-gray-600 dark:text-gray-400">+1 (555) 987-6543</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Address</p>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            123 Learning Street<br />
                                            Education District<br />
                                            Knowledge City, KC 12345
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                                    <div>
                                        <p className="font-medium text-gray-900 dark:text-white">Business Hours</p>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            Monday - Friday: 9:00 AM - 6:00 PM<br />
                                            Saturday: 10:00 AM - 4:00 PM<br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Social Media Links */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-sm">Follow Us</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex gap-4">
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                                    >
                                        <Facebook className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                                    >
                                        <Twitter className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                                    >
                                        <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                                    >
                                        <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-xl">Send us a Message</CardTitle>
                                <CardDescription>
                                    Fill out the form below and we'll get back to you as soon as possible.
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

                                    {/* Subject */}
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject *</Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            placeholder="What is this regarding?"
                                            value={formData.subject}
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
                                            placeholder="Please provide details about your inquiry..."
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="transition-colors focus:border-blue-500 resize-none"
                                        />
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {formData.message.length}/1000 characters
                                        </p>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex justify-end pt-4">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="min-w-[140px] bg-blue-600 hover:bg-blue-700 transition-colors"
                                        >
                                            {isSubmitting ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                    Sending...
                                                </div>
                                            ) : (
                                                <div className="flex items-center gap-2">
                                                    <Send className="w-4 h-4" />
                                                    Send Message
                                                </div>
                                            )}
                                        </Button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-center">Frequently Asked Questions</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                        How quickly do you respond to inquiries?
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        We typically respond to all inquiries within 24 hours during business days.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                        What information should I include in my message?
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        Please include as much detail as possible about your question or issue to help us provide the best assistance.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                        Do you offer phone support?
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        Yes, phone support is available during business hours. You can reach us at the numbers listed above.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                                        Can I schedule a meeting?
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                                        Absolutely! Mention in your message that you'd like to schedule a meeting and we'll coordinate a time.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
