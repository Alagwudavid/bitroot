"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Trophy,
  Flame,
  Zap,
  Star,
  BookOpen,
  Clock,
  Globe,
  Edit,
  Camera,
  Share2,
} from "lucide-react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const userStats = {
    name: "Alex Johnson",
    username: "@alexlearns",
    email: "alex.johnson@email.com",
    joinDate: "March 12, 2024",
    totalXP: 15420,
    currentStreak: 47,
    longestStreak: 89,
    languagesLearning: 3,
    lessonsCompleted: 234,
    timeSpent: "127 hours",
    level: 15,
    rank: "Sapphire League",
    position: 3,
    friends: 28,
    achievements: 24,
  };

  const languages = [
    {
      name: "Swahili",
      flag: "🇹🇿",
      level: 8,
      progress: 75,
      xp: 5420,
      streak: 47,
      lessonsCompleted: 89,
    },
    {
      name: "Yoruba",
      flag: "🇳🇬",
      level: 5,
      progress: 45,
      xp: 3200,
      streak: 23,
      lessonsCompleted: 56,
    },
    {
      name: "Amharic",
      flag: "🇪🇹",
      level: 3,
      progress: 30,
      xp: 1800,
      streak: 12,
      lessonsCompleted: 34,
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first lesson",
      icon: "🏯",
      earned: true,
      date: "March 15, 2024",
    },
    {
      id: 2,
      title: "Week Warrior",
      description: "Maintain a 7-day streak",
      icon: "🔥",
      earned: true,
      date: "March 22, 2024",
    },
    {
      id: 3,
      title: "Language Explorer",
      description: "Start learning 3 languages",
      icon: "🌍",
      earned: true,
      date: "April 5, 2024",
    },
    {
      id: 4,
      title: "XP Master",
      description: "Earn 10,000 XP",
      icon: "⚡",
      earned: true,
      date: "May 18, 2024",
    },
    {
      id: 5,
      title: "Perfect Week",
      description: "Complete all lessons for a week",
      icon: "✨",
      earned: true,
      date: "June 2, 2024",
    },
    {
      id: 6,
      title: "Century Club",
      description: "Complete 100 lessons",
      icon: "💯",
      earned: false,
      date: null,
    },
  ];

  const recentActivity = [
    {
      type: "lesson",
      title: "Completed: Swahili Greetings",
      xp: 15,
      time: "2 hours ago",
      icon: BookOpen,
    },
    {
      type: "achievement",
      title: "Earned: Perfect Week",
      xp: 50,
      time: "1 day ago",
      icon: Trophy,
    },
    {
      type: "streak",
      title: "47-day streak milestone!",
      xp: 25,
      time: "2 days ago",
      icon: Flame,
    },
    {
      type: "level",
      title: "Reached Level 8 in Swahili",
      xp: 100,
      time: "3 days ago",
      icon: Star,
    },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Avatar className="w-20 h-20">
                <AvatarImage src="/placeholder-user.jpg" alt={userStats.name} />
                <AvatarFallback className="bg-[#1e96fc] text-white text-2xl">
                  {userStats.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <Button
                size="icon"
                className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318]"
              >
                <Camera className="w-4 h-4" />
              </Button>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-[#fafafa]">
                {userStats.name}
              </h1>
              <p className="text-gray-600 dark:text-[#fafafa]/70">
                {userStats.username}
              </p>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-[#fafafa]/60">
                  <Calendar className="w-4 h-4" />
                  <span>Joined {userStats.joinDate}</span>
                </div>
                <Badge className="bg-[#fcf300] text-[#072ac8] hover:bg-[#ffc600]">
                  {userStats.rank}
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              className="rounded-xl dark:border-[#7037e4]/30 bg-transparent"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Share Profile
            </Button>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              className="rounded-xl bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318]"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        <Card className="rounded-2xl dark:bg-[#0d1117] dark:border-[#7037e4]/30">
          <CardContent className="p-4 text-center">
            <Zap className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800 dark:text-[#fafafa]">
              {userStats.totalXP.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-[#fafafa]/70">
              Total XP
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl dark:bg-[#0d1117] dark:border-[#7037e4]/30">
          <CardContent className="p-4 text-center">
            <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800 dark:text-[#fafafa]">
              {userStats.currentStreak}
            </div>
            <div className="text-sm text-gray-600 dark:text-[#fafafa]/70">
              Day Streak
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl dark:bg-[#0d1117] dark:border-[#7037e4]/30">
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800 dark:text-[#fafafa]">
              #{userStats.position}
            </div>
            <div className="text-sm text-gray-600 dark:text-[#fafafa]/70">
              Rank
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl dark:bg-[#0d1117] dark:border-[#7037e4]/30">
          <CardContent className="p-4 text-center">
            <Globe className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800 dark:text-[#fafafa]">
              {userStats.languagesLearning}
            </div>
            <div className="text-sm text-gray-600 dark:text-[#fafafa]/70">
              Languages
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl dark:bg-[#0d1117] dark:border-[#7037e4]/30">
          <CardContent className="p-4 text-center">
            <BookOpen className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800 dark:text-[#fafafa]">
              {userStats.lessonsCompleted}
            </div>
            <div className="text-sm text-gray-600 dark:text-[#fafafa]/70">
              Lessons
            </div>
          </CardContent>
        </Card>
        <Card className="rounded-2xl dark:bg-[#0d1117] dark:border-[#7037e4]/30">
          <CardContent className="p-4 text-center">
            <Clock className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-800 dark:text-[#fafafa]">
              {userStats.timeSpent}
            </div>
            <div className="text-sm text-gray-600 dark:text-[#fafafa]/70">
              Time Spent
            </div>
          </CardContent>
        </Card>
      </div>
      {/* ...rest of the component code (tabs, achievements, activity, etc.)... */}
    </div>
  );
}
