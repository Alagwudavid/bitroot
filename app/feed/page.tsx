"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Ellipsis, TrendingUp, Globe, Heart, MessageCircleMore, Bookmark, ChevronUp, ChevronDown, Play, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/components/ui/use-mobile";
import styled from "@emotion/styled";

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
      audio: "Daily Swahili Phrase: Hakuna Matata!",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur rerum error placeat blanditiis ipsa facere perspiciatis sed animi ducimus facilis natus veritatis eos doloribus velit inventore officia, recusandae laboriosam repellendus.",
      likes: 45,
      comments: 12,
      shares: 3,
      time: "2 hours ago",
    },
    {
      user: "Kwame A.",
      avatar: "/placeholder-user.jpg",
      community: "Yoruba Culture & Language",
      audio: "Understanding Yoruba Proverbs",
      content:
        'Today I learned a beautiful proverb: "Bi a ba n gun igi bi aja..."',
      likes: 32,
      comments: 8,
      shares: 6,
      time: "4 hours ago",
    },
    {
      user: "Desta M.",
      avatar: "/placeholder-user.jpg",
      community: "Amharic Study Group",
      audio: "Weekly Challenge: Describe Your Day",
      content:
        "This week's challenge is to describe your daily routine in Amharic...",
      likes: 28,
      comments: 15,
      shares: 9,
      time: "1 day ago",
    },
  ];

  const ReelActionDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
  `;
  const ReelActionBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
  `;
    const ReelActionSpan = styled.span`
    font-size: 14px;
    line-height: 1.5;
  `;

  return (
    <div className={cn("max-w-7xl w-full mx-auto flex flex-col bg-background text-foreground theme-aware", isMobile ? "absolute top-0 left-0 p-4 overflow-hidden overflow-y-auto h-screen" : "-mt-16 h-[calc(100vh-36px)]")}>
      {/* <div className="h-10 w-full shrink-0 flex items-center justify-center relative">
        <div className="bg-transparent w-full mx-auto">
          <ul className="flex items-center space-x-6 text-sm text-gray-600 dark:text-[#fafafa] w-fit mx-auto absolute top-0 z-50">
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
      </div> */}
      <div className={cn("flex flex-col relative overflow-hidden w-full overflow-y-hidden shrink-0", isMobile ? "h-[calc(100vh-220px)]" : "h-[calc(100vh-26px)]")}>
        {postMetas.map((post, index) => (
          <section key={index} className="flex items-center justify-center gap-6 h-full shrink-0 relative mx-auto">
            <div className="flex items-center justify-center w-full h-fit bg-red-400 relative min-w-[420px] rounded-xl overflow-hidden max-w-lg mx-auto">
              <canvas width={420} height={640}></canvas>
              <a className="absolute inset-0 z-10 group/ReelPlayer">
                <div className="relative h-full">
                  {/* Top bar (hidden by default) */}
                  <div className="absolute h-10 top-0 z-20 group-hover/ReelPlayer:flex hidden items-center justify-between w-full px-4 !bg-transparent bg-gradient-to-b from-[#0d1117] to-transparent">
                    <ReelActionBtn className="!w-8 !h-8 items-center justify-center text-white hover:text-sky-300">
                      <VolumeX className="size-5" />
                    </ReelActionBtn>
                    <ReelActionBtn className="!w-8 !h-8 flex items-center justify-center text-white hover:text-sky-300">
                      <Ellipsis className="size-5" />
                    </ReelActionBtn>
                  </div>
                    <ReelActionBtn className="group-hover/ReelPlayer:!flex !hidden backdrop-blur-md bg-white/30 dark:bg-[#0d1117]/30 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hover:text-sky-300">
                      <Play className="size-8" />
                    </ReelActionBtn>
                </div>
              </a>
              <Card className="absolute bottom-0 z-20 w-full rounded-none border-none !bg-transparent bg-gradient-to-t from-[#0d1117] to-transparent">
                <CardContent className="p-4 space-y-4">
                    <div className="">
                      <div className="flex flex-col items-start space-y-3">
                        <div className="flex items-start space-x-3">
                          <ReelActionBtn className="!w-10 !h-10 rounded-full backdrop-blur-md bg-white/30 dark:bg-[#0d1117]/30">
                            <Avatar className="w-full h-full">
                              <AvatarImage
                                src={post.avatar || "/placeholder.svg"}
                                alt={post.user}
                              />
                              <AvatarFallback className="bg-[#a2d6f9] text-[#072ac8] dark:bg-[#7037e4] dark:text-[#fafafa]">
                                {post.user.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                          </ReelActionBtn>
                          <div className="flex flex-col items-start">
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-sm text-white">
                                {post.user}
                              </span>
                              <span className="text-xs text-white">
                                in {post.community}
                              </span>
                            </div>
                            <span className="text-xs text-white mb-1">{post.time}</span>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-base text-white mb-2 line-clamp-2">
                            {post.content}
                          </p>
                          <div className="flex flex-col space-y-4 text-xs text-gray-500 dark:text-[#fafafa]/50">
                            <div className="flex items-center space-x-3">
                              <ReelActionDiv>
                                <ReelActionBtn className="!w-5 !h-5 rounded overflow-hidden backdrop-blur-md bg-white/30 dark:bg-[#0d1117]/30">
                                  <img className="w-full h-full text-white" src="/images/happy_beet.jpg" alt="Follow" />
                                </ReelActionBtn>
                              </ReelActionDiv>
                              <span className="text-sm text-white hover:text-sky-300 mb-1 line-clamp-1">
                                {post.audio}
                              </span>
                            </div>
                            <progress value={35} max={100} className="w-full rounded-xl h-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                </CardContent>
              </Card>
            </div>
            <div className={cn("h-full w-16 flex flex-col justify-end", isMobile ? "absolute top-0 right-0 overflow-hidden" : "relative")}>
              <div className="w-full flex flex-col gap-2 items-center justify-center">
                <ReelActionDiv>
                  <ReelActionBtn className="rounded-full backdrop-blur-md bg-white/30 dark:bg-[#0d1117]/30">
                    <Heart className="size-6 text-white" />
                  </ReelActionBtn>
                  <ReelActionSpan className="text-black dark:text-white">{post.likes}</ReelActionSpan>
                </ReelActionDiv>
                <ReelActionDiv>
                  <ReelActionBtn className="rounded-full backdrop-blur-md bg-white/30 dark:bg-[#0d1117]/30">
                    <MessageCircleMore className="size-6 text-white" />
                  </ReelActionBtn>
                  <ReelActionSpan className="text-black dark:text-white">{post.comments}</ReelActionSpan>
                </ReelActionDiv>
                <ReelActionDiv>
                  <ReelActionBtn className="rounded-full backdrop-blur-md bg-white/30 dark:bg-[#0d1117]/30">
                    <Bookmark className="size-6 text-white" />
                  </ReelActionBtn>
                  <ReelActionSpan className="text-black dark:text-white">{post.shares}</ReelActionSpan>
                </ReelActionDiv>
              </div>
              <div className="h-40 w-full">
              </div>
            </div>
          </section>
        ))}
        <div className={cn("w-16 justify-end absolute bottom-1/2 right-8 overflow-hidden", isMobile ? "hidden" : "flex flex-col")}>
          <div className="w-full flex flex-col gap-2 items-center justify-center">
            <ReelActionDiv>
              <ReelActionBtn className="rounded-full backdrop-blur-md bg-[#0d1117]/30 dark:bg-white/30">
                <ChevronUp className="size-6 text-white" />
              </ReelActionBtn>
            </ReelActionDiv>
            <ReelActionDiv>
              <ReelActionBtn className="rounded-full backdrop-blur-md bg-[#0d1117]/30 dark:bg-white/30">
                <ChevronDown className="size-6 text-white" />
              </ReelActionBtn>
            </ReelActionDiv>
          </div>
        </div>
      </div>
    </div>
  );
}
