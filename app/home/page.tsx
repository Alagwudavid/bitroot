"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Camera, TrendingUp, Users, Globe } from "lucide-react";
import { LanguagePost } from "@/components/LanguagePost";
import { CreateLanguagePostModal } from "@/components/CreateLanguagePostModal";
import { languagePosts } from "@/data/posts";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/components/ui/use-mobile";
const languages = [
  { name: "All Languages", flag: "ea", color: "#6B73FF" },
  { name: "Spanish", flag: "es", color: "#FF6B35" },
  { name: "French", flag: "fr", color: "#4A90E2" },
  { name: "German", flag: "de", color: "#F39C12" },
  { name: "Italian", flag: "it", color: "#27AE60" },
  { name: "Portuguese", flag: "pt", color: "#8E44AD" },
  { name: "Japanese", flag: "jp", color: "#E74C3C" },
];

const Home = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All Languages");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const isMobile = useIsMobile();
  const filteredPosts = selectedLanguage === "All Languages" 
    ? languagePosts 
    : languagePosts.filter(post => post.language.name === selectedLanguage);

  const selectedLang = languages.find(lang => lang.name === selectedLanguage);

  return (
    <div className={cn("min-h-screen bg-background", isMobile ? "-mt-16" : "pb-16")}>
      {/* Header */}
       <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
           <SelectTrigger className="w-48 mx-auto border-none focus-within:border-none focus:border-none focus:ring-0">
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

      <div className="max-w-4xl mx-auto">
        {/* Stats Bar */}
        <div className="p-4">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card className="p-4 text-center bg-gradient-to-br from-threads-primary/10 to-threads-primary/5 border-threads-primary/20">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <TrendingUp className="h-5 w-5 text-threads-primary" />
                <span className="text-2xl font-bold text-threads-primary">2.4M</span>
              </div>
              <p className="text-sm text-muted-foreground">Total Views</p>
            </Card>
            
            <Card className="p-4 text-center bg-gradient-to-br from-threads-secondary/10 to-threads-secondary/5 border-threads-secondary/20">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <Users className="h-5 w-5 text-threads-secondary" />
                <span className="text-2xl font-bold text-threads-secondary">156K</span>
              </div>
              <p className="text-sm text-muted-foreground">Learners</p>
            </Card>
            
            <Card className="p-4 text-center bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <Globe className="h-5 w-5 text-accent" />
                <span className="text-2xl font-bold text-accent">25</span>
              </div>
              <p className="text-sm text-muted-foreground">Languages</p>
            </Card>
          </div>
        </div>

        {/* Language Filter */}
        <div className="px-4 mb-6 max-w-xl mx-auto">
          <Card className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user.jpg" alt="You" />
                  <AvatarFallback className="bg-threads-primary text-primary-foreground">
                    You
                  </AvatarFallback>
                </Avatar>
                <Button
                  variant="ghost"
                  onClick={() => setIsCreateModalOpen(true)}
                  className="flex-1 justify-start text-left text-muted-foreground hover:text-foreground hover:bg-threads-hover h-12 px-4"
                >
                  Share your language learning progress...
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Filter Header */}
        {selectedLanguage !== "All Languages" && (
          <div className="px-4 mb-4 max-w-xl mx-auto">
            <div className="flex items-center space-x-2">
              <div 
                className="px-3 py-1 rounded-full text-white text-sm font-medium"
                style={{ backgroundColor: selectedLang?.color }}
              >
                {selectedLang?.flag} {selectedLang?.name}
              </div>
              <span className="text-muted-foreground text-sm">
                {filteredPosts.length} posts
              </span>
            </div>
          </div>
        )}

        {/* Posts Feed */}
        <div className="px-4 space-y-6 max-w-xl mx-auto">
          {filteredPosts.map((post) => (
            <LanguagePost
              key={post.id}
              id={post.id}
              author={post.author}
              content={post.content}
              language={post.language}
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

      {/* Create Post Modal */}
      <CreateLanguagePostModal
        open={isCreateModalOpen}
        onOpenChange={setIsCreateModalOpen}
      />
    </div>
  );
};

export default Home;