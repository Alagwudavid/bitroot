"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Search,
    Users,
    MessageCircle,
    User,
    Building,
    Crown,
    Lock,
    Settings,
    Plus,
    ArrowRight
} from "lucide-react";
import { cn } from "@/lib/utils";

// Messages Icon Component (from the SVG you provided)
const MessagesIcon = ({ className }: { className?: string }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M14 2.00522C13.3848 2 12.7199 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 11.2801 22 10.6152 21.9948 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
        <circle cx="19" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path
            opacity="0.5"
            d="M2 13H5.16026C6.06543 13 6.51802 13 6.91584 13.183C7.31367 13.3659 7.60821 13.7096 8.19729 14.3968L8.80271 15.1032C9.39179 15.7904 9.68633 16.1341 10.0842 16.317C10.482 16.5 10.9346 16.5 11.8397 16.5H12.1603C13.0654 16.5 13.518 16.5 13.9158 16.317C14.3137 16.1341 14.6082 15.7904 15.1973 15.1032L15.8027 14.3968C16.3918 13.7096 16.6863 13.3659 17.0842 13.183C17.482 13 17.9346 13 18.8397 13H22"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
        />
    </svg>
);

// Sample data for demonstration
const sampleCommunities = [
    {
        id: "1",
        name: "Spanish Learners Hub",
        avatar: "/flag/es.png",
        members: 15420,
        unreadCount: 5,
        lastMessage: "Great lesson today!",
        timestamp: "2h"
    },
    {
        id: "2",
        name: "Math Study Group",
        avatar: "/placeholder-user.jpg",
        members: 890,
        unreadCount: 0,
        lastMessage: "Anyone free for calculus review?",
        timestamp: "4h"
    }
];

const sampleGroups = [
    {
        id: "1",
        name: "JavaScript Fundamentals",
        avatar: "/placeholder-user.jpg",
        members: 8,
        community: "Tech Learning Hub",
        unreadCount: 12,
        lastMessage: "Check out this cool project!",
        timestamp: "1h"
    },
    {
        id: "2",
        name: "Spanish Conversation Circle",
        avatar: "/flag/es.png",
        members: 6,
        community: "Spanish Learners Hub",
        unreadCount: 0,
        lastMessage: "¡Hasta mañana!",
        timestamp: "3h"
    }
];

const sampleUsers = [
    {
        id: "1",
        name: "Sofia Martinez",
        avatar: "/placeholder-user.jpg",
        status: "online",
        unreadCount: 3,
        lastMessage: "Thanks for the help with pronunciation!",
        timestamp: "30m"
    },
    {
        id: "2",
        name: "Dr. Marcus Chen",
        avatar: "/placeholder-user.jpg",
        status: "offline",
        unreadCount: 0,
        lastMessage: "See you in tomorrow's session",
        timestamp: "1d"
    }
];

