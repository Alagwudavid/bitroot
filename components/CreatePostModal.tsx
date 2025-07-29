"use client";

import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tooltip } from "@/components/ui/tooltip";
import {
    Trophy,
    Lightbulb,
    AlignLeft,
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
    Images,
    X,
    User,
    Building,
    Link,
    SquarePlay,
    ChevronDown,
    Check,
    Sparkles,
    Code,
} from "lucide-react";
import { PostType, SubjectArea } from "@/types/social-learning";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface CreatePostModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const postTypes: { type: PostType; label: string; icon: any; description: string; color: string }[] = [
    {
        type: "resource",
        label: "Study resources",
        icon: Link,
        description: "Share educational resources",
        color: "bg-indigo-500"
    },
    {
        type: "code",
        label: "Code",
        icon: Code,
        description: "Share code snippets",
        color: "bg-teal-500"
    },
    {
        type: "tip",
        label: "Study Tip",
        icon: Lightbulb,
        description: "Share a helpful learning technique or insight",
        color: "bg-blue-500"
    },
    {
        type: "poll",
        label: "Poll",
        icon: AlignLeft,
        description: "24hr poll",
        color: "bg-purple-500"
    },
    {
        type: "project",
        label: "Project",
        icon: Brain,
        description: "Show off a completed project or work in progress",
        color: "bg-pink-500"
    },
    {
        type: "collaboration",
        label: "collaboration",
        icon: Users,
        description: "Find study partners or group members",
        color: "bg-teal-500"
    },
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
    { id: "personal", name: "Your Name", avatar: "/placeholder-user1.png", flag: "", color: "#6B73FF", type: "user" as const },
    { id: "spanish-learners", name: "Spanish Learners Hub", avatar: "/flag/es.png", flag: "es", color: "#FF6B35", type: "community" as const },
    { id: "math-community", name: "Math Enthusiasts", avatar: "/svgs/math-icon.svg", flag: "", color: "#4A90E2", type: "community" as const },
    { id: "tech-hub", name: "Tech Learning Hub", avatar: "/svgs/tech-icon.svg", flag: "", color: "#27AE60", type: "community" as const },
    { id: "art-culture", name: "Art & Culture Exchange", avatar: "/svgs/art-icon.svg", flag: "", color: "#E74C3C", type: "community" as const },
    { id: "language-support", name: "Language Learning Support", avatar: "/svgs/language-icon.svg", flag: "", color: "#8E44AD", type: "community" as const },
];

const difficulties = [
    { value: "beginner", label: "Beginner" },
    { value: "intermediate", label: "Intermediate" },
    { value: "advanced", label: "Advanced" }
];

