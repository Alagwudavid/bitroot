"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Plus, Camera, TrendingUp, Users, Globe, Crown, Medal, Award,
    ChevronUp, ChevronDown, Swords, LibraryBig, Compass, UsersRound,
    Headphones, Play, RefreshCcw, BookOpen, MessagesSquareIcon
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import PostCard from "@/components/PostCard";
import { CreatePostModal } from "@/components/CreatePostModal";
import { socialLearningPosts } from "@/data/social-learning";
import { defaultCustomFeeds, getFeedByName, filterPostsByFeed } from "@/data/custom-feeds";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/components/ui/use-mobile";
import { useIsTablet } from "@/components/ui/use-tablet";
import { TabsSwitcher } from "@/components/ui/tabs-switcher";
import Link from "next/link";
import { Dot } from "@/components/ui/dot";


const HomeClient = () => {
    const [selectedFeed, setSelectedFeed] = useState("All Posts");
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    // Get selected feed data and filter posts
    const selectedFeedData = getFeedByName(selectedFeed);
    const filteredPosts = selectedFeedData
        ? filterPostsByFeed(socialLearningPosts, selectedFeedData)
        : socialLearningPosts;

    return (
        <div className="min-h-screen bg-background">
            <div className="flex">
                {/* Main Content */}
                <main className={cn("flex-1 relative", !isTablet && "ml-0")}>
                    <div className="max-w-xl mx-auto">
                        {/* Custom Feed Selector */}
                        <div className="max-w-2xl flex items-center justify-center mx-auto">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="cool"
                                        className="flex items-center gap-2 px-4 py-2 text-left justify-start hover:bg-muted/50 text-foreground font-medium"
                                    >
                                        <span className="text-base font-semibold">{selectedFeed}</span>
                                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    className="w-64 bg-muted border-0 shadow-lg rounded-3xl p-2"
                                    align="start"
                                    sideOffset={8}
                                >
                                    <DropdownMenuLabel className="px-3 py-2 text-sm font-semibold text-foreground flex flex-row items-center justify-between">
                                        <span>Feeds</span>
                                        <button className="text-muted-foreground hover:text-foreground">
                                            <Plus className="size-4 shrink-0" />
                                        </button>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator className="my-1" />
                                    <div className="space-y-1">
                                        {defaultCustomFeeds.map((feed) => (
                                            <DropdownMenuItem
                                                key={feed.name}
                                                onClick={() => setSelectedFeed(feed.name)}
                                                className={`px-3 py-2 rounded-lg cursor-pointer transition-colors ${selectedFeed === feed.name
                                                    ? "bg-accent text-accent-foreground"
                                                    : "hover:bg-accent/50"
                                                    }`}
                                            >
                                                <div className="flex flex-col gap-1">
                                                    <span className="font-medium text-sm">{feed.name}</span>
                                                </div>
                                            </DropdownMenuItem>
                                        ))}
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="p-4 mb-4 max-w-2xl flex items-center justify-center mx-auto">
                            <Card className="w-full p-3 rounded-3xl mx-auto">
                                <div className="flex items-center justify-between space-x-3">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src="/placeholder-user1.png" alt="You" />
                                        <AvatarFallback className="bg-threads-primary text-primary-foreground">
                                            You
                                        </AvatarFallback>
                                    </Avatar>
                                    <Button
                                        variant="ghost"
                                        onClick={() => setIsCreateModalOpen(true)}
                                        className="flex-1 justify-start text-left text-muted-foreground hover:text-foreground hover:bg-threads-hover h-12 px-4"
                                    >
                                        Share your learning progress...
                                    </Button>
                                    <Button
                                        variant="outline"
                                        onClick={() => setIsCreateModalOpen(true)}
                                        className="px-4 w-14"
                                    >
                                        Post
                                    </Button>
                                </div>
                            </Card>
                        </div>
                        {/* Filter Header */}
                        {selectedFeed !== "All Posts" && (
                            <div className={cn(
                                "mb-4 max-w-2xl mx-auto",
                                isTablet ? "px-4" : "px-0 pt-4"
                            )}>
                                <div className="flex items-center space-x-2">
                                    <div
                                        className="p-1 px-2 rounded-md bg-accent text-accent-foreground text-xs font-semibold flex items-center"
                                    >
                                        <div className="text-sm mr-1">
                                            {selectedFeedData?.icon}
                                        </div>
                                        {selectedFeedData?.name}
                                    </div>
                                    <span className="text-muted-foreground text-sm">
                                        {filteredPosts.length} posts
                                    </span>
                                </div>
                                <div className="mt-2 text-sm text-muted-foreground flex items-center flex-wrap gap-1">
                                    {selectedFeedData?.filters.categories && selectedFeedData.filters.categories.length > 0 && (
                                        <span className="flex items-center gap-1">Categories: {selectedFeedData.filters.categories.join(", ")} </span>
                                    )}
                                    {selectedFeedData?.filters.postTypes && selectedFeedData.filters.postTypes.length > 0 && (
                                        <span>Types: {selectedFeedData.filters.postTypes.join(", ")}</span>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Posts Feed */}
                        <div className={"space-y-6 max-w-2xl mx-auto"}>
                            {filteredPosts.map((post) => (
                                <PostCard
                                    key={post.id}
                                    post={post}
                                />
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="p-4 text-center max-w-xl mx-auto">
                            <Button variant="cool" className="text-muted-foreground hover:text-foreground">
                                Load more posts
                            </Button>
                        </div>
                    </div>
                    <div className="fixed bottom-20 md:bottom-8 right-8 flex justify-center">
                        <Button variant="outline" onClick={() => setIsCreateModalOpen(true)} className="text-muted-foreground hover:text-foreground p-6 font-bold border-2">
                            <Plus className="!size-8 shrink-0" />
                        </Button>
                    </div>
                </main>
            </div>

            {/* Create Post Modal */}
            <CreatePostModal
                open={isCreateModalOpen}
                onOpenChange={setIsCreateModalOpen}
            />
        </div>
    );
};

export default HomeClient;
