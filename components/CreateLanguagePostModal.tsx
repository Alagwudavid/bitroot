"use client"
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageIcon, Video, X, Hash } from "lucide-react";
import { toast } from "sonner";

interface CreateLanguagePostModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const languages = [
  { name: "Spanish", flag: "🇪🇸", color: "#FF6B35" },
  { name: "French", flag: "🇫🇷", color: "#4A90E2" },
  { name: "German", flag: "🇩🇪", color: "#F39C12" },
  { name: "Italian", flag: "🇮🇹", color: "#27AE60" },
  { name: "Portuguese", flag: "🇵🇹", color: "#8E44AD" },
  { name: "Japanese", flag: "🇯🇵", color: "#E74C3C" },
  { name: "Korean", flag: "🇰🇷", color: "#3498DB" },
  { name: "Chinese", flag: "🇨🇳", color: "#E67E22" },
];

export function CreateLanguagePostModal({ open, onOpenChange }: CreateLanguagePostModalProps) {
  const [content, setContent] = useState("");
  const [caption, setCaption] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [tags, setTags] = useState("");
  const [media, setMedia] = useState<{ type: "image" | "video"; url: string } | null>(null);
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
    
    // Simulate posting
    toast.success("Language learning post shared successfully!");
    setContent("");
    setCaption("");
    setSelectedLanguage("");
    setTags("");
    setMedia(null);
    onOpenChange(false);
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl bg-card border border-border">
        <DialogHeader>
          <DialogTitle className="text-center text-lg font-semibold">
            Share your language learning journey
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="flex space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder-user.jpg" alt="You" />
              <AvatarFallback className="bg-threads-primary text-primary-foreground">
                You
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="font-semibold">username</span>
                {selectedLang && (
                  <div 
                    className="px-2 py-1 rounded text-white text-xs font-medium"
                    style={{ backgroundColor: selectedLang.color }}
                  >
                    {selectedLang.flag} {selectedLang.name}
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
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.name} value={lang.name}>
                        <div className="flex items-center space-x-2">
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
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
          
          {/* Actions */}
          <div className="flex items-center justify-between border-t border-border pt-4">
            <div className="flex items-center space-x-2">
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
            </div>
            
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                onClick={() => onOpenChange(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                Cancel
              </Button>
              <Button
                onClick={handlePost}
                disabled={!content.trim() || !selectedLanguage || content.length > maxLength}
                className="bg-threads-primary hover:bg-threads-primary/90 text-primary-foreground px-6"
              >
                Share
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}