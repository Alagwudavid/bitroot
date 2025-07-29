import { Button } from "@/components/ui/button";
import {
    BookOpen,
    Users,
    MessageCircle,
    Trophy,
    Globe,
    Zap,
    Heart,
    Star,
    Target,
    Mail,
    AtSign,
    MessageCircleDashed
} from "lucide-react";

const features = [
    {
        icon: BookOpen,
        label: "Interactive Lessons",
        status: "started"
    },
    {
        icon: Users,
        label: "Study Groups",
        status: "not-available"
    },
    {
        icon: MessageCircle,
        label: "Live Chat",
        status: "not-available"
    },
    {
        icon: Trophy,
        label: "Achievements",
        status: "not-available"
    },
    {
        icon: Globe,
        label: "Global Community",
        status: "started"
    },
    {
        icon: Zap,
        label: "AI-Powered Learning",
        status: "not-available"
    },
    {
        icon: Heart,
        label: "Personalized Path",
        status: "started"
    },
    {
        icon: Star,
        label: "Expert Instructors",
        status: "not-available"
    },
    {
        icon: Target,
        label: "Goal Tracking",
        status: "not-available"
    }
];

const getStatusColor = (status: string) => {
    switch (status) {
        case "launched":
            return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
        case "ready to ship":
            return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
        case "started":
            return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
        case "not-available":
            return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
        default:
            return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
    }
};

export default function ComingSoonPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* Emoji Icon */}
                <img src="/gif/hot.gif" alt="Fire" className="size-20 mb-4 mx-auto" />

                {/* Header */}
                <div className="space-y-2 font-mono">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                        WE'RE STILL
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold text-[#C51E3A]">
                        Cooking Our Website.
                    </h1>
                    <div className="space-y-2">
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            We are going to launch our website Very Soon.
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-400">
                            Stay Tune.
                        </p>
                    </div>
                </div>

                {/* Features Status List */}
                <div className="max-w-3xl mx-auto my-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 font-mono">
                        Development Status
                    </h2>
                    <div className="space-y-2">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-lg hover:shadow-lg transition-all duration-200"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                                            <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <span className="font-medium text-gray-900 dark:text-white font-mono">
                                            {feature.label}
                                        </span>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide ${getStatusColor(feature.status)}`}>
                                        {feature.status}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Notify Me Button */}
                <div className="flex justify-center">
                    <Button
                        size="lg"
                        className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full text-base font-mono font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                        <svg
                            className="size-6 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        Join the waitlist
                    </Button>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-6 pb-8">
                    <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                        <Mail className="size-5 text-gray-600 dark:text-gray-400" />
                    </a>
                    <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                        <AtSign className="size-5 text-gray-600 dark:text-gray-400" />
                    </a>
                    <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                        <MessageCircleDashed className="size-5 text-gray-600 dark:text-gray-400" />
                    </a>
                </div>
            </div>
        </div>
    );
}
