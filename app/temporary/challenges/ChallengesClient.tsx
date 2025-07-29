"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    Trophy,
    Star,
    Zap,
    Gift,
    Users,
    Clock,
    Target,
    Coins,
    Flame,
    Crown,
    Play,
    RotateCcw
} from "lucide-react";
import Link from "next/link";

export default function ChallengesClient() {
    const [selectedTab, setSelectedTab] = useState("daily");

    const dailyBonuses = [
        {
            id: 1,
            title: "Free Power Wheel",
            description: "Spin every 24 hours",
            icon: <RotateCcw className="w-6 h-6" />,
            color: "bg-gradient-to-br from-purple-500 to-pink-500",
            available: true
        },
        {
            id: 2,
            title: "Daily bonuses",
            description: "Claim your rewards",
            icon: <Gift className="w-6 h-6" />,
            color: "bg-gradient-to-br from-blue-500 to-cyan-500",
            available: true
        },
        {
            id: 3,
            title: "Cash back",
            description: "Get XP",
            icon: <Coins className="w-6 h-6" />,
            color: "bg-gradient-to-br from-green-500 to-emerald-500",
            available: false
        },
        {
            id: 4,
            title: "Vip Club",
            description: "Exclusive rewards",
            icon: <Crown className="w-6 h-6" />,
            color: "bg-gradient-to-br from-yellow-500 to-orange-500",
            available: true
        },
        {
            id: 5,
            title: "Free Boxes",
            description: "Mystery rewards",
            icon: <Gift className="w-6 h-6" />,
            color: "bg-gradient-to-br from-red-500 to-pink-500",
            available: true
        },
        {
            id: 6,
            title: "Promo codes",
            description: "Redeem codes",
            icon: <Target className="w-6 h-6" />,
            color: "bg-gradient-to-br from-indigo-500 to-purple-500",
            available: true
        }
    ];

    const challenges = [
        {
            id: 1,
            title: "Daily Vocabulary Sprint",
            description: "Learn 20 new words in under 10 minutes",
            difficulty: "Easy",
            reward: "100 XP",
            timeLimit: "10 min",
            participants: 1247,
            image: "/placeholder.svg?height=100&width=150",
            status: "active",
            progress: 65
        },
        {
            id: 2,
            title: "Grammar Master Challenge",
            description: "Complete advanced grammar exercises",
            difficulty: "Hard",
            reward: "500 XP",
            timeLimit: "30 min",
            participants: 523,
            image: "/placeholder.svg?height=100&width=150",
            status: "upcoming",
            progress: 0
        },
        {
            id: 3,
            title: "Pronunciation Perfect",
            description: "Achieve 95% accuracy in pronunciation",
            difficulty: "Medium",
            reward: "250 XP",
            timeLimit: "15 min",
            participants: 892,
            image: "/placeholder.svg?height=100&width=150",
            status: "active",
            progress: 30
        },
        {
            id: 4,
            title: "Speed Translation",
            description: "Translate 50 sentences correctly",
            difficulty: "Medium",
            reward: "300 XP",
            timeLimit: "20 min",
            participants: 678,
            image: "/placeholder.svg?height=100&width=150",
            status: "completed",
            progress: 100
        },
        {
            id: 5,
            title: "Cultural Trivia Master",
            description: "Answer cultural questions about languages",
            difficulty: "Easy",
            reward: "150 XP",
            timeLimit: "12 min",
            participants: 1534,
            image: "/placeholder.svg?height=100&width=150",
            status: "active",
            progress: 85
        },
        {
            id: 6,
            title: "Conversation Champion",
            description: "Complete dialogue exercises flawlessly",
            difficulty: "Hard",
            reward: "600 XP",
            timeLimit: "25 min",
            participants: 345,
            image: "/placeholder.svg?height=100&width=150",
            status: "upcoming",
            progress: 0
        }
    ];

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Easy": return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300";
            case "Medium": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300";
            case "Hard": return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300";
            default: return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300";
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "active": return "bg-green-500";
            case "upcoming": return "bg-blue-500";
            case "completed": return "bg-gray-500";
            default: return "bg-gray-500";
        }
    };

    return (
        <div className="min-h-screen w-full bg-background text-foreground">
            {/* Header Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20" />
                <div className="relative max-w-7xl mx-auto px-4 py-12">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="flex-1">
                            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                Win Up to Power points Daily in Lucky Spin Wheel
                            </h1>
                            <p className="text-xl text-gray-300 mb-6">
                                The ultimate wheel of fortune is a thrilling way for you to pick the winner of our lucky games!
                            </p>
                            <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
                                <Play className="w-5 h-5 mr-2" />
                                SPIN NOW
                            </Button>
                        </div>
                        <div className="relative">
                            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                                        <RotateCcw className="w-12 h-12 text-white" />
                                        <span className="absolute text-white font-bold text-xl">SPIN</span>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce" />
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse" />
                            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Other Bonuses Section */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-bold mb-6 text-white">Other bonuses</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                    {dailyBonuses.map((bonus) => (
                        <Card key={bonus.id} className={`${bonus.color} border-0 text-white hover:scale-105 transition-transform cursor-pointer`}>
                            <CardContent className="p-4 text-center">
                                <div className="mb-2">
                                    {bonus.icon}
                                </div>
                                <h3 className="font-semibold text-sm mb-1">{bonus.title}</h3>
                                <p className="text-xs opacity-90">{bonus.description}</p>
                                {/* {!bonus.available && (
                                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                                        <span className="text-white text-xs">Coming Soon</span>
                                    </div>
                                )} */}
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Challenges Section */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">Language Challenges</h2>
                    <div className="flex gap-2">
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                            Popular
                        </Button>
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                            Hot
                        </Button>
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                            Playing now
                        </Button>
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                            Trending
                        </Button>
                        <Link href="/challenges/leaderboard">
                            <Button className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white">
                                <Trophy className="w-4 h-4 mr-2" />
                                View Leaderboard
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {challenges.map((challenge) => (
                        <Card key={challenge.id} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-200 overflow-hidden">
                            <div className="relative">
                                <img
                                    src={challenge.image}
                                    alt={challenge.title}
                                    className="w-full h-32 object-cover"
                                />
                                <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${getStatusColor(challenge.status)}`} />
                                <Badge className={`absolute top-2 left-2 ${getDifficultyColor(challenge.difficulty)} text-xs`}>
                                    {challenge.difficulty}
                                </Badge>
                            </div>
                            <CardContent className="p-4">
                                <h3 className="text-lg font-bold text-white mb-2">{challenge.title}</h3>
                                <p className="text-gray-300 text-sm mb-3">{challenge.description}</p>

                                <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Trophy className="w-4 h-4" />
                                        <span>{challenge.reward}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{challenge.timeLimit}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4" />
                                        <span>{challenge.participants}</span>
                                    </div>
                                </div>

                                {challenge.status === "active" && (
                                    <div className="mb-3">
                                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                                            <span>Progress</span>
                                            <span>{challenge.progress}%</span>
                                        </div>
                                        <Progress value={challenge.progress} className="h-2" />
                                    </div>
                                )}

                                <Button
                                    className={`w-full ${challenge.status === "active"
                                            ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                                            : challenge.status === "upcoming"
                                                ? "bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700"
                                                : "bg-gray-600 hover:bg-gray-700"
                                        } text-white`}
                                    disabled={challenge.status === "completed"}
                                >
                                    {challenge.status === "active" && <Play className="w-4 h-4 mr-2" />}
                                    {challenge.status === "upcoming" && <Clock className="w-4 h-4 mr-2" />}
                                    {challenge.status === "completed" && <Trophy className="w-4 h-4 mr-2" />}
                                    {challenge.status === "active" ? "Join Challenge" :
                                        challenge.status === "upcoming" ? "Coming Soon" : "Completed"}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
