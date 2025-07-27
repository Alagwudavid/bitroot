"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Camera, TrendingUp, Users, Globe, Crown, Medal, Award, ChevronUp, ChevronDown, Swords, Flame, Compass, UsersRound, Headphones, Play, RefreshCcw } from "lucide-react";
import { LanguagePost } from "@/components/LanguagePost";
import { CreateLanguagePostModal } from "@/components/CreateLanguagePostModal";
import { languagePosts } from "@/data/posts";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/components/ui/use-mobile";
import { useIsTablet } from "@/components/ui/use-tablet";
import { TabsSwitcher } from "@/components/ui/tabs-switcher";
import Link from "next/link"

const languages = [
  { name: "All Languages", flag: "ea", color: "#6B73FF" },
  { name: "Spanish", flag: "es", color: "#FF6B35" },
  { name: "French", flag: "fr", color: "#4A90E2" },
  { name: "German", flag: "de", color: "#F39C12" },
  { name: "Italian", flag: "it", color: "#27AE60" },
  { name: "Portuguese", flag: "pt", color: "#8E44AD" },
  { name: "Japanese", flag: "jp", color: "#E74C3C" },
  { name: "Korean", flag: "kr", color: "#3498DB" },
  { name: "Chinese", flag: "cn", color: "#E67E22" },
];

