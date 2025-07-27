"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CalendarDays,
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
import { useIsMobile } from "@/hooks/use-mobile";
import Link from "next/link";
import ContributionGrid from "@/components/ContributionGrid";
import { VerifiedBadge } from "@/components/verified-badge";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const userStats = {
    name: "Alex Johnson",
    username: "@alexlearns",
    email: "alex.johnson@email.com",
    joinDate: "March, 2024",
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
  const isMobile = useIsMobile();
  if (isMobile === undefined) return null;

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-4 items-center">
      {/* Header */}
          <div className="flex items-center flex-col md:flex-row w-full gap-4">
            {isMobile ? (
              <div className="relative w-full bg-[#fbde84] border border-gray-300 dark:border-gray-700 rounded-lg">
                <Avatar className="flex w-52 h-52 mx-auto rounded-none object-cover">
                  <AvatarImage
                    src="/placeholder-user1.png"
                    alt={userStats.name}
                  />
                  <AvatarFallback className="bg-[#fbde84] text-white text-2xl w-52 h-52 rounded-lg">
                    {userStats.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {/* <Button
                  size="icon"
                  className="absolute top-1 right-1 w-8 h-8 rounded-full bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318]"
                >
                  <Camera className="w-4 h-4" />
                </Button> */}
              </div>
            ) : (
              <div className="relative border border-gray-300 dark:border-gray-700 rounded-lg">
                <Avatar className="flex w-52 h-52 rounded-lg">
                  <AvatarImage
                    src="/placeholder-user1.png"
                    alt={userStats.name}
                  />
                  <AvatarFallback className="bg-[#1e96fc] text-white text-2xl w-52 h-52 rounded-lg">
                    {userStats.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                {/* <Button
                  size="icon"
                  className="absolute top-1 right-1 w-8 h-8 rounded-full bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318]"
                >
                  <Camera className="w-4 h-4" />
                </Button> */}
              </div>
            )}
            <div className="bg-[#EEEDEC] dark:bg-[#0d1117] text-white flex flex-col justify-between h-52 w-full p-4 pr-10 font-mono rounded-lg theme-aware border border-gray-300 dark:border-gray-700">
              <p className="text-sm uppercase font-bold text-gray-600 dark:text-[#fafafa]/70">
                bio
              </p>
              <div className="flex flex-col items-start space-y-1 mt-2">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-[#fafafa] flex items-center">
                  {userStats.name}
                  <VerifiedBadge accountType={"instructor"} />
                </h1>
                <p className="text-gray-600 dark:text-[#fafafa]/70">
                  {userStats.username}
                </p>
                <div className="text-gray-600 dark:text-[#fafafa]/70 uppercase flex items-center gap-2">
                  2 followers
                  <span className="block mt-0.5 w-1 h-1 shrink-0 bg-gray-400 rounded-full"></span>
                  2 following
                </div>
                <div className="text-gray-600 dark:text-[#fafafa]/70 flex items-center gap-2">
                  <CalendarDays className="size-4" /> Joined March, 2024
                </div>
              </div>
              {/* <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-[#fafafa]/60">
                  <CalendarDays className="w-4 h-4" />
                  <span>Joined {userStats.joinDate}</span>
                </div>
              </div> */}
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-8 h-5 rounded overflow-hidden bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] text-white group-hover:bg-[#1e96fc] dark:group-hover:bg-[#8ddeed] dark:group-hover:text-[#030318] flex items-center justify-center">
                  <img
                    src={`/flag/ng.png`}
                    alt={`flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-8 h-5 rounded overflow-hidden bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] text-white group-hover:bg-[#1e96fc] dark:group-hover:bg-[#8ddeed] dark:group-hover:text-[#030318] flex items-center justify-center">
                  <img
                    src={`/flag/za.png`}
                    alt={`flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-8 h-5 rounded overflow-hidden bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] text-white group-hover:bg-[#1e96fc] dark:group-hover:bg-[#8ddeed] dark:group-hover:text-[#030318] flex items-center justify-center">
                  <img
                    src={`/flag/tz.png`}
                    alt={`flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm uppercase font-bold text-gray-600 dark:text-[#fafafa]/70">
            overview
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
            <div className="relative overflow-hidden bg-[#EEEDEC] dark:bg-[#0d1117] text-white flex flex-col justify-between h-52 w-full  p-5 font-mono rounded-lg theme-aware border border-gray-300 dark:border-gray-700">
              <p className="text-base uppercase font-bold text-gray-600 dark:text-[#fafafa]/70">
               total xp
              </p>
              <p className="text-8xl uppercase font-bold text-gray-600 dark:text-white z-10">
                103k
              </p>
              <div className="flex flex-col">
                <p className="text-sm uppercase font-bold text-gray-600 dark:text-[#fafafa]/70">
                  103,034k
                </p>
              </div>
              <svg
                className="size-60 absolute -right-14 top-0 rotate-12 text-[#8A2BE2]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.66953 9.91436L8.73167 5.77133C10.711 3.09327 11.7007 1.75425 12.6241 2.03721C13.5474 2.32018 13.5474 3.96249 13.5474 7.24712V7.55682C13.5474 8.74151 13.5474 9.33386 13.926 9.70541L13.946 9.72466C14.3327 10.0884 14.9492 10.0884 16.1822 10.0884C18.4011 10.0884 19.5106 10.0884 19.8855 10.7613C19.8917 10.7724 19.8977 10.7837 19.9036 10.795C20.2576 11.4784 19.6152 12.3475 18.3304 14.0857L15.2683 18.2287C13.2889 20.9067 12.2992 22.2458 11.3758 21.9628C10.4525 21.6798 10.4525 20.0375 10.4525 16.7528L10.4526 16.4433C10.4526 15.2585 10.4526 14.6662 10.074 14.2946L10.054 14.2754C9.6673 13.9117 9.05079 13.9117 7.81775 13.9117C5.59888 13.9117 4.48945 13.9117 4.1145 13.2387C4.10829 13.2276 4.10225 13.2164 4.09639 13.205C3.74244 12.5217 4.3848 11.6526 5.66953 9.91436Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="relative overflow-hidden bg-[#EEEDEC] dark:bg-[#0d1117] text-white flex flex-col justify-between h-52 w-full p-5 font-mono rounded-lg theme-aware border border-gray-300 dark:border-gray-700">
              <p className="text-sm uppercase font-bold text-gray-600 dark:text-[#fafafa]/70">
                best streak
              </p>
              <p className="text-8xl font-bold text-gray-600 dark:text-white z-10">
                5
              </p>
              <div className="flex flex-col">
                <p className="text-sm uppercase font-bold text-gray-600 dark:text-[#fafafa]/70">
                wildfire
                </p>
              </div>
              <svg
                className="size-60 absolute -right-14 top-0 rotate-12 text-sky-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.5"
                  d="M12.8324 21.8013C15.9583 21.1747 20 18.926 20 13.1112C20 7.8196 16.1267 4.29593 13.3415 2.67685C12.7235 2.31757 12 2.79006 12 3.50492V5.3334C12 6.77526 11.3938 9.40711 9.70932 10.5018C8.84932 11.0607 7.92052 10.2242 7.816 9.20388L7.73017 8.36604C7.6304 7.39203 6.63841 6.80075 5.85996 7.3946C4.46147 8.46144 3 10.3296 3 13.1112C3 20.2223 8.28889 22.0001 10.9333 22.0001C11.0871 22.0001 11.2488 21.9955 11.4171 21.9858C11.863 21.9296 11.4171 22.085 12.8324 21.8013Z"
                  fill="#FF0800"
                />
                <path
                  d="M8 18.4442C8 21.064 10.1113 21.8742 11.4171 21.9858C11.863 21.9296 11.4171 22.085 12.8324 21.8013C13.871 21.4343 15 20.4922 15 18.4442C15 17.1465 14.1814 16.3459 13.5401 15.9711C13.3439 15.8564 13.1161 16.0008 13.0985 16.2273C13.0429 16.9454 12.3534 17.5174 11.8836 16.9714C11.4685 16.4889 11.2941 15.784 11.2941 15.3331V14.7439C11.2941 14.3887 10.9365 14.1533 10.631 14.3346C9.49507 15.0085 8 16.3949 8 18.4442Z"
                  fill="#E23D28"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
            <div className="relative overflow-hidden bg-[#EEEDEC] dark:bg-[#0d1117] text-white flex flex-col justify-between h-52 w-full  p-5 font-mono rounded-lg theme-aware border border-gray-300 dark:border-gray-700">
              <p className="text-base uppercase font-bold text-gray-600 dark:text-[#fafafa]/70">
                completed languages
              </p>
              <p className="text-8xl uppercase font-bold text-gray-600 dark:text-white z-10">
                3
              </p>
              <div className="flex flex-col">
                <p className="text-sm uppercase font-bold text-gray-600 dark:text-[#fafafa]/70">
                  1 new
                </p>
              </div>
              <svg
                className="size-48 absolute right-0 top-2 rotate-12 text-sky-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.88003 4.59875C8.08003 1.13875 2.87002 1.12875 2.07002 4.59875C1.60002 6.62875 2.89003 8.34875 4.01003 9.41875C4.83003 10.1888 6.12003 10.1888 6.94003 9.41875C8.06003 8.34875 9.34003 6.62875 8.88003 4.59875ZM5.51003 6.19875C4.96003 6.19875 4.51003 5.74875 4.51003 5.19875C4.51003 4.64875 4.95003 4.19875 5.50003 4.19875H5.51003C6.07003 4.19875 6.51003 4.64875 6.51003 5.19875C6.51003 5.74875 6.07003 6.19875 5.51003 6.19875Z"
                  fill="currentColor"
                />
                <path
                  d="M21.91 16.5988C21.11 13.1388 15.88 13.1288 15.07 16.5988C14.6 18.6288 15.89 20.3488 17.02 21.4188C17.84 22.1888 19.14 22.1888 19.96 21.4188C21.09 20.3488 22.38 18.6288 21.91 16.5988ZM18.53 18.1988C17.98 18.1988 17.53 17.7488 17.53 17.1988C17.53 16.6488 17.97 16.1988 18.52 16.1988H18.53C19.08 16.1988 19.53 16.6488 19.53 17.1988C19.53 17.7488 19.08 18.1988 18.53 18.1988Z"
                  fill="currentColor"
                />
                <path
                  d="M11.9995 19.75H9.31945C8.15945 19.75 7.14945 19.05 6.74945 17.97C6.33945 16.89 6.63945 15.7 7.50945 14.93L15.4995 7.94C15.9795 7.52 15.9895 6.95 15.8495 6.56C15.6995 6.17 15.3195 5.75 14.6795 5.75H11.9995C11.5895 5.75 11.2495 5.41 11.2495 5C11.2495 4.59 11.5895 4.25 11.9995 4.25H14.6795C15.8395 4.25 16.8495 4.95 17.2495 6.03C17.6595 7.11 17.3595 8.3 16.4895 9.07L8.49945 16.06C8.01945 16.48 8.00945 17.05 8.14945 17.44C8.29945 17.83 8.67945 18.25 9.31945 18.25H11.9995C12.4095 18.25 12.7495 18.59 12.7495 19C12.7495 19.41 12.4095 19.75 11.9995 19.75Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="relative overflow-hidden bg-[#EEEDEC] dark:bg-[#0d1117] text-white flex flex-col justify-between h-52 w-full p-5 font-mono rounded-lg theme-aware border border-gray-300 dark:border-gray-700">
              <p className="text-sm uppercase font-bold text-gray-600 dark:text-[#fafafa]/70">
                certificates
              </p>
              <p className="text-8xl font-bold text-gray-600 dark:text-white z-10">
                3
              </p>
              <p className="text-sm uppercase font-bold text-gray-600 dark:text-[#fafafa]/70">
                fluent
              </p>
              <svg
                className="size-60 absolute -right-14 top-0 rotate-12 text-[#4169E1]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8114 5.49V6.23L14.2714 4.18C12.9314 3.41 11.0614 3.41 9.73141 4.18L6.19141 6.24V5.49C6.19141 3.24 7.42141 2 9.67141 2H14.3314C16.5814 2 17.8114 3.24 17.8114 5.49Z"
                  fill="currentColor"
                />
                <path
                  d="M17.84 7.96828L17.7 7.89828L16.34 7.11828L13.52 5.48828C12.66 4.98828 11.34 4.98828 10.48 5.48828L7.66 7.10828L6.3 7.90828L6.12 7.99828C4.37 9.17828 4.25 9.39828 4.25 11.2883V15.8083C4.25 17.6983 4.37 17.9183 6.16 19.1283L10.48 21.6183C10.91 21.8783 11.45 21.9883 12 21.9883C12.54 21.9883 13.09 21.8683 13.52 21.6183L17.88 19.0983C19.64 17.9183 19.75 17.7083 19.75 15.8083V11.2883C19.75 9.39828 19.63 9.17828 17.84 7.96828ZM14.79 13.4983L14.18 14.2483C14.08 14.3583 14.01 14.5683 14.02 14.7183L14.08 15.6783C14.12 16.2683 13.7 16.5683 13.15 16.3583L12.26 15.9983C12.12 15.9483 11.89 15.9483 11.75 15.9983L10.86 16.3483C10.31 16.5683 9.89 16.2583 9.93 15.6683L9.99 14.7083C10 14.5583 9.93 14.3483 9.83 14.2383L9.21 13.4983C8.83 13.0483 9 12.5483 9.57 12.3983L10.5 12.1583C10.65 12.1183 10.82 11.9783 10.9 11.8583L11.42 11.0583C11.74 10.5583 12.25 10.5583 12.58 11.0583L13.1 11.8583C13.18 11.9883 13.36 12.1183 13.5 12.1583L14.43 12.3983C15 12.5483 15.17 13.0483 14.79 13.4983Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
            <div className="relative overflow-hidden bg-[#EEEDEC] dark:bg-[#0d1117] text-white flex flex-col justify-between h-52 w-full  p-5 font-mono rounded-lg theme-aware border border-gray-300 dark:border-gray-700">
              <p className="text-base uppercase font-bold text-gray-600 dark:text-[#fafafa]/70">
              achievements
              </p>
              <p className="text-8xl uppercase font-bold text-gray-600 dark:text-white z-10">
                103
              </p>
              <div className="flex flex-col">
                <p className="text-sm uppercase font-bold text-gray-600 dark:text-[#fafafa]/70">
                scholar
                </p>
              </div>
              <svg
                className="size-60 absolute -right-14 top-0 rotate-12 text-[#FF4500]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.25 18.2509H9C7.9 18.2509 7 19.1509 7 20.2509V20.5009H6C5.59 20.5009 5.25 20.8409 5.25 21.2509C5.25 21.6609 5.59 22.0009 6 22.0009H18C18.41 22.0009 18.75 21.6609 18.75 21.2509C18.75 20.8409 18.41 20.5009 18 20.5009H17V20.2509C17 19.1509 16.1 18.2509 15 18.2509H12.75V15.9609C12.5 15.9909 12.25 16.0009 12 16.0009C11.75 16.0009 11.5 15.9909 11.25 15.9609V18.2509Z"
                  fill="currentColor"
                />
                <path
                  d="M18.4793 11.64C19.1393 11.39 19.7193 10.98 20.1793 10.52C21.1093 9.49 21.7193 8.26 21.7193 6.82C21.7193 5.38 20.5893 4.25 19.1493 4.25H18.5893C17.9393 2.92 16.5793 2 14.9993 2H8.9993C7.4193 2 6.0593 2.92 5.4093 4.25H4.8493C3.4093 4.25 2.2793 5.38 2.2793 6.82C2.2793 8.26 2.8893 9.49 3.8193 10.52C4.2793 10.98 4.8593 11.39 5.5193 11.64C6.5593 14.2 9.0593 16 11.9993 16C14.9393 16 17.4393 14.2 18.4793 11.64ZM14.8393 8.45L14.2193 9.21C14.1193 9.32 14.0493 9.54 14.0593 9.69L14.1193 10.67C14.1593 11.27 13.7293 11.58 13.1693 11.36L12.2593 11C12.1193 10.95 11.8793 10.95 11.7393 11L10.8293 11.36C10.2693 11.58 9.8393 11.27 9.8793 10.67L9.9393 9.69C9.9493 9.54 9.8793 9.32 9.7793 9.21L9.1593 8.45C8.7693 7.99 8.9393 7.48 9.5193 7.33L10.4693 7.09C10.6193 7.05 10.7993 6.91 10.8793 6.78L11.4093 5.96C11.7393 5.45 12.2593 5.45 12.5893 5.96L13.1193 6.78C13.1993 6.91 13.3793 7.05 13.5293 7.09L14.4793 7.33C15.0593 7.48 15.2293 7.99 14.8393 8.45Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="relative overflow-hidden bg-[#EEEDEC] dark:bg-[#0d1117] text-white flex flex-col justify-between h-52 w-full p-5 font-mono rounded-lg theme-aware border border-gray-300 dark:border-gray-700">
              <p className="text-sm uppercase font-bold text-gray-600 dark:text-[#fafafa]/70">
                rank
              </p>
              <p className="text-8xl font-bold text-gray-600 dark:text-white flex z-10">
                14
              </p>
              <div className="flex flex-col">
                <p className="text-sm uppercase font-bold text-gray-600 dark:text-[#fafafa]/70">
                  top 3 finishes
                </p>
              </div>
              <svg
                className="size-60 absolute -right-14 top-0 rotate-12 text-[#32CD32]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M6.67 14H4C2.9 14 2 14.9 2 16V21C2 21.55 2.45 22 3 22H6.67C7.22 22 7.67 21.55 7.67 21V15C7.67 14.45 7.22 14 6.67 14Z" fill="currentColor"/>
                <path d="M13.3302 10H10.6602C9.56016 10 8.66016 10.9 8.66016 12V21C8.66016 21.55 9.11016 22 9.66016 22H14.3302C14.8802 22 15.3302 21.55 15.3302 21V12C15.3302 10.9 14.4402 10 13.3302 10Z" fill="currentColor"/>
                <path d="M20.0001 17H17.3301C16.7801 17 16.3301 17.45 16.3301 18V21C16.3301 21.55 16.7801 22 17.3301 22H21.0001C21.5501 22 22.0001 21.55 22.0001 21V19C22.0001 17.9 21.1001 17 20.0001 17Z" fill="currentColor"/>
                <path d="M15.0095 4.85047C15.3195 4.54047 15.4395 4.17047 15.3395 3.85047C15.2395 3.53047 14.9295 3.30047 14.4895 3.23047L13.5295 3.07047C13.4895 3.07047 13.3995 3.00047 13.3795 2.96047L12.8495 1.90047C12.4495 1.09047 11.5395 1.09047 11.1395 1.90047L10.6095 2.96047C10.5995 3.00047 10.5095 3.07047 10.4695 3.07047L9.50945 3.23047C9.06945 3.30047 8.76945 3.53047 8.65945 3.85047C8.55945 4.17047 8.67945 4.54047 8.98945 4.85047L9.72945 5.60047C9.76945 5.63047 9.79945 5.75047 9.78945 5.79047L9.57945 6.71047C9.41945 7.40047 9.67945 7.71047 9.84945 7.83047C10.0195 7.95047 10.3895 8.11047 10.9995 7.75047L11.8995 7.22047C11.9395 7.19047 12.0695 7.19047 12.1095 7.22047L12.9995 7.75047C13.2795 7.92047 13.5095 7.97047 13.6895 7.97047C13.8995 7.97047 14.0495 7.89047 14.1395 7.83047C14.3095 7.71047 14.5695 7.40047 14.4095 6.71047L14.1995 5.79047C14.1895 5.74047 14.2195 5.63047 14.2595 5.60047L15.0095 4.85047Z" fill="currentColor"/>
                </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            <Card className="rounded-2xl dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700">
              <CardContent className="p-4 text-center">
                <Zap className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800 dark:text-[#fafafa]">
                  {userStats.totalXP.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                  Today's XP
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700">
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
            <Card className="rounded-2xl dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700">
              <CardContent className="p-4 text-center">
                <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800 dark:text-[#fafafa]">
                  #{userStats.position}
                </div>
                <div className="text-sm text-gray-600 dark:text-[#fafafa]/70 capitalize">
                  this week
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700">
              <CardContent className="p-4 text-center">
                <Globe className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800 dark:text-[#fafafa]">
                  27
                </div>
                <div className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                  Courses watched
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700">
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
            <Card className="rounded-2xl dark:bg-[#0d1117] border border-gray-300 dark:border-gray-700">
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
          <div className="w-full my-2">
            <ContributionGrid />
          </div>
    </div>
  );
}
