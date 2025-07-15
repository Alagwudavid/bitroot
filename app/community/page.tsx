"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, TrendingUp, Globe } from "lucide-react";

export default function CommunityPage() {
  const communities = [
    {
      name: "Swahili Learners",
      flag: "tz",
      members: 12500,
      posts: 1240,
      description: "Connect with fellow Swahili learners and native speakers",
      trending: true,
      recentActivity: "2 hours ago",
    },
    {
      name: "Yoruba Culture & Language",
      flag: "ng",
      members: 8900,
      posts: 890,
      description:
        "Explore Yoruba traditions, language, and cultural practices",
      trending: false,
      recentActivity: "4 hours ago",
    },
    {
      name: "Amharic Study Group",
      flag: "et",
      members: 5600,
      posts: 456,
      description: "Study Amharic together with structured learning sessions",
      trending: true,
      recentActivity: "1 hour ago",
    },
    {
      name: "Hausa Language Exchange",
      flag: "ng",
      members: 7200,
      posts: 678,
      description: "Practice Hausa with native speakers and learners",
      trending: false,
      recentActivity: "6 hours ago",
    },
    {
      name: "Igbo Heritage",
      flag: "ng",
      members: 4300,
      posts: 234,
      description:
        "Learn Igbo language while discovering rich cultural heritage",
      trending: false,
      recentActivity: "3 hours ago",
    },
    {
      name: "Zulu Conversations",
      flag: "za",
      members: 6800,
      posts: 567,
      description: "Practice Zulu through daily conversations and discussions",
      trending: true,
      recentActivity: "30 minutes ago",
    },
  ];

  const recentPosts = [
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
    {
      user: "Kwame A.",
      avatar: "/placeholder-user.jpg",
      community: "Yoruba Culture & Language",
      title: "Understanding Yoruba Proverbs",
      content:
        'Today I learned a beautiful proverb: "Bi a ba n gun igi bi aja..."',
      likes: 32,
      comments: 8,
      time: "4 hours ago",
    },
    {
      user: "Desta M.",
      avatar: "/placeholder-user.jpg",
      community: "Amharic Study Group",
      title: "Weekly Challenge: Describe Your Day",
      content:
        "This week's challenge is to describe your daily routine in Amharic...",
      likes: 28,
      comments: 15,
      time: "1 day ago",
    },
  ];

  return (
    <div className="p-6 mb-16 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-[#fafafa] mb-2">
          Language Communities
        </h1>
        <p className="text-gray-600 dark:text-[#fafafa]/70">
          Connect with learners and native speakers from around the world
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Communities Grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {communities.map((community) => (
              <Card
                key={community.name}
                className="rounded-2xl hover:shadow-lg dark:bg-[#0d1117] dark:border-gray-700 dark:hover:border-[#7037e4] transition-all duration-200"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] text-white group-hover:bg-[#1e96fc] dark:group-hover:bg-[#8ddeed] dark:group-hover:text-[#030318] flex items-center justify-center">
                        <img
                          src={`/flag/${community.flag}.png`}
                          alt={`${community.flag} flag`}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      {/* <span className="text-2xl">{community.flag}</span> */}
                      <div>
                        <CardTitle className="text-lg dark:text-[#fafafa]">
                          {community.name}
                        </CardTitle>
                        {community.trending && (
                          <Badge className="bg-[#fcf300] text-[#072ac8] dark:bg-[#8ddeed] dark:text-[#030318] hover:bg-[#ffc600] dark:hover:bg-[#8ddeed]/80 rounded-full">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-[#fafafa]/70 text-sm mb-4">
                    {community.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-[#fafafa]/60">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{community.members.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{community.posts}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 dark:text-[#fafafa]/50">
                      Active {community.recentActivity}
                    </span>
                    <Button
                      size="sm"
                      className="rounded-xl bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] text-white"
                    >
                      Join Community
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Recent Activity Sidebar */}
        <div className="lg:col-span-1">
          <Card className="rounded-2xl dark:bg-[#0d1117] dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-[#1e96fc] dark:text-[#8ddeed]" />
                <span className="dark:text-[#fafafa]">Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentPosts.map((post, index) => (
                <div
                  key={index}
                  className="border-b border-gray-100 dark:border-[#7037e4]/20 last:border-b-0 pb-4 last:pb-0"
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
      </div>
    </div>
  );
}
