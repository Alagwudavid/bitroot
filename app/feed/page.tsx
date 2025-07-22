"use client";
/** @jsxImportSource @emotion/react */
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, TrendingUp, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/components/ui/use-mobile";
import { css } from "@emotion/react";

export default function MyFeed() {
  const isMobile = useIsMobile();
  const communities = [
    {
      name: "Swahili Learners",
      flag: "tz",
      members: 12500,
      posts: 1240,
      description: "Connect with fellow Swahili learners and native speakers",
      trending: true,
      moderators: "2",
    },
    {
      name: "Yoruba Culture & Language",
      flag: "ng",
      members: 8900,
      posts: 890,
      description:
        "Explore Yoruba traditions, language, and cultural practices",
      trending: false,
      moderators: "4",
    },
    {
      name: "Amharic Study Group",
      flag: "et",
      members: 5600,
      posts: 456,
      description: "Study Amharic together with structured learning sessions",
      trending: true,
      moderators: "1",
    },
    {
      name: "Hausa Language Exchange",
      flag: "ng",
      members: 7200,
      posts: 678,
      description: "Practice Hausa with native speakers and learners",
      trending: false,
      moderators: "6",
    },
    {
      name: "Igbo Heritage",
      flag: "ng",
      members: 4300,
      posts: 234,
      description:
        "Learn Igbo language while discovering rich cultural heritage",
      trending: false,
      moderators: "3",
    },
    {
      name: "Zulu Conversations",
      flag: "za",
      members: 6800,
      posts: 567,
      description: "Practice Zulu through daily conversations and discussions",
      trending: true,
      moderators: "30",
    },
  ];

  const postMetas = [
    {
      user: "Amara K.",
      avatar: "/placeholder-user.jpg",
      community: "Swahili Learners",
      title: "Daily Swahili Phrase: Hakuna Matata!",
      content:
        "Let's practice using this famous phrase in different contexts...",
      likes: 45,
      comments: 12,
      time: "2 hours ago",
    },
    // {
    //   user: "Kwame A.",
    //   avatar: "/placeholder-user.jpg",
    //   community: "Yoruba Culture & Language",
    //   title: "Understanding Yoruba Proverbs",
    //   content:
    //     'Today I learned a beautiful proverb: "Bi a ba n gun igi bi aja..."',
    //   likes: 32,
    //   comments: 8,
    //   time: "4 hours ago",
    // },
    // {
    //   user: "Desta M.",
    //   avatar: "/placeholder-user.jpg",
    //   community: "Amharic Study Group",
    //   title: "Weekly Challenge: Describe Your Day",
    //   content:
    //     "This week's challenge is to describe your daily routine in Amharic...",
    //   likes: 28,
    //   comments: 15,
    //   time: "1 day ago",
    // },
  ];

  return (
    <div className={cn("max-w-7xl w-full mx-auto flex flex-col bg-background text-foreground theme-aware", isMobile ? "absolute top-0 left-0 p-4 overflow-hidden overflow-y-auto h-screen" : "-mt-16 h-[calc(100vh-36px)]")}>
      <div className="h-12 w-full flex items-center justify-center relative">
        <div className="bg-transparent w-full max-w-xl mx-auto absolute top-0 z-50">
          <ul className="flex items-center space-x-6 text-sm text-gray-600 dark:text-[#fafafa] w-fit mx-auto">
            <li className="text-[#1e96fc] dark:hover:text-[#8ddeed] text-lg font-semibold flex flex-col items-center justify-center">
              <Link href="/feed">Following</Link>
              <span className="h-1 w-4 rounded-lg bg-gray-500 dark:bg-[#1e96fc]/70"></span>
            </li>
            <li className="hover:text-[#1e96fc] dark:hover:text-[#8ddeed] text-lg">
              <Link href="/explore">For you</Link>
            </li>
            <li className="hover:text-[#1e96fc] dark:hover:text-[#8ddeed] text-lg">
              <Link href="/notifications">Gallery</Link>
            </li>

          </ul>
        </div>
      </div>
      <div className={cn("flex items-center justify-center relative", isMobile ? "h-[calc(100vh-144px)]" : "h-[calc(100vh-56px)]")}>
        <div className="flex items-center justify-center gap-6 bg-gray-300 w-fit h-full relative mx-auto">
          <div className="w-full h-full bg-red-400 relative min-w-[520px] max-w-lg mx-auto">
          <Card className="absolute bottom-0 w-full rounded-none border-none !bg-transparent bg-gradient-to-t from-[#0d1117] to-transparent">
            <CardContent className="p-4 space-y-4">
              {postMetas.map((post, index) => (
                <div
                  key={index}
                  className=""
                >
                  <div className="flex items-start space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarImage
                        src={post.avatar || "/placeholder.svg"}
                        alt={post.user}
                      />
                      <AvatarFallback className="bg-[#a2d6f9] text-[#072ac8] dark:bg-[#7037e4] dark:text-[#fafafa]">
                        {post.user.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-sm text-gray-800 dark:text-[#fafafa]">
                          {post.user}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-[#fafafa]/60">
                          in {post.community}
                        </span>
                      </div>
                      <h4 className="font-medium text-sm text-gray-800 dark:text-[#fafafa] mb-1">
                        {post.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-[#fafafa]/70 mb-2">
                        {post.content}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-[#fafafa]/50">
                        <span>{post.likes} likes</span>
                        <span>{post.comments} comments</span>
                        <span>{post.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          </div>
          <div className={cn("bg-red-300/30 h-full w-14 ", isMobile ? "absolute top-0 right-0 overflow-hidden" : "relative")}>
            <div className="w-full flex flex-col gap-2 items-center justify-center" css={css`background:red;position:absolute;bottom:0;`}>
              <div css={css`background:grey;width:40px;height:40px;`}>1</div>
              <div css={css`background:grey;width:40px;height:40px;`}>2</div>
              <div css={css`background:grey;width:40px;height:40px;`}>3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