const Home = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All Languages");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const filteredPosts = selectedLanguage === "All Languages" 
    ? languagePosts 
    : languagePosts.filter(post => post.language.name === selectedLanguage);

  const selectedLang = languages.find(lang => lang.name === selectedLanguage);

  const leaderboard = [
    { rank: 1, name: "Elena Rodriguez", avatar: "/placeholder-user1.png", xp: 15420, status: "" },
    { rank: 2, name: "Marcus Chen", avatar: "/placeholder-user.jpg", xp: 14890, status: "" },
    { rank: 3, name: "Sophie Laurent", avatar: "/placeholder-user1.png", xp: 13245, status: "" },
    { rank: 4, name: "Ahmed Hassan", avatar: "/placeholder-user.jpg", xp: 12670, status: "promoted" },
    { rank: 5, name: "Yuki Tanaka", avatar: "/placeholder-user1.png", xp: 11955, status: "demoted" },
    { rank: 6, name: "You", avatar: "/placeholder-user1.png", xp: 8420, status: "demoted" }
  ];

  const tabs = [
    { value: "Home", label: "Feed", placeholder: <RefreshCcw className="size-4" />, link: "/home" },
    { value: "Community", label: "Community", placeholder: <UsersRound className="size-4" />, link: "/community" },
    { value: "Watch", label: "Watch", placeholder: <Play className="size-4" />, link: "/explore/animations" },
    { value: "Explore", label: "Explore", placeholder: <Compass className="size-4" />, link: "/explore" },
    { value: "Listen", label: "Listen", placeholder: <Headphones className="size-4" />, link: "/explore/listen" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Language Sidebar - Large screens only */}
        {!isTablet && (
          <aside className="w-80 bg-card h-full overflow-y-auto">
            <div className="p-4 space-y-6">
              {/* Leaderboard */}
              <Link href={"/"} className="relative overflow-hidden bg-[#EEEDEC] dark:bg-[#0d1117] flex flex-col items-start justify-start w-full p-5 font-mono rounded-3xl theme-aware border border-gray-300 dark:border-gray-700">
                <p className="text-xl font-semibold">
                  Clash Squad
                </p>
                <Swords className="size-6" />
                <div className="mt-4 flex flex-row justify-between gap-2 w-full">
                    <img src="/placeholder-user.jpg" alt="Mascot" className="w-14 h-14 rounded-lg bg-[#23263a] border-2" />
                    <img src="/placeholder-user.jpg" alt="Mascot" className="w-14 h-14 rounded-lg bg-[#23263a] border-2" />
                </div>
              </Link>
              {/* Top player */}
              <Link href={"/"} className="relative overflow-hidden bg-[#EEEDEC] dark:bg-[#0d1117] flex flex-col items-start justify-start w-full p-5 font-mono rounded-3xl theme-aware border border-gray-300 dark:border-gray-700">
                <div className="mt-4 flex flex-row justify-between gap-2 w-full">
                <p className="text-xl font-semibold">
                  Top Games 
                  for the
                  week
                </p>
                <Swords className="size-6" />
                </div>
                <div className="mt-4 flex flex-row justify-between gap-2 w-full">
                    <img src="/placeholder-user.jpg" alt="Mascot" className="w-14 h-14 rounded-lg bg-[#23263a] border-2" />
                    <img src="/placeholder-user.jpg" alt="Mascot" className="w-14 h-14 rounded-lg bg-[#23263a] border-2" />
                </div>
              </Link>
              <>
                <Card className="relative overflow-hidden bg-[#EEEDEC] dark:bg-[#0d1117] flex flex-col items-start w-full p-5 font-mono rounded-3xl theme-aware border border-gray-300 dark:border-gray-700">
                    <h2 className="text-lg font-semibold mb-4">Leaderboard</h2>
                    {leaderboard.slice(0, 5).map((user) => (
                      <div
                        key={user.rank}
                        className="flex items-center space-x-3 p-3 mb-2 last:mb-0 w-full rounded-lg bg-gradient-to-r from-threads-primary/5 to-threads-secondary/5 border border-threads-primary/10"
                      >
                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-threads-primary/20 text-threads-primary text-base font-bold">
                          {user.rank === 1 && <Crown className="size-5 text-[#FBBF24]" />}
                          {user.rank === 2 && <Medal className="size-5 text-[#2563EB]" />}
                          {user.rank === 3 && <Award className="size-5 text-[#8B5CF6]" />}
                          {user.rank > 3 && user.rank}
                        </div>
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={user.avatar} alt={user.name} />
                          <AvatarFallback className="text-xs">{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-1">
                            <p className="text-sm font-medium text-foreground truncate">{user.name}</p>
                          </div>
                          <p className="text-xs text-muted-foreground">{user.xp.toLocaleString()} XP</p>
                        </div>
                            {user.status === "promoted" && <ChevronUp className="size-5 text-green-500" />}
                            {user.status === "demoted" && <ChevronDown className="size-5 text-red-500" />}
                      </div>
                    ))}
                    
                    {/* Separator */}
                    <div className="flex items-center space-x-2 px-3 py-2 w-full">
                      <div className="flex-1 h-px bg-border"></div>
                      <span className="text-xs text-muted-foreground font-medium">LOSING</span>
                      <div className="flex-1 h-px bg-border"></div>
                    </div>
                    
                    {/* 6th place - Not qualifying */}
                    <div className="flex items-center space-x-3 p-3 w-full rounded-lg bg-muted/50 border border-muted">
                      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold">
                        6
                      </div>
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={leaderboard[5].avatar} alt={leaderboard[5].name} />
                        <AvatarFallback className="text-xs">You</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-1">
                          <p className="text-sm font-medium text-muted-foreground">{leaderboard[5].name}</p>
                        </div>
                        <p className="text-xs text-muted-foreground">{leaderboard[5].xp.toLocaleString()} XP</p>
                      </div>
                          {leaderboard[5].status === "promoted" && <ChevronUp className="size-5 text-green-500" />}
                          {leaderboard[5].status === "demoted" && <ChevronDown className="size-5 text-red-500" />}
                    </div>
                </Card>
              </>
            </div>

          </aside>
        )}

        {/* Main Content */}
        <main className={cn("flex-1", !isTablet && "ml-0")}>
          <div className="max-w-4xl mx-auto">
            <TabsSwitcher
              tabs={tabs}
              className="mb-4 max-w-xl mx-auto"
            />

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
                        I made some progress...
                      </Button>
                    </div>
                    <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                      <SelectTrigger className="w-48 border-none focus-within:border-none focus:border-none focus:ring-0">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((lang) => (
                          <SelectItem key={lang.name} value={lang.name}>
                            <div className="flex items-center space-x-2">
                              <div className="w-8 h-8 rounded-full mr-2 overflow-hidden bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] text-white group-hover:bg-[#1e96fc] dark:group-hover:bg-[#8ddeed] dark:group-hover:text-[#030318] flex items-center justify-center">
                                <img
                                  src={`/flag/${lang.flag}.png`}
                                  alt={`${lang.name} flag`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <span>{lang.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
            </Card>

            {/* Filter Header */}
            {selectedLanguage !== "All Languages" && (
              <div className={cn(
                "mb-4 max-w-xl mx-auto",
                isTablet ? "px-4" : "px-4 pt-4"
              )}>
                <div className="flex items-center space-x-2">
                  <div 
                    className="p-1 rounded-full text-white text-sm font-medium flex items-center"
                    style={{ backgroundColor: selectedLang?.color }}
                  >
                        <div className="w-5 h-5 rounded-full mr-2 overflow-hidden bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] text-white group-hover:bg-[#1e96fc] dark:group-hover:bg-[#8ddeed] dark:group-hover:text-[#030318] flex items-center justify-center">
                          <img
                            src={`/flag/${selectedLang?.flag}.png`}
                            alt={`${selectedLang?.name} flag`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                         {selectedLang?.name}
                  </div>
                  <span className="text-muted-foreground text-sm">
                    {filteredPosts.length} posts
                  </span>
                </div>
              </div>
            )}

            {/* Posts Feed */}
            <div className={"space-y-6 max-w-xl mx-auto"}>
              {filteredPosts.map((post) => (
                <LanguagePost
                  key={post.id}
                  id={post.id}
                  author={post.author}
                  content={post.content}
                  language={post.language}
                  community={post.community}
                  media={post.media}
                  caption={post.caption}
                  timestamp={post.timestamp}
                  likes={post.likes}
                  comments={post.comments}
                  shares={post.shares}
                  impressions={post.impressions}
                  tags={post.tags}
                  liked={post.liked}
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
      <CreateLanguagePostModal
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
      />
    </div>
  );
};

export default Home;