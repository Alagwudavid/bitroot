"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Trophy,
    Lightbulb,
    MessageCircle,
    BookOpen,
    Target,
    Brain,
    Users,
    Camera,
    Video,
    FileText,
    Clock,
    Tag,
    Globe,
    X,
    User,
    Building
} from "lucide-react";
import { PostType, SubjectArea } from "@/types/social-learning";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface CreateSocialPostModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const postTypes: { type: PostType; label: string; icon: any; description: string; color: string }[] = [
    {
        type: "achievement",
        label: "Achievement",
        icon: Trophy,
        description: "Share a learning milestone or accomplishment",
        color: "bg-yellow-500"
    },
    {
        type: "tip",
        label: "Study Tip",
        icon: Lightbulb,
        description: "Share a helpful learning technique or insight",
        color: "bg-blue-500"
    },
    {
        type: "question",
        label: "Question",
        icon: MessageCircle,
        description: "Ask for help or clarification on a topic",
        color: "bg-purple-500"
    },
    {
        type: "resource",
        label: "Resource",
        icon: BookOpen,
        description: "Share useful learning materials or tools",
        color: "bg-green-500"
    },
    {
        type: "milestone",
        label: "Milestone",
        icon: Target,
        description: "Celebrate reaching a significant goal",
        color: "bg-orange-500"
    },
    {
        type: "project",
        label: "Project",
        icon: Brain,
        description: "Show off a completed project or work in progress",
        color: "bg-pink-500"
    },
    {
        type: "study-note",
        label: "Study Notes",
        icon: FileText,
        description: "Share detailed notes or summaries",
        color: "bg-indigo-500"
    },
    {
        type: "collaboration",
        label: "Collaboration",
        icon: Users,
        description: "Find study partners or group members",
        color: "bg-teal-500"
    }
];

const subjects: { value: SubjectArea; label: string }[] = [
    { value: "language", label: "Languages" },
    { value: "mathematics", label: "Mathematics" },
    { value: "science", label: "Science" },
    { value: "technology", label: "Technology" },
    { value: "arts", label: "Arts & Design" },
    { value: "business", label: "Business" },
    { value: "philosophy", label: "Philosophy" },
    { value: "history", label: "History" },
    { value: "other", label: "Other" }
];

// Sample communities for selection
const availableCommunities = [
    { id: "none", name: "Personal Post", avatar: "", flag: "", color: "#6B73FF" },
    { id: "spanish-learners", name: "Spanish Learners Hub", avatar: "", flag: "es", color: "#FF6B35" },
    { id: "math-community", name: "Math Enthusiasts", avatar: "", flag: "", color: "#4A90E2" },
    { id: "tech-hub", name: "Tech Learning Hub", avatar: "", flag: "", color: "#27AE60" },
    { id: "art-culture", name: "Art & Culture Exchange", avatar: "", flag: "", color: "#E74C3C" },
    { id: "language-support", name: "Language Learning Support", avatar: "", flag: "", color: "#8E44AD" },
];

const difficulties = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" }
];

