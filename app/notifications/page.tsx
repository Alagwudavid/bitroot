"use client";
import React, { useState } from "react";

// Example icons for demo
const ICONS: Record<string, JSX.Element> = {
    reminder: (
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-orange-100">
            <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M13 16h-1v-4h-1m1-4h.01M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
            </svg>
        </span>
    ),
    post: (
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12h8M12 8v8" />
            </svg>
        </span>
    ),
    podcast: (
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4m0-4h.01" />
            </svg>
        </span>
    ),
    premium: (
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-100">
            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <rect x="4" y="8" width="16" height="8" rx="2" />
                <path d="M8 12h8" />
            </svg>
        </span>
    ),
};

const TABS = [
    { key: "all", label: "All" },
    { key: "reminder", label: "Reminders" },
    { key: "post", label: "Posts" },
    { key: "podcast", label: "Podcasts" },
    { key: "premium", label: "Premium" },
];

const notifications = [
    {
        type: "reminder",
        title: "Reminder for your Episodes",
        description: "Learn more about managing your Google Account info and activity.",
        time: "10 min ago",
        date: "2025-07-24T09:00:00",
        action: null,
    },
    {
        type: "reminder",
        title: "Reminder for your Episodes",
        description: "Learn more about managing your Google Account info and activity.",
        time: "10 min ago",
        date: "2025-07-24T08:50:00",
        action: null,
    },
    {
        type: "post",
        title: "New Post on community",
        description: "",
        time: "5 Hour Ago",
        date: "2025-07-24T04:00:00",
        action: { label: "View", color: "bg-violet-500 text-white" },
        image: "/placeholder-user.jpg",
        dot: true,
    },
    {
        type: "podcast",
        title: "New Podcast Added",
        description: "",
        time: "5 Hour Ago",
        date: "2025-07-23T04:00:00",
        action: { label: "View", color: "bg-violet-100 text-violet-600" },
    },
    {
        type: "premium",
        title: "Request for premium",
        description: "",
        time: "5 Hour Ago",
        date: "2025-07-17T04:00:00",
        action: { label: "My Wallet", color: "bg-violet-100 text-violet-600" },
    },
];

// Helper to group by day
function getDayGroup(dateStr: string) {
    const now = new Date();
    const date = new Date(dateStr);
    const diffMs = now.setHours(0,0,0,0) - date.setHours(0,0,0,0);
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return "Last Week";
    return date.toISOString().split("T")[0];
}

function groupNotificationsByDay(list: typeof notifications) {
    const groups: Record<string, typeof notifications> = {};
    list.forEach(item => {
        const group = getDayGroup(item.date);
        if (!groups[group]) groups[group] = [];
        groups[group].push(item);
    });
    return groups;
}

export default function NotificationPage() {
    const [activeTab, setActiveTab] = useState<string>("all");

    // Filter notifications by tab
    const filtered =
        activeTab === "all"
            ? notifications
            : notifications.filter(n => n.type === activeTab);

    const grouped = groupNotificationsByDay(filtered);

    return (
        <div className="w-full min-h-screen flex flex-col items-center px-2 py-8">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Notifications</h1>
            <div className="w-full max-w-md mx-auto">
                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                    {TABS.map(tab => (
                        <button
                            key={tab.key}
                            className={`px-4 py-2 rounded-full font-medium transition-colors ${
                                activeTab === tab.key
                                    ? "bg-violet-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                            }`}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                {/* Notification Groups */}
                {Object.entries(grouped).map(([group, notes]) => (
                    <div key={group} className="mb-8">
                        <div className="mb-3 text-sm font-semibold text-gray-500">{group}</div>
                        <div className="flex flex-col gap-4">
                            {notes.map((note, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center bg-white rounded-xl shadow-sm px-4 py-4 gap-4"
                                >
                                    {/* Icon or image */}
                                    {note.image ? (
                                        <div className="relative">
                                            <img
                                                src={note.image}
                                                alt="User"
                                                className="w-10 h-10 rounded-full object-cover border border-gray-200"
                                            />
                                            {note.dot && (
                                                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
                                            )}
                                        </div>
                                    ) : (
                                        ICONS[note.type]
                                    )}
                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between">
                                            <span className="font-semibold text-gray-900 text-base">{note.title}</span>
                                            <span className="text-xs text-gray-400">{note.time}</span>
                                        </div>
                                        {note.description && (
                                            <div className="text-xs text-gray-500 mt-1">{note.description}</div>
                                        )}
                                    </div>
                                    {/* Action button */}
                                    {note.action && (
                                        <button
                                            className={`ml-2 px-4 py-1 rounded-lg font-medium text-sm ${note.action.color}`}
                                        >
                                            {note.action.label}
                                        </button>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}