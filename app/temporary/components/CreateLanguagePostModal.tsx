"use client"
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageIcon, Video, X, Hash, Shapes, MoreHorizontal, Paintbrush2, Type, Smile } from "lucide-react";
import { toast } from "sonner";
import { VerifiedBadge } from "@/components/verified-badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { communities } from "@/data/communities";

interface CreateLanguagePostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const languages = [
  { name: "Spanish", flag: "es", color: "#FF6B35" },
  { name: "French", flag: "fr", color: "#4A90E2" },
  { name: "German", flag: "de", color: "#F39C12" },
  { name: "Italian", flag: "it", color: "#27AE60" },
  { name: "Portuguese", flag: "pt", color: "#8E44AD" },
  { name: "Japanese", flag: "jp", color: "#E74C3C" },
  { name: "Korean", flag: "kr", color: "#3498DB" },
  { name: "Chinese", flag: "cn", color: "#E67E22" },
];

export function CreateLanguagePostModal({ open, onOpenChange }: CreateLanguagePostModalProps) {
  const [content, setContent] = useState("");
  const [caption, setCaption] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedCommunity, setSelectedCommunity] = useState("");
  const [tags, setTags] = useState("");
  const [media, setMedia] = useState<{ type: "image" | "video"; url: string } | null>(null);
  const [mode, setMode] = useState<"post" | "canvas">("post");
  const maxLength = 500;

  const handlePost = () => {
    if (!content.trim()) {
      toast.error("Please write something to post");
      return;
    }
    
    if (!selectedLanguage) {
      toast.error("Please select a language");
      return;
    }

    if (!selectedCommunity) {
      toast.error("Please select a community");
      return;
    }
    
    // Simulate posting
    toast.success("Language learning post shared successfully!");
    setContent("");
    setCaption("");
    setSelectedLanguage("");
    setSelectedCommunity("");
    setTags("");
    setMedia(null);
    onOpenChange(false);
  };

  const handleSaveDraft = () => {
    toast.success("Draft saved successfully!");
  };

  const handleExport = () => {
    toast.success("Post exported successfully!");
  };

  const handleDelete = () => {
    setContent("");
    setCaption("");
    setSelectedLanguage("");
    setSelectedCommunity("");
    setTags("");
    setMedia(null);
    toast.success("Draft deleted successfully!");
  };

  const handleModeChange = (newMode: "post" | "canvas") => {
    setMode(newMode);
    toast.info(`Switched to ${newMode} mode`);
  };

  const handleMediaUpload = (type: "image" | "video") => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setMedia({
          type,
          url: e.target?.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeMedia = () => {
    setMedia(null);
  };

  const selectedLang = languages.find(lang => lang.name === selectedLanguage);
  const selectedComm = communities.find(comm => comm.name === selectedCommunity);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-card border border-border max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="flex flex-row items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center space-x-2">
            <div className="inline-flex items-center space-x-2 rounded-lg bg-muted p-1">
              <Button
                onClick={() => handleModeChange("post")}
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  mode === "post"
                    ? "bg-background text-foreground shadow-sm"
                    : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-background/50"
                )}
              >
                Post
              </Button>
              <Button
                onClick={() => handleModeChange("canvas")}
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  mode === "canvas"
                    ? "bg-background text-foreground shadow-sm"
                    : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-background/50"
                )}
              >
                <Shapes className="h-4 w-4 mr-1" />
                Canvas
              </Button>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="p-2 h-auto text-muted-foreground hover:text-foreground"
                >
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={handleSaveDraft}>
                  Save Draft
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleExport}>
                  Export
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleDelete}
                  className="text-destructive focus:text-destructive"
                >
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <DialogTitle className="text-center text-base font-semibold">
            Create {mode === "post" ? "Post" : "Canvas"}
          </DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-0">
            {mode === "post" ? (
              // Post Mode Content
              <div className="flex space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-user1.png" alt="You" />
                  <AvatarFallback className="bg-threads-primary text-primary-foreground">
                    You
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold flex items-center">username <VerifiedBadge accountType={"user"} /></span>
                    {selectedLang && (
                      <div 
                        className="px-2 py-1 rounded text-white text-xs font-medium flex items-center"
                        style={{ backgroundColor: selectedLang.color }}
                      >
                        <div className="w-5 h-5 rounded-md mr-2 overflow-hidden bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] text-white group-hover:bg-[#1e96fc] dark:group-hover:bg-[#8ddeed] dark:group-hover:text-[#030318] flex items-center justify-center">
                         <img
                           src={`/flag/${selectedLang.flag}.png`}
                           alt={`${selectedLang.name} flag`}
                           className="w-full h-full object-cover"
                         />
                       </div> {selectedLang.name}
                      </div>
                    )}
                    {selectedComm && (
                      <div 
                        className="px-2 py-1 rounded text-white text-xs font-medium flex items-center"
                        style={{ backgroundColor: selectedComm.color }}
                      >
                        <div className="w-5 h-5 rounded-md mr-2 overflow-hidden bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] text-white group-hover:bg-[#1e96fc] dark:group-hover:bg-[#8ddeed] dark:group-hover:text-[#030318] flex items-center justify-center">
                         <img
                           src={`/flag/${selectedComm.flag}.png`}
                           alt={`${selectedComm.name} flag`}
                           className="w-full h-full object-cover"
                         />
                       </div> {selectedComm.name}
                      </div>
                    )}
                  </div>
              
              {/* Language Selection */}
              <div className="space-y-2">
                <Label htmlFor="language">Learning Language *</Label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select the language you're learning" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 overflow-y-auto">
                    {languages.map((lang) => (
                      <SelectItem key={lang.name} value={lang.name}>
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 rounded-md mr-2 overflow-hidden bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] text-white group-hover:bg-[#1e96fc] dark:group-hover:bg-[#8ddeed] dark:group-hover:text-[#030318] flex items-center justify-center">
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

              {/* Community Selection */}
              <div className="space-y-2">
                <Label htmlFor="community">Community *</Label>
                <Select value={selectedCommunity} onValueChange={setSelectedCommunity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a community to post in" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 overflow-y-auto">
                    {communities.map((community) => (
                      <SelectItem key={community.name} value={community.name}>
                        <div className="flex items-center space-x-2">
                          <div className="w-5 h-5 rounded-md mr-2 overflow-hidden bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318] text-white group-hover:bg-[#1e96fc] dark:group-hover:bg-[#8ddeed] dark:group-hover:text-[#030318] flex items-center justify-center">
                            <img
                              src={`/flag/${community.flag}.png`}
                              alt={`${community.name} flag`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span>{community.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Content */}
              <Textarea
                placeholder="Share your language learning experience, progress, or tips..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[100px] border border-border resize-none focus-visible:ring-threads-primary text-base placeholder:text-muted-foreground"
                maxLength={maxLength}
              />
              
              {/* Caption */}
              <div className="space-y-2">
                <Label htmlFor="caption">Media Caption (Optional)</Label>
                <Input
                  id="caption"
                  placeholder="Describe your image or video..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="border border-border focus-visible:ring-threads-primary"
                />
              </div>
              
              {/* Tags */}
              <div className="space-y-2">
                <Label htmlFor="tags">Tags</Label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="tags"
                    placeholder="beginner, pronunciation, grammar, speaking"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="pl-10 border border-border focus-visible:ring-threads-primary"
                  />
                </div>
              </div>
              
              {/* Media Preview */}
              {media && (
                <div className="relative inline-block">
                  {media.type === "video" ? (
                    <video
                      src={media.url}
                      className="max-w-full h-auto rounded-lg border border-border max-h-64"
                      controls
                    />
                  ) : (
                    <img
                      src={media.url}
                      alt="Upload preview"
                      className="max-w-full h-auto rounded-lg border border-border max-h-64"
                    />
                  )}
                  <Button
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2 h-6 w-6 p-0 rounded-full"
                    onClick={removeMedia}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              )}
                </div>
              </div>
            ) : (
              // Canvas Mode Content
              <div className="space-y-4">
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 min-h-[300px] border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center">
                  <div className="text-center text-gray-500 dark:text-gray-400">
                    <Paintbrush2 className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-lg font-medium">Canvas Mode</p>
                    <p className="text-sm">Create visual content with text, stickers, and images</p>
                  </div>
                </div>
                
                {/* Canvas Tools */}
                <div className="flex items-center space-x-2 border-t border-border pt-4">
                  <Button variant="ghost" size="sm" className="p-2 h-auto text-muted-foreground hover:text-threads-primary">
                    <Type className="h-5 w-5" />
                    <span className="text-sm ml-1">Text</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2 h-auto text-muted-foreground hover:text-threads-primary">
                    <Smile className="h-5 w-5" />
                    <span className="text-sm ml-1">Stickers</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2 h-auto text-muted-foreground hover:text-threads-primary">
                    <ImageIcon className="h-5 w-5" />
                    <span className="text-sm ml-1">Images</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex items-center justify-between border-t border-border">
          <div className="flex items-center space-x-2">
            {mode === "post" && (
              <>
                <Button variant="ghost" size="sm" className="p-2 h-auto text-muted-foreground hover:text-threads-primary">
                  <label className="cursor-pointer flex items-center space-x-1">
                    <ImageIcon className="h-5 w-5" />
                    <span className="text-sm">Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleMediaUpload("image")}
                      className="hidden"
                    />
                  </label>
                </Button>
                
                <Button variant="ghost" size="sm" className="p-2 h-auto text-muted-foreground hover:text-threads-primary">
                  <label className="cursor-pointer flex items-center space-x-1">
                    <Video className="h-5 w-5" />
                    <span className="text-sm">Video</span>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleMediaUpload("video")}
                      className="hidden"
                    />
                  </label>
                </Button>
                
                <span className="text-sm text-muted-foreground ml-auto">
                  {content.length}/{maxLength}
                </span>
              </>
            )}
          </div>
          
          <div className="flex space-x-2">
            <Button
              onClick={handlePost}
              disabled={mode === "post" ? (!content.trim() || !selectedLanguage || !selectedCommunity || content.length > maxLength) : false}
              className="bg-threads-primary hover:bg-threads-primary/90 text-foreground px-6"
            >
              {mode === "post" ? "Share" : "Create Canvas"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}