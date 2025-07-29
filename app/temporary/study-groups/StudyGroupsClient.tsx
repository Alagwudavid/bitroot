"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Search,
    Users,
    Calendar,
    Clock,
    Plus,
    Filter,
    Globe,
    Lock,
    BookOpen,
    Brain,
    Code,
    Palette,
    Calculator,
    Languages
} from "lucide-react";
import { StudyGroup, SubjectArea } from "@/types/social-learning";
import { cn } from "@/lib/utils";

// Sample study groups data
const sampleStudyGroups: StudyGroup[] = [
    {
        id: "sg1",
        name: "JavaScript Fundamentals",
        description: "Learn JavaScript from basics to intermediate concepts with hands-on projects",
        subject: "technology",
        level: "beginner",
        members: [
            {
                id: "u1",
                username: "alex_codes",
                displayName: "Alex Johnson",
                avatar: "/placeholder-user.jpg",
                type: "student",
                verified: false,
                level: 5,
                xp: 2340,
                joinDate: "2024-01-15",
                languages: ["English"],
                subjects: ["technology"],
                achievements: [],
                followers: 45,
                following: 23,
                streak: { current: 7, longest: 15, lastActive: "2024-01-27" },
                preferences: { publicProfile: true, showProgress: true, mentorshipAvailable: false }
            }
        ],
        maxMembers: 8,
        isPrivate: false,
        schedule: {
            recurring: true,
            days: ["Tuesday", "Thursday"],
            time: "19:00",
            timezone: "UTC"
        },
        createdBy: {
            id: "u2",
            username: "prof_smith",
            displayName: "Prof. Smith",
            avatar: "/placeholder-user.jpg",
            type: "educator",
            verified: true,
            level: 25,
            xp: 15670,
            joinDate: "2023-09-10",
            languages: ["English"],
            subjects: ["technology"],
            achievements: [],
            followers: 234,
            following: 89,
            streak: { current: 45, longest: 120, lastActive: "2024-01-27" },
            preferences: { publicProfile: true, showProgress: true, mentorshipAvailable: true }
        },
        createdAt: "2024-01-15",
        status: "active"
    },
    {
        id: "sg2",
        name: "Spanish Conversation Circle",
        description: "Practice conversational Spanish with native speakers and advanced learners",
        subject: "language",
        language: "Spanish",
        level: "intermediate",
        members: [],
        maxMembers: 6,
        isPrivate: false,
        schedule: {
            recurring: true,
            days: ["Monday", "Wednesday", "Friday"],
            time: "18:30",
            timezone: "UTC"
        },
        createdBy: {
            id: "u3",
            username: "maria_es",
            displayName: "María González",
            avatar: "/placeholder-user.jpg",
            type: "mentor",
            verified: true,
            level: 18,
            xp: 8930,
            joinDate: "2023-11-20",
            languages: ["Spanish", "English"],
            subjects: ["language"],
            achievements: [],
            followers: 156,
            following: 67,
            streak: { current: 23, longest: 67, lastActive: "2024-01-27" },
            preferences: { publicProfile: true, showProgress: true, mentorshipAvailable: true }
        },
        createdAt: "2024-01-10",
        status: "active"
    },
    {
        id: "sg3",
        name: "Calculus Study Group",
        description: "Master calculus concepts through collaborative problem-solving sessions",
        subject: "mathematics",
        level: "advanced",
        members: [],
        maxMembers: 5,
        isPrivate: false,
        schedule: {
            recurring: true,
            days: ["Saturday", "Sunday"],
            time: "14:00",
            timezone: "UTC"
        },
        createdBy: {
            id: "u4",
            username: "math_guru",
            displayName: "Dr. Emily Chen",
            avatar: "/placeholder-user.jpg",
            type: "educator",
            verified: true,
            level: 30,
            xp: 23450,
            joinDate: "2023-08-05",
            languages: ["English", "Mandarin"],
            subjects: ["mathematics"],
            achievements: [],
            followers: 567,
            following: 123,
            streak: { current: 89, longest: 200, lastActive: "2024-01-27" },
            preferences: { publicProfile: true, showProgress: true, mentorshipAvailable: true }
        },
        createdAt: "2024-01-12",
        status: "active"
    }
];

const subjectIcons: Record<SubjectArea, any> = {
    language: Languages,
    mathematics: Calculator,
    science: Brain,
    technology: Code,
    arts: Palette,
    business: Globe,
    philosophy: BookOpen,
    history: BookOpen,
    other: BookOpen
};

const subjectColors: Record<SubjectArea, string> = {
    language: "bg-blue-500",
    mathematics: "bg-purple-500",
    science: "bg-green-500",
    technology: "bg-orange-500",
    arts: "bg-pink-500",
    business: "bg-indigo-500",
    philosophy: "bg-yellow-500",
    history: "bg-red-500",
    other: "bg-gray-500"
};

