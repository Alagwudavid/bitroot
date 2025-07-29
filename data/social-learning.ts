import { SocialPost, User, Achievement, StudyCommunity, PostType, SubjectArea } from "@/types/social-learning";

// Sample users
export const sampleUsers: User[] = [
    {
        id: "user1",
        username: "sofia_learns",
        displayName: "Sofia Martinez",
        avatar: "/placeholder-user.jpg",
        bio: "Passionate language learner exploring Spanish, French, and Italian 🌍",
        type: "student",
        verified: true,
        level: 15,
        xp: 12450,
        joinDate: "2023-06-15",
        location: "Barcelona, Spain",
        languages: ["Spanish", "French", "English"],
        subjects: ["language"],
        achievements: [],
        followers: 1240,
        following: 380,
        streak: {
            current: 45,
            longest: 89,
            lastActive: "2024-01-27"
        },
        preferences: {
            publicProfile: true,
            showProgress: true,
            mentorshipAvailable: false
        }
    },
    {
        id: "user2",
        username: "prof_chen",
        displayName: "Dr. Marcus Chen",
        avatar: "/placeholder-user.jpg",
        bio: "Mathematics professor and AI researcher. Making complex concepts simple 📊",
        type: "educator",
        verified: true,
        level: 28,
        xp: 34560,
        joinDate: "2023-03-20",
        location: "MIT, Cambridge",
        languages: ["English", "Mandarin"],
        subjects: ["mathematics", "technology"],
        achievements: [],
        followers: 5680,
        following: 120,
        streak: {
            current: 120,
            longest: 240,
            lastActive: "2024-01-27"
        },
        preferences: {
            publicProfile: true,
            showProgress: true,
            mentorshipAvailable: true
        }
    },
    {
        id: "user3",
        username: "art_mentor_sarah",
        displayName: "Sarah Kim",
        avatar: "/placeholder-user.jpg",
        bio: "Digital artist and mentor helping others discover their creative potential 🎨",
        type: "mentor",
        verified: false,
        level: 22,
        xp: 18900,
        joinDate: "2023-08-10",
        location: "Seoul, South Korea",
        languages: ["Korean", "English", "Japanese"],
        subjects: ["arts"],
        achievements: [],
        followers: 890,
        following: 456,
        streak: {
            current: 78,
            longest: 156,
            lastActive: "2024-01-27"
        },
        preferences: {
            publicProfile: true,
            showProgress: true,
            mentorshipAvailable: true
        }
    },
    {
        id: "user4",
        username: "codemaster_alex",
        displayName: "Alex Rivera",
        avatar: "/placeholder-user1.png",
        bio: "Senior Software Engineer & Programming Instructor. Teaching coding to the next generation 💻",
        type: "expert",
        verified: true,
        level: 32,
        xp: 45200,
        joinDate: "2023-01-15",
        location: "San Francisco, CA",
        languages: ["English", "Spanish"],
        subjects: ["technology"],
        achievements: [],
        followers: 8940,
        following: 89,
        streak: {
            current: 200,
            longest: 365,
            lastActive: "2024-01-27"
        },
        preferences: {
            publicProfile: true,
            showProgress: true,
            mentorshipAvailable: true
        }
    },
    {
        id: "user5",
        username: "linguist_emma",
        displayName: "Emma Thompson",
        avatar: "/placeholder-user.jpg",
        bio: "Polyglot & Language Creation Expert. Helping others master multiple languages 🌐",
        type: "expert",
        verified: true,
        level: 29,
        xp: 38750,
        joinDate: "2023-02-28",
        location: "London, UK",
        languages: ["English", "French", "German", "Italian", "Mandarin"],
        subjects: ["language"],
        achievements: [],
        followers: 6540,
        following: 234,
        streak: {
            current: 180,
            longest: 245,
            lastActive: "2024-01-27"
        },
        preferences: {
            publicProfile: true,
            showProgress: true,
            mentorshipAvailable: true
        }
    }
];

