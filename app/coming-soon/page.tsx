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
    Target
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
                <div className="space-y-4 font-mono">
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
                <div className="flex justify-center space-x-6 pt-8">
                    <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                        <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                        <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12.56.752c3.84.046 7.16 2.474 8.878 6.14.206.441-.329.908-.74.65a6.394 6.394 0 00-3.676-1.131c-3.533 0-6.394 2.861-6.394 6.394 0 1.304.39 2.518 1.06 3.533.297.45-.226.987-.695.715-2.934-1.707-4.908-4.885-4.908-8.513 0-5.446 4.416-9.862 9.863-9.862.203 0 .405.01.605.024z" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    >
                        <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 .001.774.001 1.729v20.542C.001 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