const StudyGroupsClient = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSubject, setSelectedSubject] = useState<SubjectArea | "all">("all");
    const [selectedLevel, setSelectedLevel] = useState<"all" | "beginner" | "intermediate" | "advanced">("all");

    const filteredGroups = sampleStudyGroups.filter(group => {
        const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            group.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSubject = selectedSubject === "all" || group.subject === selectedSubject;
        const matchesLevel = selectedLevel === "all" || group.level === selectedLevel;

        return matchesSearch && matchesSubject && matchesLevel;
    });

    const StudyGroupCard = ({ group }: { group: StudyGroup }) => {
        const SubjectIcon = subjectIcons[group.subject];

        return (
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border border-border rounded-2xl">
                <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                        <div className={cn("p-2 rounded-lg text-white", subjectColors[group.subject])}>
                            <SubjectIcon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold text-lg text-foreground">{group.name}</h3>
                            <div className="flex items-center space-x-2 mt-1">
                                <Badge variant="outline" className="text-xs">
                                    {group.level}
                                </Badge>
                                <Badge variant="secondary" className="text-xs">
                                    {group.subject}
                                </Badge>
                                {group.language && (
                                    <Badge variant="outline" className="text-xs">
                                        {group.language}
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </div>
                    {group.isPrivate ? (
                        <Lock className="h-4 w-4 text-muted-foreground" />
                    ) : (
                        <Globe className="h-4 w-4 text-muted-foreground" />
                    )}
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {group.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{group.members.length}/{group.maxMembers}</span>
                        </div>
                        {group.schedule && (
                            <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{group.schedule.time}</span>
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={group.createdBy.avatar} alt={group.createdBy.displayName} />
                            <AvatarFallback className="text-xs">
                                {group.createdBy.displayName.charAt(0)}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="text-sm font-medium text-foreground">{group.createdBy.displayName}</p>
                            <p className="text-xs text-muted-foreground">{group.createdBy.type}</p>
                        </div>
                    </div>
                    <Button size="sm" className="bg-threads-primary hover:bg-threads-primary/90">
                        Join Group
                    </Button>
                </div>
            </Card>
        );
    };

    return (
        <div className="min-h-screen bg-background">
            <div className="max-w-6xl mx-auto p-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground">Study Groups</h1>
                        <p className="text-muted-foreground mt-1">Join collaborative learning sessions with peers</p>
                    </div>
                    <Button className="bg-threads-primary hover:bg-threads-primary/90">
                        <Plus className="h-4 w-4 mr-2" />
                        Create Group
                    </Button>
                </div>

                {/* Search and Filters */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search study groups..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                    <div className="flex gap-2">
                        <select
                            value={selectedSubject}
                            onChange={(e) => setSelectedSubject(e.target.value as SubjectArea | "all")}
                            className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
                        >
                            <option value="all">All Subjects</option>
                            <option value="language">Languages</option>
                            <option value="mathematics">Mathematics</option>
                            <option value="science">Science</option>
                            <option value="technology">Technology</option>
                            <option value="arts">Arts</option>
                            <option value="business">Business</option>
                        </select>
                        <select
                            value={selectedLevel}
                            onChange={(e) => setSelectedLevel(e.target.value as "all" | "beginner" | "intermediate" | "advanced")}
                            className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
                        >
                            <option value="all">All Levels</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="discover" className="mb-6">
                    <TabsList className="grid w-full grid-cols-3 max-w-md">
                        <TabsTrigger value="discover">Discover</TabsTrigger>
                        <TabsTrigger value="joined">My Groups</TabsTrigger>
                        <TabsTrigger value="created">Created</TabsTrigger>
                    </TabsList>

                    <TabsContent value="discover" className="mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredGroups.map((group) => (
                                <StudyGroupCard key={group.id} group={group} />
                            ))}
                        </div>
                        {filteredGroups.length === 0 && (
                            <div className="text-center py-12">
                                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-foreground mb-2">No study groups found</h3>
                                <p className="text-muted-foreground">Try adjusting your search criteria or create a new group</p>
                            </div>
                        )}
                    </TabsContent>

                    <TabsContent value="joined" className="mt-6">
                        <div className="text-center py-12">
                            <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-foreground mb-2">No joined groups yet</h3>
                            <p className="text-muted-foreground">Join study groups to start collaborative learning</p>
                        </div>
                    </TabsContent>

                    <TabsContent value="created" className="mt-6">
                        <div className="text-center py-12">
                            <Plus className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                            <h3 className="text-lg font-semibold text-foreground mb-2">No created groups yet</h3>
                            <p className="text-muted-foreground">Create your first study group to lead collaborative learning</p>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default StudyGroupsClient;
