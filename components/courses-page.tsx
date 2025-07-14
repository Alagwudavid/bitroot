"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Clock, Users, Search, BookOpen, Star, Eye } from "lucide-react"

export function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", label: "All Courses" },
    { id: "beginner", label: "Beginner" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced" },
    { id: "culture", label: "Culture" },
    { id: "business", label: "Business" },
  ]

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
      description: "Master the basics of Swahili with this comprehensive course designed for complete beginners.",
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
      description: "Learn professional Yoruba for business settings and formal communications.",
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
      description: "Explore Ethiopian culture while learning Amharic language fundamentals.",
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
      description: "Deep dive into complex Hausa grammar structures and advanced language concepts.",
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
      description: "Build upon your Igbo foundation with intermediate-level conversations and grammar.",
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
      description: "Perfect your Zulu pronunciation with expert guidance and practice exercises.",
    },
  ]

  const playlists = [
    {
      id: 1,
      title: "African Languages Fundamentals",
      videos: 25,
      thumbnail: "/placeholder.svg?height=150&width=200",
      description: "Essential basics across multiple African languages",
      duration: "8 hours",
    },
    {
      id: 2,
      title: "Cultural Context in Language Learning",
      videos: 18,
      thumbnail: "/placeholder.svg?height=150&width=200",
      description: "Understanding culture through language",
      duration: "6 hours",
    },
    {
      id: 3,
      title: "Business African Languages",
      videos: 32,
      thumbnail: "/placeholder.svg?height=150&width=200",
      description: "Professional communication skills",
      duration: "12 hours",
    },
    {
      id: 4,
      title: "Pronunciation Guides",
      videos: 15,
      thumbnail: "/placeholder.svg?height=150&width=200",
      description: "Master authentic pronunciation",
      duration: "4 hours",
    },
  ]

  const filteredCourses = featuredCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-[#fafafa] mb-2">Language Learning Courses</h1>
        <p className="text-gray-600 dark:text-[#fafafa]/70">Comprehensive video courses to master African languages</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search courses, instructors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 rounded-xl dark:bg-[#0d1117] dark:border-[#7037e4]/30"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`rounded-xl whitespace-nowrap ${
                selectedCategory === category.id
                  ? "bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318]"
                  : "dark:border-[#7037e4]/30 dark:hover:bg-[#7037e4]/20"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      <Tabs defaultValue="courses" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 max-w-md rounded-xl dark:bg-[#0d1117]">
          <TabsTrigger value="courses" className="rounded-xl">
            Courses
          </TabsTrigger>
          <TabsTrigger value="playlists" className="rounded-xl">
            Playlists
          </TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-6">
          {/* Featured Course */}
          <Card className="rounded-2xl overflow-hidden dark:bg-[#0d1117] dark:border-[#7037e4]/30">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredCourses[0].thumbnail || "/placeholder.svg"}
                  alt={featuredCourses[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button size="lg" className="rounded-full bg-white/90 hover:bg-white text-black">
                    <Play className="w-6 h-6 mr-2" />
                    Watch Preview
                  </Button>
                </div>
              </div>
              <CardContent className="p-8">
                <Badge className="bg-[#fcf300] text-[#072ac8] hover:bg-[#ffc600] mb-4">Featured Course</Badge>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-[#fafafa] mb-2">
                  {featuredCourses[0].title}
                </h2>
                <p className="text-gray-600 dark:text-[#fafafa]/70 mb-4">{featuredCourses[0].description}</p>
                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500 dark:text-[#fafafa]/60">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredCourses[0].duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="w-4 h-4" />
                    <span>{featuredCourses[0].lessons} lessons</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{featuredCourses[0].students.toLocaleString()} students</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{featuredCourses[0].rating}</span>
                    </div>
                    <span className="text-2xl font-bold text-[#072ac8] dark:text-[#8ddeed]">
                      {featuredCourses[0].price}
                    </span>
                  </div>
                  <Button className="rounded-xl bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318]">
                    Enroll Now
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.slice(1).map((course) => (
              <Card
                key={course.id}
                className="rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200 dark:bg-[#0d1117] dark:border-[#7037e4]/30 dark:hover:border-[#7037e4]"
              >
                <div className="relative">
                  <img
                    src={course.thumbnail || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="sm" className="rounded-full bg-white/90 hover:bg-white text-black">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                  <Badge className="absolute top-3 left-3 bg-black/70 text-white">{course.duration}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-[#fafafa] mb-2 line-clamp-2">{course.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-[#fafafa]/70 mb-2">by {course.instructor}</p>
                  <p className="text-xs text-gray-500 dark:text-[#fafafa]/60 mb-3 line-clamp-2">{course.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-[#fafafa]/60">
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-3 h-3" />
                        <span>{course.lessons}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#072ac8] dark:text-[#8ddeed]">{course.price}</span>
                    <Button
                      size="sm"
                      className="rounded-xl bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318]"
                    >
                      Enroll
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="playlists" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {playlists.map((playlist) => (
              <Card
                key={playlist.id}
                className="rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200 dark:bg-[#0d1117] dark:border-[#7037e4]/30 dark:hover:border-[#7037e4]"
              >
                <div className="relative">
                  <img
                    src={playlist.thumbnail || "/placeholder.svg"}
                    alt={playlist.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="w-8 h-8 mx-auto mb-1" />
                      <span className="text-sm font-medium">{playlist.videos} videos</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-800 dark:text-[#fafafa] mb-2">{playlist.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-[#fafafa]/70 mb-3">{playlist.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-[#fafafa]/60">
                      <Clock className="w-3 h-3" />
                      <span>{playlist.duration}</span>
                    </div>
                    <Button size="sm" variant="outline" className="rounded-xl dark:border-[#7037e4]/30 bg-transparent">
                      <Eye className="w-3 h-3 mr-1" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
