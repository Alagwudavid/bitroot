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

// export const metadata = {
//   title: "About Us – My App",
//   description: "Learn more about our team and mission.",
// };

export default function MyFeed() {
  const [value, setValue] = useState(50);
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

  const Btd_ReelContainer = styled.section`
    display: flex;
    justify-content: center;
    height: calc(100vh - var(--btd-topheader));
    overflow: hidden scroll;
    scroll-snap-type: y mandatory;
    scroll-padding-top: 0;
    margin-top: var(--top-margin-free-scroll-override, 0px);
    scrollbar-width: none;
    -ms-overflow-style: none;
  `;
  const Btd_ReelSequence = styled.section`
    position: relative;
    width: fit-content;
    height: 100%;
    background: #fafafa;
    ${isMobile ?
      `
        min-width: 315px;
        min-height: 560px;
       `
      :
      `
      min-width: 354px;
        min-height: 629px;
        `
    }
    // min-width: 315px;
    // min-height: 560px;
    // max-width: 354px;
    // max-height: 629px;
    aspect-ratio: var(--btd-ratio);
    // margin-top: 6% !important;
    margin: 0 auto;
    contain: size layout;
    scroll-snap-align: start;
    scroll-snap-stop: always;
  `;

  const Btd_ReelPlayer = styled.section`
    display: flex;
    background: #f87171;
    width: 100%;
    height: 100%;
    position: relative;
    ${isMobile ?
      `
        min-width: 315px;
        min-height: 560px;
       `
      :
      `
      min-width: 354px;
        min-height: 629px;
        `
    }
    // max-width: 354px;
    // max-height: 629px;
    // min-width: 315px;
    // min-height: 560px;
  `;

  const Btd_ReelPlayer_EngagementPanel = styled.div`
    align-items: center;
    display: flexbox;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    pointer-events: auto;
    width: 62px;
    height: 100%;
    padding: 0 12px 0 12px;
  `;

  const Btd_ReelAction_Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const Btd_ReelAction_Btn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
  `;
    const Btd_ReelAction_Span = styled.span`
    font-size: 14px;
    line-height: 1.5;
  `;
  return (
    <div className={cn(
      "max-w-7xl w-full h-full mx-auto flex flex-col", 
      )}>
        <Btd_ReelContainer>
          <div className={cn("flex flex-col space-y-3 relative overflow-hidden w-full overflow-y-scroll shrink-0", 
            // isMobile ? "h-[calc(100vh-220px)]" : "h-[calc(100vh-26px)]"
            )}>
            {postMetas.map((post, index) => (
              <Btd_ReelSequence key={index} id={`${index}`} >
                <div className="flex items-center gap-6 h-full shrink-0 relative">
                  <div className="flex-1 flex w-fit h-full bg-black relative rounded-xl">
                    <Btd_ReelPlayer className="rounded-xl"></Btd_ReelPlayer>
                    <a className="absolute inset-0 z-10 group/Btd_ReelPlayer_ rounded-xl overflow-hidden">
                      <div className="relative w-full h-full">
                        <div className="absolute h-14 top-0 z-20 group-hover/Btd_ReelPlayer_:flex hidden items-center justify-between w-full px-4 !bg-transparent bg-gradient-to-b from-[#0d1117] to-transparent transition-all duration-500 ease-in">
                          <Btd_ReelAction_Btn className="!w-8 !h-8 items-center justify-center text-white hover:text-sky-300">
                            <VolumeX className="size-8" />
                          </Btd_ReelAction_Btn>
                          <Btd_ReelAction_Btn className="!w-8 !h-8 flex items-center justify-center text-white hover:text-sky-300">
                            <Ellipsis className="size-8" />
                          </Btd_ReelAction_Btn>
                        </div>
                          <Btd_ReelAction_Btn className="group-hover/Btd_ReelPlayer_:!flex !hidden backdrop-blur-md bg-[#0d1117]/20 dark:bg-[#0d1117]/70 dark:hover:bg-[#0d1117] rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hover:text-sky-300 transition-all duration-500 ease-in">
                            <Play className="size-8" />
                          </Btd_ReelAction_Btn>
                      </div>
                    </a>
                    <Card className="absolute bottom-0 z-20 w-full rounded-b-xl border-none !bg-transparent bg-gradient-to-t from-[#0d1117] to-transparent overflow-hidden">
                      <CardContent className="p-0 space-y-4">
                          <div className="">
                            <div className="flex flex-col items-start space-y-1">
                              <div className="flex items-start space-x-2 px-2 w-full">
                                <Btd_ReelAction_Btn className="!w-10 !h-10 rounded-full backdrop-blur-md bg-[#0d1117]/20 dark:bg-[#0d1117]/70 dark:hover:bg-[#0d1117]">
                                  <Avatar className="w-full h-full">
                                    <AvatarImage
                                      src={post.avatar || "/placeholder.svg"}
                                      alt={post.user}
                                    />
                                    <AvatarFallback className="bg-[#a2d6f9] text-[#072ac8] dark:bg-[#7037e4] dark:text-[#fafafa]">
                                      {post.user.charAt(0)}
                                    </AvatarFallback>
                                  </Avatar>
                                </Btd_ReelAction_Btn>
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
                                <p className="text-base text-white mb-2 line-clamp-2 px-2">
                                  {post.content}
                                </p>
                                <div className="flex flex-col space-y-2 text-xs text-gray-500 dark:text-[#fafafa]/50">
                                  <div className="flex items-center space-x-3 px-2">
                                    <Btd_ReelAction_Div>
                                      <Btd_ReelAction_Btn className="!w-5 !h-5 rounded overflow-hidden backdrop-blur-md bg-[#0d1117]/20 dark:bg-[#0d1117]/70 dark:hover:bg-[#0d1117]">
                                        <img className="w-full h-full text-white" src="/images/happy_beet.jpg" alt="Follow" />
                                      </Btd_ReelAction_Btn>
                                    </Btd_ReelAction_Div>
                                    <span className="text-sm text-white hover:text-sky-300 mb-1 line-clamp-1">
                                      {post.audio}
                                    </span>
                                  </div>
                                  <input type="range" min={1} max={100} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full rounded-xl h-1.5" />
                                </div>
                              </div>
                            </div>
                          </div>
                      </CardContent>
                    </Card>
                  </div>
                  <Btd_ReelPlayer_EngagementPanel className={cn("", isMobile ? "absolute top-0 right-0 overflow-hidden" : "relative")}>
                    <div className="w-full flex flex-col gap-2 items-center justify-center">
                      <Btd_ReelAction_Div>
                        <Btd_ReelAction_Btn className="rounded-full backdrop-blur-md bg-[#0d1117]/20 dark:bg-[#0d1117]/70 dark:hover:bg-[#0d1117]">
                          <Heart className="size-6" />
                        </Btd_ReelAction_Btn>
                        <Btd_ReelAction_Span className="text-black dark:text-white">{post.likes}</Btd_ReelAction_Span>
                      </Btd_ReelAction_Div>
                      <Btd_ReelAction_Div>
                        <Btd_ReelAction_Btn className="rounded-full backdrop-blur-md bg-[#0d1117]/20 dark:bg-[#0d1117]/70 dark:hover:bg-[#0d1117]">
                          <MessageCircleMore className="size-6" />
                        </Btd_ReelAction_Btn>
                        <Btd_ReelAction_Span className="text-black dark:text-white">{post.comments}</Btd_ReelAction_Span>
                      </Btd_ReelAction_Div>
                      <Btd_ReelAction_Div>
                        <Btd_ReelAction_Btn className="rounded-full backdrop-blur-md bg-[#0d1117]/20 dark:bg-[#0d1117]/70 dark:hover:bg-[#0d1117]">
                          <Bookmark className="size-6" />
                        </Btd_ReelAction_Btn>
                        <Btd_ReelAction_Span className="text-black dark:text-white">{post.shares}</Btd_ReelAction_Span>
                      </Btd_ReelAction_Div>
                    </div>
                    <div className="h-40 w-full">
                    </div>
                  </Btd_ReelPlayer_EngagementPanel>
                </div>
              </Btd_ReelSequence>
            ))}
          </div>
        </Btd_ReelContainer>
        <div className={cn("w-16 justify-end absolute bottom-1/2 right-8 overflow-hidden", isMobile ? "hidden" : "flex flex-col")}>
          <div className="w-full flex flex-col gap-2 items-center justify-center">
            <Btd_ReelAction_Div>
              <Btd_ReelAction_Btn className="rounded-full backdrop-blur-md bg-[#0d1117]/30 dark:bg-white/30">
                <ChevronUp className="size-6" />
              </Btd_ReelAction_Btn>
            </Btd_ReelAction_Div>
            <Btd_ReelAction_Div>
              <Btd_ReelAction_Btn className="rounded-full backdrop-blur-md bg-[#0d1117]/30 dark:bg-white/30">
                <ChevronDown className="size-6" />
              </Btd_ReelAction_Btn>
            </Btd_ReelAction_Div>
          </div>
        </div>
    </div>
  );
}