// Sample achievements
export const sampleAchievements: Achievement[] = [
    {
        id: "ach1",
        title: "First Steps",
        description: "Complete your first lesson",
        icon: "🎯",
        category: "learning",
        rarity: "common",
        xpReward: 50,
        unlockedAt: "2024-01-15T10:00:00Z"
    },
    {
        id: "ach2",
        title: "Social Butterfly",
        description: "Make 10 posts in the community",
        icon: "🦋",
        category: "social",
        rarity: "rare",
        xpReward: 200,
        unlockedAt: "2024-01-20T15:30:00Z"
    },
    {
        id: "ach3",
        title: "Streak Master",
        description: "Maintain a 30-day learning streak",
        icon: "🔥",
        category: "milestone",
        rarity: "epic",
        xpReward: 500,
        unlockedAt: "2024-01-25T09:15:00Z"
    }
];

// Sample social learning posts
export const socialLearningPosts: SocialPost[] = [
    {
        id: "post1",
        author: sampleUsers[0],
        type: "achievement",
        content: "Just completed my 30-day Spanish learning streak! 🎉 Started with basic greetings and now I can hold conversations about travel and food. The key was consistency - just 15 minutes every morning with my coffee ☕️",
        subject: "language",
        language: {
            name: "Spanish",
            flag: "es",
            color: "#FF6B35"
        },
        community: {
            id: "spanish-learners",
            name: "Spanish Learners Hub",
            flag: "es",
            color: "#FF6B35"
        },
        media: [
            {
                type: "image",
                url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600",
                title: "My study setup"
            }
        ],
        tags: ["spanish", "streak", "milestone", "consistency"],
        timestamp: "2h",
        engagement: {
            likes: 234,
            comments: 45,
            shares: 28,
            saves: 67,
            views: 2340,
            gifts: 8,
            reactions: {
                like: 156,
                love: 45,
                celebrate: 33
            }
        },
        studyData: {
            timeSpent: 450,
            difficulty: "intermediate",
            skills: ["conversation", "vocabulary", "pronunciation"],
            resources: ["Duolingo", "SpanishPod101", "Netflix shows"]
        },
        isLiked: true,
        isSaved: false
    },
    {
        id: "post2",
        author: sampleUsers[1],
        type: "tip",
        content: "📊 Quick tip for mastering calculus derivatives: Think of them as slopes! When you see f'(x), you're asking 'how steep is this curve at point x?' I use this visualization technique with my students and it clicks every time.",
        subject: "mathematics",
        community: {
            id: "math-community",
            name: "Math Enthusiasts",
            color: "#4A90E2"
        },
        media: [
            {
                type: "image",
                url: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600",
                title: "Derivative visualization"
            }
        ],
        tags: ["calculus", "derivatives", "visualization", "teaching"],
        timestamp: "4h",
        engagement: {
            likes: 189,
            comments: 32,
            shares: 15,
            saves: 98,
            views: 1890,
            gifts: 24,
            reactions: {
                like: 134,
                love: 28,
                celebrate: 27
            }
        },
        studyData: {
            difficulty: "advanced",
            skills: ["calculus", "mathematical thinking"],
        },
        isLiked: false,
        isSaved: true
    },
    {
        id: "post3",
        author: sampleUsers[2],
        type: "project",
        content: "Finished my digital painting of a traditional Korean hanbok! 🎨 This project helped me learn about color theory, traditional patterns, and cultural symbolism. Art is such a beautiful way to explore different cultures.",
        subject: "arts",
        community: {
            id: "art-culture",
            name: "Art & Culture Exchange",
            color: "#E74C3C"
        },
        media: [
            {
                type: "image",
                url: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600",
                title: "Traditional Hanbok Digital Art"
            }
        ],
        tags: ["digitalart", "korean", "culture", "colortheory"],
        timestamp: "6h",
        engagement: {
            likes: 345,
            comments: 67,
            shares: 23,
            saves: 123,
            views: 2890,
            reactions: {
                like: 189,
                love: 98,
                celebrate: 58
            }
        },
        studyData: {
            timeSpent: 240,
            difficulty: "intermediate",
            skills: ["digital painting", "color theory", "cultural studies"],
        },
        isLiked: true,
        isSaved: true
    },
    {
        id: "post4",
        author: sampleUsers[0],
        type: "question",
        content: "Question for my fellow language learners: How do you maintain motivation during plateau periods? I've been stuck at the same French level for weeks and feeling discouraged 😔",
        subject: "language",
        language: {
            name: "French",
            flag: "fr",
            color: "#4A90E2"
        },
        community: {
            id: "language-support",
            name: "Language Learning Support Group",
            color: "#8E44AD"
        },
        tags: ["motivation", "plateau", "french", "help"],
        timestamp: "8h",
        engagement: {
            likes: 67,
            comments: 89,
            shares: 12,
            saves: 34,
            views: 1240,
            reactions: {
                like: 42,
                love: 15,
                celebrate: 10
            }
        },
        isLiked: false,
        isSaved: false
    },
    {
        id: "post5",
        author: sampleUsers[1],
        type: "collaboration",
        content: "🤝 Starting a Python study group for beginners! We'll meet twice a week online to work through coding challenges together. Looking for 4-5 committed learners who want to build real projects while learning.",
        subject: "technology",
        community: {
            id: "python-learners",
            name: "Python Programming Community",
            color: "#27AE60"
        },
        media: [
            {
                type: "image",
                url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600",
                title: "Python coding session"
            }
        ],
        tags: ["python", "studygroup", "programming", "beginners"],
        timestamp: "12h",
        engagement: {
            likes: 145,
            comments: 28,
            shares: 19,
            saves: 56,
            views: 1567,
            gifts: 18,
            reactions: {
                like: 98,
                love: 25,
                celebrate: 22
            }
        },
        collaboration: {
            isCollaborative: true,
            maxParticipants: 5,
            currentParticipants: [sampleUsers[1]]
        },
        studyData: {
            difficulty: "beginner",
            skills: ["python", "programming fundamentals", "problem solving"],
        },
        isLiked: false,
        isSaved: true
    },
    {
        id: "post6",
        author: sampleUsers[2],
        type: "milestone",
        content: "🎯 Major milestone achieved! Just completed my 100th digital artwork and launched my first online art course. Thank you to this amazing community for all the support and feedback along the way!",
        subject: "arts",
        community: {
            id: "art-mentors",
            name: "Art Mentors Circle",
            color: "#F39C12"
        },
        media: [
            {
                type: "image",
                url: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600",
                title: "Art portfolio milestone"
            }
        ],
        tags: ["milestone", "digitalart", "teaching", "portfolio"],
        timestamp: "1d",
        engagement: {
            likes: 456,
            comments: 78,
            shares: 34,
            saves: 89,
            views: 3456,
            reactions: {
                like: 267,
                love: 124,
                celebrate: 65
            }
        },
        studyData: {
            timeSpent: 2400, // 40 hours over time
            difficulty: "advanced",
            skills: ["digital art", "course creation", "teaching"],
        },
        isLiked: true,
        isSaved: false
    },
    {
        id: "post7",
        author: sampleUsers[3], // Alex Rivera - codemaster_alex
        type: "tip",
        content: "🚀 Pro tip for JavaScript developers: Use async/await instead of callback hell! Here's a clean pattern I teach in my courses. Your code will be more readable and easier to debug. Who else has made this switch?",
        subject: "technology",
        community: {
            id: "javascript-devs",
            name: "JavaScript Developers",
            color: "#F7DF1E"
        },
        media: [
            {
                type: "image",
                url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600",
                title: "JavaScript code example"
            }
        ],
        tags: ["javascript", "async", "programming", "tutorial"],
        timestamp: "6h",
        engagement: {
            likes: 267,
            comments: 45,
            shares: 32,
            saves: 156,
            views: 3240,
            gifts: 42,
            reactions: {
                like: 189,
                love: 45,
                celebrate: 33
            }
        },
        studyData: {
            timeSpent: 30,
            difficulty: "intermediate",
            skills: ["JavaScript", "Async Programming", "Clean Code"],
            resources: ["MDN Web Docs", "JavaScript.info"]
        },
        isLiked: false,
        isSaved: true
    },
    {
        id: "post8",
        author: sampleUsers[4], // Emma Thompson - linguist_emma
        type: "resource",
        content: "🌍 My secret to learning 5 languages fluently: Immersion techniques you can do from home! I've created a comprehensive guide covering pronunciation hacks, memory techniques, and daily practice routines that actually work.",
        subject: "language",
        community: {
            id: "polyglot-community",
            name: "Polyglot Community",
            color: "#9B59B6"
        },
        media: [
            {
                type: "image",
                url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600",
                title: "Language learning resources"
            }
        ],
        tags: ["polyglot", "language-learning", "immersion", "pronunciation"],
        timestamp: "8h",
        engagement: {
            likes: 334,
            comments: 67,
            shares: 89,
            saves: 298,
            views: 4567,
            gifts: 78,
            reactions: {
                like: 234,
                love: 67,
                celebrate: 33
            }
        },
        studyData: {
            timeSpent: 45,
            difficulty: "advanced",
            skills: ["Language Learning", "Pronunciation", "Memory Techniques"],
            resources: ["Language Exchange Apps", "Native Content", "Pronunciation Tools"]
        },
        isLiked: true,
        isSaved: true
    },
    {
        id: "post9",
        author: sampleUsers[3], // Alex Rivera - codemaster_alex
        type: "poll",
        content: "",
        subject: "technology",
        community: {
            id: "javascript-devs",
            name: "JavaScript Developers",
            color: "#F7DF1E"
        },
        tags: ["javascript", "framework", "poll"],
        timestamp: "3h",
        engagement: {
            likes: 89,
            comments: 34,
            shares: 12,
            saves: 23,
            views: 1234,
            reactions: {
                like: 56,
                love: 18,
                celebrate: 15
            }
        },
        poll: {
            question: "Which JavaScript framework do you prefer for building modern web applications?",
            options: ["React", "Vue.js", "Angular", "Svelte"],
            votes: {
                "React": 145,
                "Vue.js": 67,
                "Angular": 34,
                "Svelte": 23
            },
            endTime: "2024-01-28T15:30:00Z"
        },
        isLiked: false,
        isSaved: false
    },
    {
        id: "post10",
        author: sampleUsers[1], // Dr. Marcus Chen
        type: "study-session",
        content: "Just wrapped up an intense 2-hour calculus review session covering limits and continuity. We worked through challenging problems and had some great 'aha!' moments. Group study really makes complex topics more digestible! 📚",
        subject: "mathematics",
        community: {
            id: "math-study-group",
            name: "Mathematics Study Circle",
            color: "#4A90E2"
        },
        tags: ["calculus", "limits", "group-study", "session"],
        timestamp: "1h",
        engagement: {
            likes: 156,
            comments: 28,
            shares: 15,
            saves: 67,
            views: 1890,
            reactions: {
                like: 98,
                love: 34,
                celebrate: 24
            }
        },
        studyData: {
            timeSpent: 120,
            difficulty: "advanced",
            skills: ["calculus", "limits", "continuity"]
        },
        isLiked: true,
        isSaved: false
    },
    {
        id: "post11",
        author: sampleUsers[4], // Emma Thompson - linguist_emma
        type: "resource",
        content: "Discovered an amazing podcast series for intermediate French learners! The hosts speak at a perfect pace and cover everyday topics with cultural insights. Highly recommend for anyone looking to improve listening skills.",
        subject: "language",
        language: {
            name: "French",
            flag: "fr",
            color: "#4A90E2"
        },
        community: {
            id: "french-learners",
            name: "French Learning Community",
            color: "#4A90E2"
        },
        tags: ["french", "podcast", "listening", "resource"],
        timestamp: "5h",
        engagement: {
            likes: 234,
            comments: 45,
            shares: 78,
            saves: 189,
            views: 2456,
            reactions: {
                like: 167,
                love: 43,
                celebrate: 24
            }
        },
        linkData: {
            url: "https://example.com/french-podcast",
            title: "Café Français - Intermediate French Podcast",
            description: "Daily conversations about French culture, current events, and everyday life",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300"
        },
        isLiked: false,
        isSaved: true
    },
    {
        id: "post12",
        author: sampleUsers[2], // Sarah Kim
        type: "collaboration",
        content: "Looking for creative partners to work on a digital art exhibition about cultural diversity! We'll create a virtual gallery showcasing art from different cultures around the world. Perfect opportunity to learn about art techniques while exploring global perspectives.",
        subject: "arts",
        community: {
            id: "creative-arts",
            name: "Creative Arts Workshop",
            color: "#E74C3C"
        },
        tags: ["collaboration", "digital-art", "culture", "exhibition"],
        timestamp: "2d",
        engagement: {
            likes: 178,
            comments: 56,
            shares: 23,
            saves: 89,
            views: 1678,
            reactions: {
                like: 123,
                love: 34,
                celebrate: 21
            }
        },
        collaboration: {
            isCollaborative: true,
            maxParticipants: 8,
            currentParticipants: [sampleUsers[2]],
            title: "Global Perspectives Digital Art Exhibition"
        },
        isLiked: true,
        isSaved: true
    }];