const MessagesClient = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("communities");

    const DisabledMessageItem = ({
        icon,
        title,
        subtitle,
        avatar,
        unreadCount,
        timestamp
    }: {
        icon?: React.ReactNode;
        title: string;
        subtitle: string;
        avatar: string;
        unreadCount: number;
        timestamp: string;
    }) => (
        <div className="flex items-center space-x-3 p-4 hover:bg-muted/50 transition-colors cursor-not-allowed opacity-60 border-b border-border/50">
            <div className="relative">
                <Avatar className="h-12 w-12">
                    <AvatarImage src={avatar} alt={title} />
                    <AvatarFallback>
                        {icon || title.charAt(0)}
                    </AvatarFallback>
                </Avatar>
                {unreadCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs bg-red-500 text-white rounded-full">
                        {unreadCount > 99 ? "99+" : unreadCount}
                    </Badge>
                )}
            </div>
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground truncate">{title}</h3>
                    <span className="text-xs text-muted-foreground">{timestamp}</span>
                </div>
                <p className="text-sm text-muted-foreground truncate">{subtitle}</p>
            </div>
            <Lock className="h-4 w-4 text-muted-foreground" />
        </div>
    );

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 p-4">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <MessagesIcon className="text-foreground" />
                            <h1 className="text-2xl font-bold text-foreground">Messages</h1>
                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                                Coming Soon
                            </Badge>
                        </div>
                        <Button variant="outline" size="sm" disabled className="opacity-50">
                            <Settings className="h-4 w-4" />
                        </Button>
                    </div>

                    {/* Search Bar */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search conversations..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                            disabled
                        />
                    </div>
                </div>

                {/* Coming Soon Notice */}
                <div className="p-6">
                    <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border border-blue-200 dark:border-blue-800">
                        <MessagesIcon className="mx-auto mb-4 h-16 w-16 text-blue-500" />
                        <h2 className="text-xl font-semibold text-foreground mb-2">Messages Coming Soon!</h2>
                        <p className="text-muted-foreground mb-4 max-w-md mx-auto">
                            We're working hard to bring you an amazing messaging experience. Soon you'll be able to chat with communities, study groups, and fellow learners.
                        </p>
                        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                                <Users className="h-4 w-4" />
                                <span>Community Chats</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <MessageCircle className="h-4 w-4" />
                                <span>Group Messages</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <User className="h-4 w-4" />
                                <span>Direct Messages</span>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Tabs - Preview of what's coming */}
                <div className="px-4">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="communities" disabled className="opacity-50">
                                <Users className="h-4 w-4 mr-2" />
                                Communities
                            </TabsTrigger>
                            <TabsTrigger value="groups" disabled className="opacity-50">
                                <MessageCircle className="h-4 w-4 mr-2" />
                                Groups
                            </TabsTrigger>
                            <TabsTrigger value="users" disabled className="opacity-50">
                                <User className="h-4 w-4 mr-2" />
                                Direct
                            </TabsTrigger>
                        </TabsList>

                        {/* Communities Tab */}
                        <TabsContent value="communities" className="mt-4">
                            <Card className="overflow-hidden">
                                <div className="p-4 bg-muted/30 border-b border-border/50">
                                    <h3 className="font-semibold text-foreground flex items-center">
                                        <Users className="h-4 w-4 mr-2" />
                                        Community Discussions
                                        <Badge variant="outline" className="ml-2 text-xs">Preview</Badge>
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Chat with entire learning communities
                                    </p>
                                </div>
                                <div className="divide-y divide-border/50">
                                    {sampleCommunities.map((community) => (
                                        <DisabledMessageItem
                                            key={community.id}
                                            title={community.name}
                                            subtitle={`${community.members.toLocaleString()} members • ${community.lastMessage}`}
                                            avatar={community.avatar}
                                            unreadCount={community.unreadCount}
                                            timestamp={community.timestamp}
                                            icon={<Users className="h-6 w-6" />}
                                        />
                                    ))}
                                </div>
                            </Card>
                        </TabsContent>

                        {/* Groups Tab */}
                        <TabsContent value="groups" className="mt-4">
                            <Card className="overflow-hidden">
                                <div className="p-4 bg-muted/30 border-b border-border/50">
                                    <h3 className="font-semibold text-foreground flex items-center">
                                        <MessageCircle className="h-4 w-4 mr-2" />
                                        Study Group Chats
                                        <Badge variant="outline" className="ml-2 text-xs">Preview</Badge>
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Collaborate with your study group members
                                    </p>
                                </div>
                                <div className="divide-y divide-border/50">
                                    {sampleGroups.map((group) => (
                                        <DisabledMessageItem
                                            key={group.id}
                                            title={group.name}
                                            subtitle={`${group.members} members • ${group.community} • ${group.lastMessage}`}
                                            avatar={group.avatar}
                                            unreadCount={group.unreadCount}
                                            timestamp={group.timestamp}
                                            icon={<MessageCircle className="h-6 w-6" />}
                                        />
                                    ))}
                                </div>
                            </Card>
                        </TabsContent>

                        {/* Users Tab */}
                        <TabsContent value="users" className="mt-4">
                            <Card className="overflow-hidden">
                                <div className="p-4 bg-muted/30 border-b border-border/50">
                                    <h3 className="font-semibold text-foreground flex items-center">
                                        <User className="h-4 w-4 mr-2" />
                                        Direct Messages
                                        <Badge variant="outline" className="ml-2 text-xs">Preview</Badge>
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Private conversations with fellow learners
                                    </p>
                                </div>
                                <div className="divide-y divide-border/50">
                                    {sampleUsers.map((user) => (
                                        <DisabledMessageItem
                                            key={user.id}
                                            title={user.name}
                                            subtitle={user.lastMessage}
                                            avatar={user.avatar}
                                            unreadCount={user.unreadCount}
                                            timestamp={user.timestamp}
                                            icon={<User className="h-6 w-6" />}
                                        />
                                    ))}
                                </div>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>

                {/* Footer */}
                <div className="p-6 text-center">
                    <p className="text-sm text-muted-foreground">
                        In the meantime, continue engaging through posts and study groups!
                    </p>
                    <Button variant="outline" className="mt-2" onClick={() => window.history.back()}>
                        <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                        Back to Feed
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MessagesClient;