export function CreateSocialPostModal({ open, onOpenChange }: CreateSocialPostModalProps) {
    const [postingAs, setPostingAs] = useState<"personal" | "community">("personal");
    const [selectedType, setSelectedType] = useState<PostType>("achievement");
    const [content, setContent] = useState("");
    const [selectedSubject, setSelectedSubject] = useState<SubjectArea>("language");
    const [selectedCommunity, setSelectedCommunity] = useState("none");
    const [tags, setTags] = useState<string[]>([]);
    const [newTag, setNewTag] = useState("");
    const [studyTime, setStudyTime] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [skills, setSkills] = useState("");
    const [isCollaborative, setIsCollaborative] = useState(false);
    const [maxParticipants, setMaxParticipants] = useState("");

    const selectedPostType = postTypes.find(pt => pt.type === selectedType);
    const selectedCommunityData = availableCommunities.find(c => c.id === selectedCommunity);

    const handleAddTag = () => {
        if (newTag.trim() && !tags.includes(newTag.trim())) {
            setTags([...tags, newTag.trim()]);
            setNewTag("");
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    const handleSubmit = () => {
        // Handle post submission
        console.log({
            type: selectedType,
            content,
            subject: selectedSubject,
            tags,
            studyData: {
                timeSpent: studyTime ? parseInt(studyTime) : undefined,
                difficulty: difficulty as any,
                skills: skills ? skills.split(",").map(s => s.trim()) : []
            },
            collaboration: isCollaborative ? {
                isCollaborative: true,
                maxParticipants: maxParticipants ? parseInt(maxParticipants) : undefined
            } : { isCollaborative: false }
        });

        // Reset form
        setPostingAs("personal");
        setContent("");
        setSelectedCommunity("none");
        setTags([]);
        setStudyTime("");
        setDifficulty("");
        setSkills("");
        setIsCollaborative(false);
        setMaxParticipants("");
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Share Your Learning Journey</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                    {/* User Info */}
                    <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src="/placeholder-user1.png" alt="You" />
                            <AvatarFallback>You</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">Your Name</p>
                            <p className="text-sm text-muted-foreground">Level 15 • 12,450 XP</p>
                        </div>
                    </div>

                    {/* Posting As Tabs */}
                    <Tabs value={postingAs} onValueChange={(value) => setPostingAs(value as "personal" | "community")}>
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="personal" className="flex items-center space-x-2">
                                <User className="h-4 w-4" />
                                <span>Personal</span>
                            </TabsTrigger>
                            <TabsTrigger value="community" className="flex items-center space-x-2">
                                <Building className="h-4 w-4" />
                                <span>Community</span>
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="personal" className="space-y-4 mt-4">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                <p className="text-sm text-blue-800 dark:text-blue-200">
                                    Posting as yourself. This will appear on your personal profile and in the main feed.
                                </p>
                            </div>
                        </TabsContent>

                        <TabsContent value="community" className="space-y-4 mt-4">
                            <div>
                                <label className="text-sm font-medium mb-2 flex items-center">
                                    <Building className="h-4 w-4 mr-2" />
                                    Select Community
                                </label>
                                <Select value={selectedCommunity} onValueChange={setSelectedCommunity}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {availableCommunities.slice(1).map((community) => (
                                            <SelectItem key={community.id} value={community.id}>
                                                <div className="flex items-center space-x-2">
                                                    {community.flag && (
                                                        <div className="w-5 h-5 rounded-sm overflow-hidden">
                                                            <img
                                                                src={`/flag/${community.flag}.png`}
                                                                alt={`${community.name} flag`}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    )}
                                                    <span>{community.name}</span>
                                                </div>
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {selectedCommunityData && selectedCommunityData.id !== "none" && (
                                    <div className="mt-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                        <p className="text-sm text-green-800 dark:text-green-200">
                                            Posting to <strong>{selectedCommunityData.name}</strong>. This will appear in the community feed and be visible to all community members.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </TabsContent>
                    </Tabs>

                    {/* Post Type Selection */}
                    <div>
                        <label className="text-sm font-medium mb-3 block">What are you sharing?</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {postTypes.map((postType) => {
                                const Icon = postType.icon;
                                return (
                                    <button
                                        key={postType.type}
                                        onClick={() => setSelectedType(postType.type)}
                                        className={cn(
                                            "p-3 rounded-lg border text-center transition-all",
                                            selectedType === postType.type
                                                ? "border-threads-primary bg-threads-primary/10 text-threads-primary"
                                                : "border-border hover:border-threads-primary/50"
                                        )}
                                    >
                                        <Icon className="h-5 w-5 mx-auto mb-1" />
                                        <p className="text-xs font-medium">{postType.label}</p>
                                    </button>
                                );
                            })}
                        </div>
                        {selectedPostType && (
                            <p className="text-sm text-muted-foreground mt-2">{selectedPostType.description}</p>
                        )}
                    </div>

                    {/* Content */}
                    <div>
                        <Textarea
                            placeholder={`What's your ${selectedPostType?.label.toLowerCase()} about?`}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="min-h-[120px] resize-none"
                        />
                    </div>

                    {/* Subject Selection */}
                    <div>
                        <label className="text-sm font-medium mb-2 block">Subject Area</label>
                        <Select value={selectedSubject} onValueChange={(value) => setSelectedSubject(value as SubjectArea)}>
                            <SelectTrigger>
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {subjects.map((subject) => (
                                    <SelectItem key={subject.value} value={subject.value}>
                                        {subject.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Study Data (for relevant post types) */}
                    {(selectedType === "achievement" || selectedType === "milestone" || selectedType === "study-note") && (
                        <div className="space-y-4 p-4 bg-muted/30 rounded-lg">
                            <h4 className="font-medium flex items-center">
                                <Clock className="h-4 w-4 mr-2" />
                                Study Session Details (Optional)
                            </h4>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Time Spent (minutes)</label>
                                    <Input
                                        type="number"
                                        placeholder="30"
                                        value={studyTime}
                                        onChange={(e) => setStudyTime(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium mb-1 block">Difficulty</label>
                                    <Select value={difficulty} onValueChange={setDifficulty}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select difficulty" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {difficulties.map((diff) => (
                                                <SelectItem key={diff.value} value={diff.value}>
                                                    {diff.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <label className="text-sm font-medium mb-1 block">Skills (comma-separated)</label>
                                    <Input
                                        placeholder="grammar, vocabulary"
                                        value={skills}
                                        onChange={(e) => setSkills(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Collaboration Options */}
                    {selectedType === "collaboration" && (
                        <div className="space-y-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <h4 className="font-medium flex items-center">
                                <Users className="h-4 w-4 mr-2" />
                                Collaboration Details
                            </h4>

                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="collaborative"
                                    checked={isCollaborative}
                                    onChange={(e) => setIsCollaborative(e.target.checked)}
                                />
                                <label htmlFor="collaborative" className="text-sm">
                                    Looking for study partners or collaborators
                                </label>
                            </div>

                            {isCollaborative && (
                                <div>
                                    <label className="text-sm font-medium mb-1 block">Max Participants</label>
                                    <Input
                                        type="number"
                                        placeholder="5"
                                        value={maxParticipants}
                                        onChange={(e) => setMaxParticipants(e.target.value)}
                                        className="w-32"
                                    />
                                </div>
                            )}
                        </div>
                    )}

                    {/* Tags */}
                    <div>
                        <label className="text-sm font-medium mb-2 flex items-center">
                            <Tag className="h-4 w-4 mr-2" />
                            Tags
                        </label>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="pr-1">
                                    #{tag}
                                    <button
                                        onClick={() => handleRemoveTag(tag)}
                                        className="ml-1 hover:text-red-500"
                                    >
                                        <X className="h-3 w-3" />
                                    </button>
                                </Badge>
                            ))}
                        </div>
                        <div className="flex space-x-2">
                            <Input
                                placeholder="Add a tag"
                                value={newTag}
                                onChange={(e) => setNewTag(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleAddTag()}
                            />
                            <Button type="button" variant="outline" onClick={handleAddTag}>
                                Add
                            </Button>
                        </div>
                    </div>

                    {/* Media Upload */}
                    <div>
                        <label className="text-sm font-medium mb-2 block">Add Media (Optional)</label>
                        <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                                <Camera className="h-4 w-4 mr-2" />
                                Photo
                            </Button>
                            <Button variant="outline" size="sm">
                                <Video className="h-4 w-4 mr-2" />
                                Video
                            </Button>
                            <Button variant="outline" size="sm">
                                <FileText className="h-4 w-4 mr-2" />
                                Document
                            </Button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center pt-4 border-t">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Globe className="h-4 w-4" />
                            <span>
                                {postingAs === "personal" ? "Public post" :
                                    selectedCommunityData?.id !== "none" ? `Posting to ${selectedCommunityData?.name}` : "Select community"}
                            </span>
                        </div>
                        <div className="flex space-x-2">
                            <Button variant="outline" onClick={() => onOpenChange(false)}>
                                Cancel
                            </Button>
                            <Button
                                onClick={handleSubmit}
                                disabled={!content.trim() || (postingAs === "community" && selectedCommunity === "none")}
                                className="bg-threads-primary hover:bg-threads-primary/90"
                            >
                                Share Post
                            </Button>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