// Sample study communities for social learning
export const socialStudyCommunities: StudyCommunity[] = [
    {
        id: "spanish-learners",
        name: "Spanish Learners Hub",
        description: "A vibrant community for Spanish language learners of all levels",
        category: "language",
        language: "Spanish",
        flag: "es",
        color: "#FF6B35",
        members: 15420,
        posts: 2340,
        moderators: [sampleUsers[0]],
        rules: [
            "Be respectful and supportive of all learners",
            "Practice Spanish as much as possible",
            "Share resources and tips freely",
            "No spam or self-promotion without permission"
        ],
        isPrivate: false,
        requiresApproval: false,
        tags: ["spanish", "conversation", "grammar", "culture"],
        createdAt: "2023-05-15",
        trending: true,
        level: "all"
    },
    {
        id: "math-study-group",
        name: "Mathematics Study Circle",
        description: "Collaborative space for mathematics learners and enthusiasts",
        category: "subject",
        subject: "mathematics",
        color: "#4A90E2",
        members: 8900,
        posts: 1560,
        moderators: [sampleUsers[1]],
        rules: [
            "Show your work when asking for help",
            "Explain concepts clearly when helping others",
            "Use proper mathematical notation",
            "Be patient with beginners"
        ],
        isPrivate: false,
        requiresApproval: false,
        tags: ["algebra", "calculus", "geometry", "statistics"],
        createdAt: "2023-06-20",
        trending: true,
        level: "all"
    },
    {
        id: "creative-arts",
        name: "Creative Arts Workshop",
        description: "Express yourself through art while learning new techniques and cultural perspectives",
        category: "subject",
        subject: "arts",
        color: "#E74C3C",
        members: 6750,
        posts: 890,
        moderators: [sampleUsers[2]],
        rules: [
            "Share your creative process, not just final results",
            "Provide constructive feedback on others' work",
            "Respect different artistic styles and cultures",
            "Credit sources and inspirations"
        ],
        isPrivate: false,
        requiresApproval: false,
        tags: ["digital art", "traditional art", "design", "culture"],
        createdAt: "2023-07-10",
        trending: false,
        level: "all"
    },
    {
        id: "python-beginners",
        name: "Python Programming for Beginners",
        description: "Learn Python programming from scratch with supportive community",
        category: "subject",
        subject: "technology",
        color: "#27AE60",
        members: 12340,
        posts: 1890,
        moderators: [sampleUsers[1]],
        rules: [
            "Ask questions without hesitation",
            "Share code snippets when seeking help",
            "Help debug others' code when possible",
            "Practice coding regularly"
        ],
        isPrivate: false,
        requiresApproval: false,
        tags: ["python", "programming", "coding", "beginners"],
        createdAt: "2023-04-25",
        trending: true,
        level: "beginner"
    },
    {
        id: "study-accountability",
        name: "Study Accountability Partners",
        description: "Find study partners and accountability buddies across all subjects",
        category: "general",
        color: "#8E44AD",
        members: 4560,
        posts: 670,
        moderators: [sampleUsers[0], sampleUsers[2]],
        rules: [
            "Commit to your study goals",
            "Check in regularly with your accountability partner",
            "Be honest about your progress",
            "Support others in their learning journey"
        ],
        isPrivate: false,
        requiresApproval: true,
        tags: ["accountability", "study habits", "motivation", "goals"],
        createdAt: "2023-09-05",
        trending: false,
        level: "all"
    }
];

export const getCommunityById = (id: string): StudyCommunity | undefined => {
    return socialStudyCommunities.find(community => community.id === id);
};

export const getCommunitiesBySubject = (subject: SubjectArea): StudyCommunity[] => {
    return socialStudyCommunities.filter(community => community.subject === subject);
};

export const getTrendingCommunities = (): StudyCommunity[] => {
    return socialStudyCommunities.filter(community => community.trending);
};

export const getPostsByType = (type: PostType): SocialPost[] => {
    return socialLearningPosts.filter(post => post.type === type);
};

export const getPostsBySubject = (subject: SubjectArea): SocialPost[] => {
    return socialLearningPosts.filter(post => post.subject === subject);
};
