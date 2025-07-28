"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Trophy,
    Medal,
    Star,
    Clock,
    Target,
    Users,
    Crown,
    Flame,
    ChevronLeft,
    Timer,
    Award
} from "lucide-react";
import Link from "next/link";

export default function LeaderboardClient() {
    const [selectedPeriod, setSelectedPeriod] = useState("daily");

    const stats = {
        totalRegistered: 1277,
        totalParticipated: 255,
        remainingTime: {
            days: 12,
            hours: 6,
            minutes: 42
        }
    };

    const topPlayers = [
        {
            id: 1,
            rank: 1,
            name: "Blademir Malina Tori",
            username: "@pory_bob",
            avatar: "/placeholder-user.jpg",
            wins: 443,
            matches: 778,
            points: 44872,
            streak: 32421,
            coins: 17500,
            medal: "gold",
            isCurrentUser: true
        },
        {
            id: 2,
            rank: 2,
            name: "Robert Fox",
            username: "@robert_fox",
            avatar: "/placeholder-user.jpg",
            wins: 440,
            matches: 887,
            points: 42515,
            streak: 31001,
            coins: 17421,
            medal: "silver",
            isCurrentUser: false
        },
        {
            id: 3,
            rank: 3,
            name: "Molida Glinda",
            username: "@molida_glinda",
            avatar: "/placeholder-user.jpg",
            wins: 412,
            matches: 756,
            points: 40550,
            streak: 30987,
            coins: 17224,
            medal: "bronze",
            isCurrentUser: false
        }
    ];

    const globalRanking = [
        {
            rank: 1,
            name: "Blademir Malina Tori",
            id: "1587697",
            avatar: "/placeholder-user.jpg",
            matchWins: 443,
            spentTime: "778",
            victories: 43,
            bestWin: "1:05",
            points: 44872
        },
        {
            rank: 2,
            name: "Robert Fox",
            id: "1587634",
            avatar: "/placeholder-user.jpg",
            matchWins: 440,
            spentTime: "887",
            victories: 43,
            bestWin: "1:03",
            points: 42515
        },
        {
            rank: 3,
            name: "Molida Glinda",
            id: "1587690",
            avatar: "/placeholder-user.jpg",
            matchWins: 412,
            spentTime: "756",
            victories: 43,
            bestWin: "1:15",
            points: 40550
        },
        {
            rank: 4,
            name: "John Smith",
            id: "1587123",
            avatar: "/placeholder-user.jpg",
            matchWins: 389,
            spentTime: "623",
            victories: 41,
            bestWin: "1:12",
            points: 38920
        },
        {
            rank: 5,
            name: "Sarah Johnson",
            id: "1587456",
            avatar: "/placeholder-user.jpg",
            matchWins: 367,
            spentTime: "589",
            victories: 39,
            bestWin: "1:18",
            points: 36780
        }
    ];

    const getMedalIcon = (medal: string) => {
        switch (medal) {
            case "gold":
                return <Trophy className="w-8 h-8 text-yellow-500" />;
            case "silver":
                return <Medal className="w-8 h-8 text-gray-400" />;
            case "bronze":
                return <Award className="w-8 h-8 text-amber-600" />;
            default:
                return null;
        }
    };

    const getRankBadge = (rank: number) => {
        if (rank === 1) return "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white";
        if (rank === 2) return "bg-gradient-to-r from-gray-300 to-gray-500 text-white";
        if (rank === 3) return "bg-gradient-to-r from-amber-400 to-amber-600 text-white";
        return "bg-gray-600 text-white";
    };

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
            {/* Header */}
            <div className="border-b border-gray-700">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center gap-4">
                        <Link href="/challenges">
                            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                <ChevronLeft className="w-4 h-4 mr-1" />
                                Back to Challenges
                            </Button>
                        </Link>
                        <h1 className="text-3xl font-bold">Leaderboard</h1>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                                    <Users className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-white">{stats.totalRegistered}</p>
                                    <p className="text-sm text-gray-400">Total Registered</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <Target className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-white">{stats.totalParticipated}</p>
                                    <p className="text-sm text-gray-400">Total Participated</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="bg-gray-800/50 border-gray-700 md:col-span-2">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-lg font-semibold text-white mb-1">Remaining time for completion⏰</p>
                                    <p className="text-sm text-gray-400">Only the first three positions will be awarded prizes</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-white">{stats.remainingTime.days}</p>
                                        <p className="text-xs text-gray-400">DAYS</p>
                                    </div>
                                    <span className="text-2xl text-white">:</span>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-white">{stats.remainingTime.hours.toString().padStart(2, '0')}</p>
                                        <p className="text-xs text-gray-400">HRS</p>
                                    </div>
                                    <span className="text-2xl text-white">:</span>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-white">{stats.remainingTime.minutes.toString().padStart(2, '0')}</p>
                                        <p className="text-xs text-gray-400">MINS</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Top 3 Players */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {topPlayers.map((player) => (
                        <Card
                            key={player.id}
                            className={`${player.isCurrentUser
                                    ? "bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-yellow-500/50"
                                    : "bg-gray-800/50 border-gray-700"
                                } relative overflow-hidden`}
                        >
                            {player.isCurrentUser && (
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500" />
                            )}
                            <CardContent className="p-6 text-center">
                                <div className="relative mb-4">
                                    <Avatar className="w-20 h-20 mx-auto border-4 border-gray-600">
                                        <AvatarImage src={player.avatar} />
                                        <AvatarFallback className="bg-gray-700 text-white text-xl">
                                            {player.name.split(' ').map(n => n[0]).join('')}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="absolute -bottom-2 -right-2">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getRankBadge(player.rank)}`}>
                                            <span className="text-sm font-bold">{player.rank}</span>
                                        </div>
                                    </div>
                                    <div className="absolute -top-2 -left-2">
                                        {getMedalIcon(player.medal)}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-white mb-1">{player.name}</h3>
                                <p className="text-sm text-gray-400 mb-4">{player.username}</p>

                                <div className="space-y-3">
                                    <div className="grid grid-cols-3 gap-2 text-center">
                                        <div>
                                            <p className="text-xl font-bold text-white">{player.wins}</p>
                                            <p className="text-xs text-gray-400">WINS</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold text-white">{player.matches}</p>
                                            <p className="text-xs text-gray-400">MATCHES</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold text-white">{player.points.toLocaleString()}</p>
                                            <p className="text-xs text-gray-400">POINTS</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center gap-4 pt-3 border-t border-gray-700">
                                        <div className="flex items-center gap-1">
                                            <Flame className="w-4 h-4 text-orange-500" />
                                            <span className="text-sm font-semibold">{player.streak.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-blue-400" />
                                            <span className="text-sm font-semibold">{player.coins.toLocaleString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Global Ranking Table */}
                <Card className="bg-gray-800/50 border-gray-700">
                    <CardContent className="p-0">
                        <div className="p-6 border-b border-gray-700">
                            <h2 className="text-2xl font-bold text-white">Global Ranking</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-700/50">
                                    <tr>
                                        <th className="text-left p-4 text-sm font-semibold text-gray-300">Rank</th>
                                        <th className="text-left p-4 text-sm font-semibold text-gray-300">User name</th>
                                        <th className="text-left p-4 text-sm font-semibold text-gray-300">Match Wins</th>
                                        <th className="text-left p-4 text-sm font-semibold text-gray-300">Spent time</th>
                                        <th className="text-left p-4 text-sm font-semibold text-gray-300">Victories</th>
                                        <th className="text-left p-4 text-sm font-semibold text-gray-300">Best Win (mins)</th>
                                        <th className="text-left p-4 text-sm font-semibold text-gray-300">Points</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {globalRanking.map((player, index) => (
                                        <tr key={player.rank} className={`border-b border-gray-700/50 ${index === 0 ? 'bg-yellow-500/10' : 'hover:bg-gray-700/30'}`}>
                                            <td className="p-4">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getRankBadge(player.rank)}`}>
                                                    {player.rank}
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <Avatar className="w-10 h-10">
                                                        <AvatarImage src={player.avatar} />
                                                        <AvatarFallback className="bg-gray-600 text-white text-sm">
                                                            {player.name.split(' ').map(n => n[0]).join('')}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div>
                                                        <p className="font-semibold text-white">{player.name}</p>
                                                        <p className="text-xs text-gray-400">ID {player.id}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 text-white font-semibold">{player.matchWins}</td>
                                            <td className="p-4 text-white font-semibold">{player.spentTime}</td>
                                            <td className="p-4 text-white font-semibold">{player.victories}</td>
                                            <td className="p-4 text-white font-semibold">{player.bestWin}</td>
                                            <td className="p-4 text-white font-semibold">{player.points.toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
