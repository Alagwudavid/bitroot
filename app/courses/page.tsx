"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Play, Clock, Users, Search, BookOpen, Star, Eye } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export default function CoursesPage() {
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
      price: "Free",
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
      price: "$49",
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
      price: "$29",
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
      price: "$39",
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
      price: "$35",
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
      price: "$25",
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
    <div className="min-h-screen max-w-5xl w-full bg-background text-foreground flex flex-col pb-6">
      {/* Main Section */}
      {/* Search Bar */}
      <div className="w-full max-w-4xl px-4 md:px-8">
        <div className="relative w-full">
          <Input
            placeholder={`Search courses...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-12 py-4 rounded-full bg-[#f5f6fa] dark:bg-[#101828] border border-gray-300 dark:border-gray-700 text-lg shadow-sm focus:ring-2 focus:ring-[#7037e4]"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7037e4] w-6 h-6" />
        </div>
      </div>
      {/* Bottom Navigation (Tabs) */}
      <div className="fixed md:static bottom-0 left-0 w-full bg-background z-10 border-t md:border-0 flex justify-center py-3 px-4 md:px-8">
        <div className="flex flex-row gap-2 md:gap-4 overflow-x-auto px-2 md:px-0">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-full px-6 py-2 font-semibold text-base whitespace-nowrap ${
                selectedCategory === category.id
                  ? "bg-[#7037e4] text-white dark:bg-[#8ddeed] dark:text-[#010B13]"
                  : "bg-white dark:bg-[#101828] text-[#101828] dark:text-[#fafafa] border border-[#e0e7ef] dark:border-[#23263a]"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between max-w-7xl mx-auto w-full px-4 md:px-8 pt-10 gap-5">
        {/* Left: Headline, Search, Tabs, Tags */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl w-full">
          <h1 className="text-4xl font-extrabold leading-tight mb-0 text-[#101828] dark:text-[#fafafa]">
            Earn as you teach,<br />learn as you grow
          </h1>
          <p className="text-lg text-gray-600 dark:text-[#fafafa]/70 my-4">
              "Explore work from the most talented and accomplished instructors ready to help you master a new language.
          </p>
          {/* Tabs */}
          <div className="flex items-center gap-2 mb-6">
            <Button
              variant={"default"}
              className={`rounded-full px-6 py-2 font-semibold text-base bg-[#101828] text-white dark:bg-[#fafafa] dark:text-[#101828]`}
              // onClick={() => setSelectedTab("courses")}
            >
              My courses
            </Button>
            <Button
              variant={"outline"}
              className={`rounded-full px-6 py-2 font-semibold text-base bg-white dark:bg-[#101828] text-[#101828] dark:text-[#fafafa]`}
              // onClick={() => setSelectedTab("instructors")}
            >
              Earn
            </Button>
          </div>
        </div>
        {/* Right: Dynamic Featured Card */}
          <div className="rounded-3xl bg-[#fdf6fa] dark:bg-[#23263a] flex items-center justify-center overflow-hidden w-60 h-60 relative">
                <>
                  <img
                    src={"/placeholder.svg?height=300&width=300"}
                    alt="Most Viewed Playlist"
                    className="object-contain w-full h-full rounded-2xl shadow-lg"
                  />
                </>
          </div>
      </div>
      {/* Tab Content Grids */}
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 mt-8 md:mt-16">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl capitalize font-bold mb-6 text-[#101828] dark:text-[#fafafa]">
               Recommended courses for you
            </h2>
            <Link href="/courses" className="text-blue-500 hover:underline inline-block">
              See All
            </Link>
          </div>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-80 w-full rounded-md" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {filteredCourses.map((course) => {
                // Determine if this is the bestseller
                const isBestseller =
                  course.id ===
                  featuredCourses.reduce(
                    (max, c) => (c.students > max.students ? c : max),
                    featuredCourses[0]
                  ).id;
                // For demo, fake old price as +40%
                const oldPrice = course.price.startsWith("₦")
                  ? `₦${(
                      parseInt(course.price.replace(/\D/g, "")) * 1.4
                    ).toLocaleString()}`
                  : course.price === "Free"
                  ? ""
                  : `₦${(12900 * 1.4).toLocaleString()}`;
                return (
                  <Card
                    key={course.id}
                    className="bg-white dark:bg-[#101828] rounded-md shadow-md border border-gray-200 dark:border-[#23263a] flex flex-col overflow-hidden hover:shadow-lg transition-all duration-200"
                  >
                    <div className="w-full h-44 bg-gray-100 dark:bg-[#23263a] flex items-center justify-center overflow-hidden border-b border-gray-200 dark:border-[#23263a]">
                      <img
                        src={course.thumbnail || "/placeholder.svg"}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-extrabold text-[#101828] dark:text-[#fafafa] mb-1 leading-tight">
                        {course.title}
                      </h3>
                      <div className="text-sm text-gray-700 dark:text-[#fafafa]/80 mb-2">
                        {course.instructor}
                      </div>
                      <div className="flex items-center gap-1 text-[#f59e42] font-semibold text-base mb-1">
                        <span>{course.rating.toFixed(1)}</span>
                        <span className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.round(course.rating)
                                  ? "text-[#f59e42]"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                            </svg>
                          ))}
                        </span>
                        <span className="text-gray-500 text-xs font-normal ml-1">
                          ({(course.students * 10).toLocaleString()})
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mb-2 mt-1">
                        <span className="text-lg font-bold text-[#101828] dark:text-[#8ddeed]">
                          {course.price.startsWith("₦")
                            ? course.price
                            : "₦12,900"}
                        </span>
                        {oldPrice && (
                          <span className="text-gray-400 text-base line-through">
                            {oldPrice}
                          </span>
                        )}
                      </div>
                      {isBestseller && (
                        <span className="inline-block bg-[#d1fae5] text-[#065f46] px-3 py-1 rounded text-xs font-semibold mb-2 w-fit">
                          Bestseller
                        </span>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </div>
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 mt-12">
          <h2 className="text-2xl font-bold mb-6 text-[#101828] dark:text-[#fafafa]">
            Top Instructors
          </h2>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-80 w-full rounded-3xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {filteredTeachers.map((teacher) => (
                <Card
                  key={teacher.name}
                  className="flex flex-col items-center bg-white dark:bg-[#101828] rounded-3xl shadow-md border-0 p-8 transition hover:shadow-lg min-h-[320px]"
                >
                  <div className="w-24 h-24 rounded-full bg-[#f5f6fa] dark:bg-[#23263a] flex items-center justify-center mb-4 overflow-hidden">
                    <img
                      src={teacher.avatar}
                      alt={teacher.name}
                      className="w-24 h-24 object-cover rounded-full border-4 border-[#7037e4] dark:border-[#8ddeed]"
                    />
                  </div>
                  <div className="flex flex-col items-center flex-1 w-full">
                    <h3 className="text-lg font-extrabold text-[#101828] dark:text-[#fafafa] mb-1 text-center">
                      {teacher.name}
                    </h3>
                    <p className="text-gray-500 dark:text-[#fafafa]/70 text-base mb-4 text-center">
                      {teacher.bio}
                    </p>
                    <span className="bg-[#f5f6fa] dark:bg-[#23263a] text-[#7037e4] dark:text-[#8ddeed] px-4 py-1 rounded-full text-xs font-semibold mb-4">
                      {teacher.courses} course{teacher.courses > 1 ? "s" : ""}
                    </span>
                    <Button className="rounded-full bg-[#f43f7e] hover:bg-[#e11d48] text-white px-6 py-2 text-sm font-semibold mt-auto">
                      View Profile
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8 mt-12 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-[#101828] dark:text-[#fafafa]">
            Curated Playlists
          </h2>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-64 w-full rounded-2xl" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredPlaylists.map((playlist) => (
                <Card
                  key={playlist.id}
                  className="rounded-2xl bg-white dark:bg-[#101828] border-0 shadow flex flex-col relative"
                >
                  <img
                    src={playlist.thumbnail}
                    alt={playlist.title}
                    className="w-full h-32 object-cover rounded-t-2xl"
                  />
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-[#101828] dark:text-[#fafafa] mb-1">
                      {playlist.title}
                    </h3>
                    <p className="text-gray-500 dark:text-[#fafafa]/70 text-sm mb-2 flex-1">
                      {playlist.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400 dark:text-[#fafafa]/50 mt-2">
                      <span>{playlist.totalCourses} courses</span>
                      <span>{playlist.views} lessons</span>
                    </div>
                    <div className="flex items-center mt-4 justify-end">
                      <Button className="rounded-full bg-[#7037e4] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#010B13] px-4 py-2 text-sm font-semibold absolute bottom-4 right-4">
                        View Playlist
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
    </div>
  );
}
