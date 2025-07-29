"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Play, Clock, Users, Search, BookOpen, Star } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function CoursesClient() {
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("all");

    const categories = [
        { id: "all", label: "All Courses" },
        { id: "beginner", label: "Beginner" },
        { id: "intermediate", label: "Intermediate" },
        { id: "advanced", label: "Advanced" },
        { id: "culture", label: "Culture" },
        { id: "business", label: "Business" },
    ];

    const featuredCourses = [
        {
            id: 1,
            title: "Complete Swahili for Beginners",
            instructor: "Dr. Amina Hassan",
            thumbnail: "/placeholder.svg?height=200&width=300",
            duration: "12 hours",
            lessons: 45,
            students: 15420,
            rating: 4.8,
            price: "₦12,900",
            originalPrice: "₦18,500",
            category: "beginner",
            description:
                "Master the basics of Swahili with this comprehensive course designed for complete beginners.",
        },
        {
            id: 2,
            title: "Yoruba Business Communication",
            instructor: "Prof. Adebayo Ogundimu",
            thumbnail: "/placeholder.svg?height=200&width=300",
            duration: "8 hours",
            lessons: 32,
            students: 8750,
            rating: 4.9,
            price: "₦15,500",
            originalPrice: "₦22,000",
            category: "business",
            description:
                "Learn professional Yoruba for business settings and formal communications.",
        },
        {
            id: 3,
            title: "Amharic Culture & Language",
            instructor: "Meron Tadesse",
            thumbnail: "/placeholder.svg?height=200&width=300",
            duration: "15 hours",
            lessons: 60,
            students: 12300,
            rating: 4.7,
            price: "₦8,900",
            originalPrice: "₦14,200",
            category: "culture",
            description:
                "Explore Ethiopian culture while learning Amharic language fundamentals.",
        },
        {
            id: 4,
            title: "Advanced Hausa Grammar",
            instructor: "Mallam Ibrahim Sani",
            thumbnail: "/placeholder.svg?height=200&width=300",
            duration: "10 hours",
            lessons: 38,
            students: 5600,
            rating: 4.6,
            price: "₦11,200",
            originalPrice: "₦16,800",
            category: "advanced",
            description:
                "Deep dive into complex Hausa grammar structures and advanced language concepts.",
        },
        {
            id: 5,
            title: "Igbo for Intermediate Learners",
            instructor: "Chioma Okafor",
            thumbnail: "/placeholder.svg?height=200&width=300",
            duration: "14 hours",
            lessons: 52,
            students: 9800,
            rating: 4.8,
            price: "₦13,700",
            originalPrice: "₦19,500",
            category: "intermediate",
            description:
                "Build upon your Igbo foundation with intermediate-level conversations and grammar.",
        },
        {
            id: 6,
            title: "Zulu Pronunciation Mastery",
            instructor: "Nomsa Mthembu",
            thumbnail: "/placeholder.svg?height=200&width=300",
            duration: "6 hours",
            lessons: 24,
            students: 7200,
            rating: 4.9,
            price: "₦7,500",
            originalPrice: "₦12,000",
            category: "beginner",
            description:
                "Perfect your Zulu pronunciation with expert guidance and practice exercises.",
        },
    ];

    // Teachers data (mocked for now)
    const teachers = [
        {
            name: "Dr. Amina Hassan",
            avatar: "/placeholder-user.jpg",
            bio: "Swahili linguist & educator",
            courses: 3,
            teacherOfMonth: true,
        },
        {
            name: "Prof. Adebayo Ogundimu",
            avatar: "/placeholder-user.jpg",
            bio: "Yoruba business expert",
            courses: 2,
            teacherOfMonth: false,
        },
        {
            name: "Meron Tadesse",
            avatar: "/placeholder-user.jpg",
            bio: "Amharic culture specialist",
            courses: 2,
            teacherOfMonth: false,
        },
        {
            name: "Mallam Ibrahim Sani",
            avatar: "/placeholder-user.jpg",
            bio: "Hausa grammar coach",
            courses: 1,
            teacherOfMonth: false,
        },
        {
            name: "Chioma Okafor",
            avatar: "/placeholder-user.jpg",
            bio: "Igbo language mentor",
            courses: 1,
            teacherOfMonth: false,
        },
        {
            name: "Nomsa Mthembu",
            avatar: "/placeholder-user.jpg",
            bio: "Zulu pronunciation guide",
            courses: 1,
            teacherOfMonth: false,
        },
    ];

    // Playlists are now courses grouped by teacher
    const playlists = teachers.map((teacher, idx) => {
        const teacherCourses = featuredCourses.filter(
            (c) => c.instructor === teacher.name
        );
        return {
            id: idx + 1,
            title: `${teacher.name.split(" ")[0]}'s Course Playlist`,
            teacher: teacher.name,
            avatar: teacher.avatar,
            courses: teacherCourses,
            description: `A curated playlist of courses by ${teacher.name}`,
            duration:
                teacherCourses.reduce((acc, c) => acc + parseInt(c.duration), 0) +
                " hours",
            totalCourses: teacherCourses.length,
            // For demo, use lessons as 'views'
            views: teacherCourses.reduce((acc, c) => acc + c.lessons, 0),
            thumbnail:
                teacherCourses[0]?.thumbnail || "/placeholder.svg?height=150&width=200",
        };
    });

    // Debounce search
    useEffect(() => {
        setLoading(true);
        const handler = setTimeout(() => {
            setDebouncedSearch(searchQuery);
            setLoading(false);
        }, 500);
        return () => clearTimeout(handler);
    }, [searchQuery]);

    // Filtered data for each tab
    const filteredCourses = featuredCourses.filter((course) => {
        const matchesSearch =
            course.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            course.instructor.toLowerCase().includes(debouncedSearch.toLowerCase());
        const matchesCategory =
            selectedCategory === "all" || course.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const filteredTeachers = teachers.filter((teacher) =>
        teacher.name.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    const filteredPlaylists = playlists.filter(
        (playlist) =>
            playlist.teacher.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            playlist.courses.some((c) =>
                c.title.toLowerCase().includes(debouncedSearch.toLowerCase())
            )
    );

    return (
        <div className="min-h-screen w-full bg-background text-foreground">
            {/* Header Section */}
            <div className="bg-gray-900 dark:bg-gray-800 text-white py-12 rounded-2xl max-w-7xl mx-auto">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4 text-foreground dark:text-white">Language Learning Courses</h1>
                    <p className="text-xl text-muted-foreground mb-6">Courses to get you started</p>
                    <p className="text-muted-foreground">Choose courses taught by real-world experts.</p>

                    {/* Search Bar */}
                    <div className="mt-8 max-w-2xl">
                        <div className="relative">
                            <Input
                                placeholder="Search for anything"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-4 pr-12 py-3 rounded-none bg-background text-foreground border-0 text-base w-full"
                            />
                            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="mt-6 text-sm">
                        <span className="text-muted-foreground mr-4">Most popular:</span>
                        <Button variant="link" className="text-white dark:text-foreground underline p-0 h-auto text-sm mr-4">
                            Speaking
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={selectedCategory === category.id ? "default" : "outline"}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`rounded-full px-4 py-2 text-sm font-medium ${selectedCategory === category.id
                                ? "bg-primary text-primary-foreground"
                                : "bg-background text-foreground border-border hover:bg-accent"
                                }`}
                        >
                            {category.label}
                        </Button>
                    ))}
                </div>

                {/* Featured Course Banner */}
                <div className="bg-pink-100 dark:bg-pink-900/20 rounded-lg p-6 mb-8 flex items-center gap-6">
                    <div className="flex-shrink-0">
                        <img
                            src="/placeholder.svg?height=120&width=200"
                            alt="Featured Course"
                            className="w-48 h-28 object-cover rounded"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">
                            Japanese from zero [40] lessons (JLPT N5): Certification
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                            Become fluent by learning the Japanese language, from a complete beginner to fluent with
                            real Japanese culture and communication.
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                <span className="text-yellow-500">★★★★★</span>
                                <span className="text-sm text-muted-foreground">4.7 (502)</span>
                            </div>
                            <Badge className="bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200 text-xs">
                                Bestseller
                            </Badge>
                        </div>
                        <div className="mt-2">
                            <span className="text-lg font-bold text-foreground">₦4,000</span>
                        </div>
                    </div>
                </div>
                {/* Popular Topics */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 text-foreground">Popular topics</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 border border-border rounded hover:bg-accent cursor-pointer">
                            <span className="text-blue-600 dark:text-blue-400 font-medium">Spanish Language</span>
                        </div>
                        <div className="p-4 border border-border rounded hover:bg-accent cursor-pointer">
                            <span className="text-blue-600 dark:text-blue-400 font-medium">English Grammar</span>
                        </div>
                        <div className="p-4 border border-border rounded hover:bg-accent cursor-pointer">
                            <span className="text-blue-600 dark:text-blue-400 font-medium">English Conversation</span>
                        </div>
                        <div className="p-4 border border-border rounded hover:bg-accent cursor-pointer">
                            <span className="text-blue-600 dark:text-blue-400 font-medium">Italian Language</span>
                        </div>
                        <div className="p-4 border border-border rounded hover:bg-accent cursor-pointer">
                            <span className="text-blue-600 dark:text-blue-400 font-medium">German Language</span>
                        </div>
                        <div className="p-4 border border-border rounded hover:bg-accent cursor-pointer">
                            <span className="text-blue-600 dark:text-blue-400 font-medium">French Language</span>
                        </div>
                        <div className="p-4 border border-border rounded hover:bg-accent cursor-pointer">
                            <span className="text-blue-600 dark:text-blue-400 font-medium">Japanese Language</span>
                        </div>
                        <div className="p-4 border border-border rounded hover:bg-accent cursor-pointer">
                            <span className="text-blue-600 dark:text-blue-400 font-medium">English Vocabulary</span>
                        </div>
                        <div className="p-4 border border-border rounded hover:bg-accent cursor-pointer">
                            <span className="text-blue-600 dark:text-blue-400 font-medium">Mandarin Chinese Language</span>
                        </div>
                    </div>
                </div>

                {/* Popular Instructors */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 text-foreground">Popular Instructors</h2>
                    <p className="text-muted-foreground text-sm mb-4">
                        These real-world experts are highly rated by learners like you.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {filteredTeachers.slice(0, 4).map((teacher) => (
                            <div key={teacher.name} className="text-center">
                                <img
                                    src={teacher.avatar}
                                    alt={teacher.name}
                                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                                />
                                <h3 className="font-semibold text-foreground mb-1">{teacher.name}</h3>
                                <p className="text-sm text-muted-foreground mb-2">{teacher.bio}</p>
                                <div className="flex items-center justify-center gap-1 text-yellow-500 text-sm">
                                    <span>★</span>
                                    <span className="text-muted-foreground">4.8</span>
                                </div>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {teacher.courses * 5000 + 10000} students
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* All Courses Section */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4 text-foreground">All Language Learning courses</h2>

                    {/* Filter Controls */}
                    <div className="mb-6 p-4 border border-border rounded-lg bg-accent/50">
                        <div className="flex items-center gap-4 text-sm">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" className="rounded" />
                                <span className="text-foreground">Rid yourself from a life full money, back guarantee</span>
                            </label>
                        </div>

                        <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1 text-foreground">Rating</label>
                                <select className="w-full p-2 border border-border rounded text-sm bg-background text-foreground">
                                    <option>★★★★☆ 4.5 & up (7,982)</option>
                                    <option>★★★★☆ 4.0 & up (12,345)</option>
                                    <option>★★★☆☆ 3.5 & up (15,678)</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-foreground">Video Duration</label>
                                <div className="space-y-1">
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="checkbox" className="rounded" />
                                        <span className="text-foreground">0-1 Hour (284)</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="checkbox" className="rounded" />
                                        <span className="text-foreground">1-3 Hours (1,284)</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-foreground">Topic</label>
                                <div className="space-y-1">
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="checkbox" className="rounded" />
                                        <span className="text-foreground">English (7,453)</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="checkbox" className="rounded" />
                                        <span className="text-foreground">Spanish (3,521)</span>
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-foreground">Level</label>
                                <div className="space-y-1">
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="checkbox" className="rounded" />
                                        <span className="text-foreground">All Levels (7,453)</span>
                                    </label>
                                    <label className="flex items-center gap-2 text-sm">
                                        <input type="checkbox" className="rounded" />
                                        <span className="text-foreground">Beginner (3,521)</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-muted-foreground">7,559 results</span>
                        <select className="p-2 border border-border rounded text-sm bg-background text-foreground">
                            <option>Most Relevant</option>
                            <option>Most Popular</option>
                            <option>Highest Rated</option>
                            <option>Newest</option>
                        </select>
                    </div>
                    {/* Course List */}
                    {loading ? (
                        <div className="space-y-4">
                            {[...Array(5)].map((_, i) => (
                                <Skeleton key={i} className="h-32 w-full rounded" />
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filteredCourses.map((course) => (
                                <div key={course.id} className="flex gap-4 p-4 border border-border rounded hover:shadow-md transition-shadow">
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="w-64 h-36 object-cover rounded flex-shrink-0"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                                            {course.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                                            {course.description}
                                        </p>
                                        <p className="text-sm text-muted-foreground mb-2">{course.instructor}</p>

                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="flex items-center gap-1">
                                                <span className="text-yellow-500 font-bold">{course.rating.toFixed(1)}</span>
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <span key={i} className={`text-sm ${i < Math.round(course.rating) ? 'text-yellow-500' : 'text-muted-foreground'}`}>★</span>
                                                    ))}
                                                </div>
                                                <span className="text-sm text-muted-foreground">({course.students.toLocaleString()})</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-2">
                                            <span>{course.duration} total hours</span>
                                            <span>{course.lessons} lectures</span>
                                            <span>All Levels</span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-lg font-bold text-foreground">{course.price}</span>
                                                <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                                            </div>
                                            {course.id === 1 && (
                                                <Badge className="bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200">Bestseller</Badge>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
