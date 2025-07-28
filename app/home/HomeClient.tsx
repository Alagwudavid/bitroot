"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Camera, TrendingUp, Users, Globe, Crown, Medal, Award, ChevronUp, ChevronDown, Swords, LibraryBig, Compass, UsersRound, Headphones, Play, RefreshCcw, BookOpen, MessagesSquareIcon } from "lucide-react";
import PostCard from "@/components/PostCard";
import { CreateSocialPostModal } from "@/components/CreateSocialPostModal";
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
                <main className={cn("flex-1", !isTablet && "ml-0")}>
                    <div className="max-w-4xl mx-auto">

                        <Card className="p-3 mb-4 rounded-3xl max-w-xl mx-auto">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
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
                                </div>
                                <Select value={selectedFeed} onValueChange={setSelectedFeed}>
                                    <SelectTrigger className="w-40 border-none focus-within:border-none focus:border-none focus:ring-0">
                                        <SelectValue className="flex !gap-1 items-center" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {defaultCustomFeeds.map((feed) => (
                                            <SelectItem key={feed.name} value={feed.name}>
                                                <div className="flex items-center space-x-1">
                                                    <div className="size-5 rounded-full flex items-center justify-center text-white text-sm">
                                                        {feed.icon}
                                                    </div>
                                                    <span className="line-clamp-1">{feed.name}</span>
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </Card>

                        {/* Filter Header */}
                        {selectedFeed !== "All Posts" && (
                            <div className={cn(
                                "mb-4 max-w-xl mx-auto",
                                isTablet ? "px-4" : "px-0 pt-4"
                            )}>
                                <div className="flex items-center space-x-2">
                                    <div
                                        className="p-1 px-2 rounded text-white text-xs font-semibold flex items-center bg-[#8A2BE2]"
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
                        <div className={"space-y-6 max-w-xl mx-auto"}>
                            {filteredPosts.map((post) => (
                                <PostCard
                                    key={post.id}
                                    post={post}
                                />
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="p-4 text-center max-w-xl mx-auto">
                            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                                Load more posts
                            </Button>
                        </div>
                    </div>
                </main>
            </div>

            {/* Create Post Modal */}
            <CreateSocialPostModal
                open={isCreateModalOpen}
                onOpenChange={setIsCreateModalOpen}
            />
        </div>
    );
};

export default HomeClient;