export function CreatePostModal({ open, onOpenChange }: CreatePostModalProps) {
    const [selectedProfile, setSelectedProfile] = useState("personal");
    const [selectedType, setSelectedType] = useState<PostType>("achievement");
    const [content, setContent] = useState("");
    const [selectedSubjects, setSelectedSubjects] = useState<SubjectArea[]>([]);
    const [subjectSearchTerm, setSubjectSearchTerm] = useState("");
    const [showSubjectDropdown, setShowSubjectDropdown] = useState(false);
    const [filteredSubjects, setFilteredSubjects] = useState(subjects);
    const [selectedCommunity, setSelectedCommunity] = useState("none");
    const [tags, setTags] = useState<string[]>([]);
    const [newTag, setNewTag] = useState("");
    const [studyTime, setStudyTime] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [skills, setSkills] = useState("");
    const [isCollaborative, setIsCollaborative] = useState(false);
    const [maxParticipants, setMaxParticipants] = useState("");

    const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const selectedPostType = postTypes.find(pt => pt.type === selectedType);
    const selectedProfileData = availableCommunities.find(c => c.id === selectedProfile);
    const selectedCommunityData = availableCommunities.find(c => c.id === selectedCommunity);

    // Debounced search effect
    useEffect(() => {
        if (debounceTimeoutRef.current) {
            clearTimeout(debounceTimeoutRef.current);
        }

        debounceTimeoutRef.current = setTimeout(() => {
            const filtered = subjects.filter(subject =>
                subject.label.toLowerCase().includes(subjectSearchTerm.toLowerCase())
            );
            setFilteredSubjects(filtered);
        }, 300);

        return () => {
            if (debounceTimeoutRef.current) {
                clearTimeout(debounceTimeoutRef.current);
            }
        };
    }, [subjectSearchTerm]);

    const handleSubjectInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSubjectSearchTerm(value);
        setShowSubjectDropdown(true);
    };

    const handleSubjectSelect = (subject: { value: SubjectArea; label: string }) => {
        if (!selectedSubjects.includes(subject.value)) {
            setSelectedSubjects([...selectedSubjects, subject.value]);
        }
        setSubjectSearchTerm("");
        setShowSubjectDropdown(false);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleSubjectRemove = (subjectToRemove: SubjectArea) => {
        setSelectedSubjects(selectedSubjects.filter(subject => subject !== subjectToRemove));
    };

    const getSubjectLabel = (value: SubjectArea) => {
        return subjects.find(s => s.value === value)?.label || value;
    };

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
            subjects: selectedSubjects,
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
        setSelectedProfile("personal");
        setContent("");
        setSelectedSubjects([]);
        setSubjectSearchTerm("");
        setShowSubjectDropdown(false);
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
            <DialogContent className="rounded-2xl max-w-3xl h-full max-h-[90vh] p-0 gap-0 flex flex-col">
                <DialogHeader className="p-6 py-3">
                    <DialogTitle className="hidden">Create post</DialogTitle>
                    {/* Profile/Community Switcher */}
                    <div className="flex items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="flex items-center space-x-3 p-2 h-auto bg-muted hover:bg-muted/80 text-foreground border rounded-xl">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage
                                            src={selectedProfileData?.avatar}
                                            alt={selectedProfileData?.name}
                                        />
                                        <AvatarFallback>
                                            {selectedProfileData?.name?.slice(0, 2).toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col items-start">
                                        <p className="font-semibold text-sm line-clamp-1">
                                            {selectedProfileData?.name}
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            {selectedProfileData?.type === "user" ? "Personal" : "Community"}
                                        </p>
                                    </div>
                                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-64 bg-background border shadow-lg rounded-xl p-2" align="start" sideOffset={8}>
                                <div className="space-y-1">
                                    {availableCommunities.map((profile) => (
                                        <DropdownMenuItem
                                            key={profile.id}
                                            onClick={() => setSelectedProfile(profile.id)}
                                            className={`px-3 py-2 rounded-lg cursor-pointer transition-colors ${selectedProfile === profile.id
                                                ? "bg-accent text-accent-foreground"
                                                : "hover:bg-accent/50"
                                                }`}
                                        >
                                            <div className="flex items-center space-x-3 w-full">
                                                <Avatar className="h-8 w-8">
                                                    <AvatarImage
                                                        src={profile.avatar}
                                                        alt={profile.name}
                                                    />
                                                    <AvatarFallback style={{ backgroundColor: profile.color }}>
                                                        {profile.name.slice(0, 2).toUpperCase()}
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="flex flex-col flex-1 min-w-0">
                                                    <span className="font-medium text-sm truncate">
                                                        {profile.name}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground">
                                                        {profile.type === "user" ? "Personal" : "Community"}
                                                    </span>
                                                </div>
                                                {selectedProfile === profile.id && (
                                                    <Check className="h-4 w-4 text-primary" />
                                                )}
                                            </div>
                                        </DropdownMenuItem>
                                    ))}
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    {selectedProfileData?.type === "community" && (
                        <div className="flex-1 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                            <p className="text-sm text-green-800 dark:text-green-200">
                                Posting to <strong>{selectedProfileData.name}</strong>. This will appear in the community feed.
                            </p>
                        </div>
                    )}
                </DialogHeader>

                <div className="space-y-6 px-6 py-3 h-full overflow-y-auto">
                    {/* Content */}
                    <div>
                        <Textarea
                            placeholder={`What's your ${selectedPostType?.label.toLowerCase()} about?`}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="min-h-[120px] resize-none border-0 border-l-2 rounded-none"
                        />
                    </div>

                    {/* Subject Areas - Multiple Selection with Search */}
                    <div className="relative">
                        <label className="text-sm font-medium mb-2 block">Subject Areas</label>

                        {/* Selected subjects display */}
                        {selectedSubjects.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-2">
                                {selectedSubjects.map((subject) => (
                                    <Badge
                                        key={subject}
                                        variant="cool"
                                        className="pr-1 p-2 flex items-center gap-1"
                                    >
                                        {getSubjectLabel(subject)}
                                        <button
                                            onClick={() => handleSubjectRemove(subject)}
                                            className="ml-1 hover:text-red-500 transition-colors"
                                            type="button"
                                        >
                                            <X className="h-3 w-3" />
                                        </button>
                                    </Badge>
                                ))}
                            </div>
                        )}

                        {/* Search input */}
                        <div className="relative">
                            <Input
                                ref={inputRef}
                                type="text"
                                placeholder="Search and add subject areas..."
                                value={subjectSearchTerm}
                                onChange={handleSubjectInputChange}
                                onFocus={() => setShowSubjectDropdown(true)}
                                onBlur={() => {
                                    // Delay hiding to allow clicking on dropdown items
                                    setTimeout(() => setShowSubjectDropdown(false), 200);
                                }}
                                className="w-full"
                            />

                            {/* Dropdown with filtered subjects */}
                            {showSubjectDropdown && filteredSubjects.length > 0 && (
                                <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-background border border-border rounded-lg shadow-lg max-h-48 overflow-y-auto">
                                    {filteredSubjects
                                        .filter(subject => !selectedSubjects.includes(subject.value))
                                        .map((subject) => (
                                            <button
                                                key={subject.value}
                                                type="button"
                                                onClick={() => handleSubjectSelect(subject)}
                                                className="w-full text-left px-3 py-2 hover:bg-accent hover:text-accent-foreground transition-colors first:rounded-t-lg last:rounded-b-lg"
                                            >
                                                {subject.label}
                                            </button>
                                        ))
                                    }
                                </div>
                            )}
                        </div>

                        {/* Show message when no subjects match search */}
                        {showSubjectDropdown && subjectSearchTerm && filteredSubjects.length === 0 && (
                            <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-background border border-border rounded-lg shadow-lg p-3 text-sm text-muted-foreground">
                                No subjects found matching "{subjectSearchTerm}"
                            </div>
                        )}
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
                </div>

                {/* Media Upload and Post Type Selection */}
                <div className="flex flex-col gap-4 p-6 py-3 border-t">
                    <div className="flex items-center">
                        {/* Media Upload Buttons */}
                        <div className="flex flex-row flex-wrap">
                            <Tooltip text="Add Photo">
                                <Button variant="cool" size="sm">
                                    <Images className="!size-6 shrink-0" />
                                </Button>
                            </Tooltip>
                            <Tooltip text="Add Video">
                                <Button variant="cool" size="sm">
                                    <SquarePlay className="!size-6 shrink-0" />
                                </Button>
                            </Tooltip>
                            <Tooltip text="Add Document">
                                <Button variant="cool" size="sm">
                                    <FileText className="!size-6 shrink-0" />
                                </Button>
                            </Tooltip>
                            {postTypes.map((postType) => {
                                const Icon = postType.icon;
                                return (
                                    <Tooltip key={postType.type} text={`${postType.label}`}>
                                        <Button onClick={() => setSelectedType(postType.type)} variant="cool" size="sm">
                                            <Icon className="!size-6 shrink-0" />
                                        </Button>
                                    </Tooltip>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center p-6 py-3 border-t">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Globe className="h-4 w-4" />
                        <span>
                            {selectedProfileData?.type === "user" ? "Public post" : `Posting to ${selectedProfileData?.name}`}
                        </span>
                    </div>
                    <div className="flex space-x-2">
                        <Button variant="outline" onClick={() => onOpenChange(false)}>
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSubmit}
                            disabled={!content.trim()}
                            className="bg-threads-primary hover:bg-threads-primary/90"
                        >
                            Share Post
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
