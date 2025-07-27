export interface LanguagePost {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
    level: string;
    type: "user" | "creator" | "instructor";
    verified?: boolean;
  };
  content: string;
  language: {
    name: string;
    flag: string;
    color: string;
  };
  community?: {
    name: string;
    flag: string;
    color: string;
  };
  media: {
    type: "image" | "video";
    url: string;
    thumbnail?: string;
    duration?: string;
  };
  caption?: string;
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  impressions: number;
  tags: string[];
  liked?: boolean;
}

export const languagePosts: LanguagePost[] = [
  {
    id: "lang1",
    author: {
      name: "Sofia Martinez",
      username: "sofia_learns",
      avatar: "/placeholder-user.jpg",
      type: "user",
      level: "Intermediate",
      verified: true,
    },
    content: "Finally nailed the Spanish rolling 'R' after 6 months of practice! 🎉 The key was practicing with the word 'perro' every morning. Here's my pronunciation journey!",
    language: {
      name: "Spanish",
      flag: "es",
      color: "#FF6B35",
    },
    community: {
      name: "Spanish Learners Hub",
      flag: "es",
      color: "#FF6B35",
    },
    media: {
      type: "video",
      url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400",
      duration: "2:34",
    },
    caption: "From struggling to rolling Rs like a native! 🇪🇸",
    timestamp: "2h",
    likes: 156,
    comments: 23,
    shares: 12,
    impressions: 2340,
    tags: ["pronunciation", "spanish", "milestone", "practice"],
    liked: true,
  },
  {
    id: "lang2",
    author: {
      name: "Kenji Tanaka",
      username: "kenji_nihongo",
      avatar: "/placeholder-user.jpg",
      type: "user",
      level: "Beginner",
      verified: false,
    },
    content: "Studied in this beautiful café in Kyoto today. The atmosphere really helps with memorizing kanji! ☕️📚",
    language: {
      name: "Japanese",
      flag: "jp",
      color: "#E74C3C",
    },
    community: {
      name: "Mandarin Beginners Hub",
      flag: "cn",
      color: "#3498DB",
    },
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600",
    },
    caption: "Nothing beats studying Japanese in Japan itself! 🏔️",
    timestamp: "4h",
    likes: 89,
    comments: 15,
    shares: 7,
    impressions: 1580,
    tags: ["kanji", "study", "kyoto", "cafe"],
    liked: false,
  },
  {
    id: "lang3",
    author: {
      name: "Marie Dubois",
      username: "marie_francais",
      avatar: "/placeholder-user.jpg",
      type: "instructor",
      level: "Advanced",
      verified: true,
    },
    content: "Had my first full conversation in French with a native speaker today! 🗣️ We talked about literature for 30 minutes straight. Feeling so proud of my progress!",
    language: {
      name: "French",
      flag: "fr",
      color: "#4A90E2",
    },
    community: {
      name: "Yoruba Culture & Language",
      flag: "ng",
      color: "#4A90E2",
    },
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600",
    },
    caption: "The moment when everything clicks! 💡",
    timestamp: "6h",
    likes: 234,
    comments: 45,
    shares: 28,
    impressions: 3420,
    tags: ["conversation", "milestone", "literature", "fluency"],
    liked: true,
  },
  {
    id: "lang4",
    author: {
      name: "Hans Mueller",
      username: "hans_deutsch",
      avatar: "/placeholder-user.jpg",
      type: "user",
      level: "Intermediate",
      verified: false,
    },
    content: "German grammar tip: Remember that 'der, die, das' articles change based on the case! Here's my visual guide to help you remember.",
    language: {
      name: "German",
      flag: "de",
      color: "#F39C12",
    },
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600",
    },
    caption: "Grammar doesn't have to be scary! 📝",
    timestamp: "8h",
    likes: 127,
    comments: 31,
    shares: 15,
    impressions: 2100,
    tags: ["grammar", "tips", "articles", "beginner"],
    liked: false,
  },
  {
    id: "lang5",
    author: {
      name: "Isabella Romano",
      username: "bella_italiano",
      avatar: "/placeholder-user.jpg",
      type: "user",
      level: "instructor",
      verified: false,
    },
    content: "Cooking authentic pasta while learning Italian vocabulary! 🍝 Nothing beats learning through doing. Today's words: aglio (garlic), basilico (basil), pomodoro (tomato).",
    language: {
      name: "Italian",
      flag: "it",
      color: "#27AE60",
    },
    community: {
      name: "Zulu Conversations",
      flag: "za",
      color: "#E74C3C",
    },
    media: {
      type: "video",
      url: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400",
      thumbnail: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400",
      duration: "4:12",
    },
    caption: "Learning Italian through my nonna's recipes! 👵🏻🇮🇹",
    timestamp: "10h",
    likes: 198,
    comments: 28,
    shares: 19,
    impressions: 2890,
    tags: ["cooking", "vocabulary", "culture", "immersion"],
    liked: true,
  },
  {
    id: "lang6",
    author: {
      name: "Lucas Silva",
      username: "lucas_pt",
      avatar: "/placeholder-user.jpg",
      type: "user",
      level: "Advanced",
      verified: true,
    },
    content: "Exploring beautiful Portugal while practicing my Portuguese! 🏔️ The locals are so patient and helpful when I make mistakes. Obrigado! 🙏",
    language: {
      name: "Portuguese",
      flag: "pt",
      color: "#8E44AD",
    },
    media: {
      type: "image",
      url: "https://images.unsplash.com/photo-1517022812141-236209615c96?w=600",
    },
    caption: "Language learning is best done through travel! ✈️",
    timestamp: "12h",
    likes: 312,
    comments: 52,
    shares: 34,
    impressions: 4150,
    tags: ["travel", "immersion", "portugal", "culture"],
    liked: false,
  },
];