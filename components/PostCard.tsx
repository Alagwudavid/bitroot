"use client"

import React, { useState } from "react"
import { Heart, Timer, SmilePlus, MessageCircle, Share2, Bookmark, MoreHorizontal, Clock, Users, Star, Trophy, ThumbsUp, Smile, Gift, Zap, CalendarDays, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { VerifiedBadge } from "@/components/verified-badge"
// import { Separator } from "@/components/ui/separator"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { SocialPost } from "@/types/social-learning"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { SocialPost } from "@/types/social-learning"
import { Dot } from "@/components/ui/dot"

interface PostCardProps {
    post: SocialPost
}

const PostTypeIcon = ({ type }: { type: string }) => {
    switch (type) {
        case "achievement":
            return <Trophy className="size-4 mr-1" />
        case "tip":
            return <Star className="size-4 mr-1" />
        case "question":
            return <MessageCircle className="size-4 mr-1" />
        case "project":
            return <Zap className="size-4 mr-1" />
        case "collaboration":
            return <Users className="size-4 mr-1" />
        case "milestone":
            return <Trophy className="size-4 mr-1" />
        case "resource":
            return <ExternalLink className="size-4 mr-1" />
        case "study-session":
            return <Clock className="size-4 mr-1" />
        case "poll":
            return <MessageCircle className="size-4 mr-1" />
        default:
            return <MessageCircle className="size-4 mr-1" />
    }
}

const ReactionButton = ({
    icon: Icon,
    count,
    label,
    isActive,
    onClick,
    activeColor = "text-red-500"
}: {
    icon: any
    count?: number
    label?: string
    isActive: boolean
    onClick: () => void
    activeColor?: string
}) => (
    <Button
        variant="post_action"
        size="post_fit"
        className={`h-8 px-2 gap-1.5 rounded-full ${isActive ? activeColor : "text-muted-foreground hover:text-foreground"} transition-colors`}
        onClick={onClick}
    >
        <Icon className="size-6" />
        <span className="text-base font-medium">{label}</span>
        <span className="text-base font-medium">{count}</span>
    </Button>
)

// Mock user data for reactions
const mockUsers = [
    { id: "1", name: "Okoro Wisdom", avatar: "/placeholder-user.jpg", verified: true },
    { id: "2", name: "John Smith", avatar: "/placeholder-user1.png", verified: false },
    { id: "3", name: "Sarah Johnson", avatar: "/placeholder-user.jpg", verified: true },
    { id: "4", name: "Mike Davis", avatar: "/placeholder-user1.png", verified: false },
    { id: "5", name: "Emily Chen", avatar: "/placeholder-user.jpg", verified: false },
    { id: "6", name: "David Wilson", avatar: "/placeholder-user1.png", verified: true },
    { id: "7", name: "Lisa Anderson", avatar: "/placeholder-user.jpg", verified: false },
    { id: "8", name: "Alex Thompson", avatar: "/placeholder-user1.png", verified: false },
]

// Custom ReactionClick Component
const ReactionClick = ({
    children,
    onReactionSelect
}: {
    children: React.ReactNode
    onReactionSelect: (reaction: string) => void
}) => {
    const [showTooltip, setShowTooltip] = useState(false)

    const handleToggleTooltip = () => {
        setShowTooltip(!showTooltip)
    }

    const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as Element
        if (!target.closest('.reaction-tooltip-container')) {
            setShowTooltip(false)
        }
    }

    React.useEffect(() => {
        if (showTooltip) {
            document.addEventListener('click', handleClickOutside)
        } else {
            document.removeEventListener('click', handleClickOutside)
        }

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [showTooltip])

    const reactions = [
        { name: "like", icon: ThumbsUp, color: "text-blue-500", bgColor: "bg-blue-50 hover:bg-blue-100" },
        { name: "love", icon: Heart, color: "text-red-500", bgColor: "bg-red-50 hover:bg-red-100" },
        { name: "celebrate", icon: Trophy, color: "text-yellow-500", bgColor: "bg-yellow-50 hover:bg-yellow-100" },
        { name: "support", icon: Star, color: "text-purple-500", bgColor: "bg-purple-50 hover:bg-purple-100" },
        { name: "insightful", icon: Zap, color: "text-green-500", bgColor: "bg-green-50 hover:bg-green-100" },
        { name: "funny", icon: Smile, color: "text-orange-500", bgColor: "bg-orange-50 hover:bg-orange-100" },
    ]

    return (
        <div className="relative reaction-tooltip-container">
            <div onClick={handleToggleTooltip}>
                {children}
            </div>

            {showTooltip && (
                <div
                    className="absolute bottom-full left-0 mb-2 z-50"
                    style={{ animation: 'fadeIn 0.15s ease-out' }}
                >
                    {/* Tooltip content */}
                    <div className="bg-white rounded-full shadow-lg border px-2 py-2 flex gap-1">
                        {reactions.map((reaction) => {
                            const IconComponent = reaction.icon
                            return (
                                <div key={reaction.name} className="relative group">
                                    <button
                                        onClick={() => {
                                            onReactionSelect(reaction.name)
                                            setShowTooltip(false)
                                        }}
                                        className={`p-2 rounded-full transition-all duration-200 hover:scale-150 hover:-translate-y-4 ${reaction.bgColor}`}
                                    >
                                        <IconComponent className={`size-5 ${reaction.color}`} />
                                    </button>
                                    {/* Tooltip */}
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-1 px-2 py-1 bg-gray-800 dark:bg-[#222222] text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                                        {reaction.name}
                                        {/* Arrow pointing up */}
                                        {/* <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-gray-800"></div> */}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default function PostCard({ post }: PostCardProps) {
    const [isLiked, setIsLiked] = useState(post.isLiked)
    const [isSaved, setIsSaved] = useState(post.isSaved)
    const [showFullContent, setShowFullContent] = useState(false)
    const [reactionType, setReactionType] = useState<'like' | 'love' | 'celebrate' | null>(
        post.isLiked ? 'like' : null
    )
    const [showReactionModal, setShowReactionModal] = useState(false)
    const [activeReactionTab, setActiveReactionTab] = useState("all")

    // Mock data for users who reacted (in a real app, this would come from the API)
    const mockReactedUsers = {
        like: [
            { id: "1", name: "Okoro Wisdom", avatar: "/placeholder-user.jpg" },
            { id: "2", name: "Sarah Johnson", avatar: "/placeholder-user.jpg" },
            { id: "3", name: "Mike Chen", avatar: "/placeholder-user.jpg" },
        ],
        love: [
            { id: "4", name: "Emma Davis", avatar: "/placeholder-user.jpg" },
            { id: "5", name: "John Smith", avatar: "/placeholder-user.jpg" },
        ],
        celebrate: [
            { id: "6", name: "Lisa Wang", avatar: "/placeholder-user.jpg" },
            { id: "7", name: "David Kim", avatar: "/placeholder-user.jpg" },
        ]
    }

    const getTotalReactions = () => {
        return (post.engagement.reactions?.like || 0) +
            (post.engagement.reactions?.love || 0) +
            (post.engagement.reactions?.celebrate || 0)
    }

    const getReactionSummary = () => {
        const total = getTotalReactions()
        if (total === 0) return null
        else {
            return `${(total).toLocaleString()}`
        }
    }

    const ReactionModal = () => (
        <Dialog open={showReactionModal} onOpenChange={setShowReactionModal}>
            <DialogContent className="max-w-md">
                <DialogHeader>
                    <DialogTitle>Reactions</DialogTitle>
                </DialogHeader>
                <Tabs value={activeReactionTab} onValueChange={setActiveReactionTab}>
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="all" className="flex items-center gap-1 transition-all duration-200">
                            All
                            <span className="text-sm">({getTotalReactions()})</span>
                        </TabsTrigger>
                        <TabsTrigger value="like" className="flex items-center gap-1 transition-all duration-200">
                            <ThumbsUp className="h-3 w-3" />
                            <span className="text-sm">({post.engagement.reactions?.like || 0})</span>
                        </TabsTrigger>
                        <TabsTrigger value="love" className="flex items-center gap-1 transition-all duration-200">
                            <Heart className="h-3 w-3" />
                            <span className="text-sm">({post.engagement.reactions?.love || 0})</span>
                        </TabsTrigger>
                        <TabsTrigger value="celebrate" className="flex items-center gap-1 transition-all duration-200">
                            <Zap className="h-3 w-3" />
                            <span className="text-sm">({post.engagement.reactions?.celebrate || 0})</span>
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="all" className="mt-4 animate-in fade-in-50 duration-200">
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                            {[...mockReactedUsers.like, ...mockReactedUsers.love, ...mockReactedUsers.celebrate].map((user) => (
                                <div key={user.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={user.avatar} alt={user.name} />
                                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <span className="text-base font-medium">{user.name}</span>
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="like" className="mt-4 animate-in fade-in-50 duration-200">
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                            {mockReactedUsers.like.map((user) => (
                                <div key={user.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={user.avatar} alt={user.name} />
                                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <span className="text-base font-medium">{user.name}</span>
                                    <ThumbsUp className="h-3 w-3 text-blue-500 ml-auto" />
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="love" className="mt-4 animate-in fade-in-50 duration-200">
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                            {mockReactedUsers.love.map((user) => (
                                <div key={user.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={user.avatar} alt={user.name} />
                                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <span className="text-base font-medium">{user.name}</span>
                                    <Heart className="h-3 w-3 text-red-500 ml-auto" />
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="celebrate" className="mt-4 animate-in fade-in-50 duration-200">
                        <div className="space-y-2 max-h-64 overflow-y-auto">
                            {mockReactedUsers.celebrate.map((user) => (
                                <div key={user.id} className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={user.avatar} alt={user.name} />
                                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <span className="text-base font-medium">{user.name}</span>
                                    <Zap className="h-3 w-3 text-yellow-500 ml-auto" />
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </DialogContent>
        </Dialog>
    )

    const handleReaction = (type: 'like' | 'love' | 'celebrate') => {
        if (reactionType === type) {
            setReactionType(null)
            setIsLiked(false)
        } else {
            setReactionType(type)
            setIsLiked(true)
        }
    }

    const getReactionIcon = () => {
        switch (reactionType) {
            case 'love':
                return <Heart className="h-4 w-4 fill-current" />
            case 'celebrate':
                return <Zap className="h-4 w-4 fill-current" />
            default:
                return <ThumbsUp className="h-4 w-4 fill-current" />
        }
    }

    const getReactionColor = () => {
        switch (reactionType) {
            case 'love':
                return "text-red-500"
            case 'celebrate':
                return "text-yellow-500"
            default:
                return "text-blue-500"
        }
    }

    const contentPreview = post.content.length > 280
        ? post.content.substring(0, 280) + "..."
        : post.content

    return (
        <Card className="w-full bg-background rounded-none border-0 border-b-2 text-foreground">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border shrink-0">
                            <AvatarImage src={post.author.avatar} alt={post.author.displayName} />
                            <AvatarFallback>{post.author.displayName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1.5">
                                <h3 className="font-medium text-base">{post.author.displayName}</h3>
                                {post.author.verified && <VerifiedBadge />}
                                <span className="text-base text-muted-foreground">@{post.author.username}</span>
                                <span className="text-sm text-muted-foreground">•</span>
                                <div className="flex items-center gap-1">
                                    <span className="text-base text-muted-foreground">{post.timestamp}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    <span className="text-sm text-muted-foreground capitalize">{post.author.type}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>Follow @{post.author.username}</DropdownMenuItem>
                            <DropdownMenuItem>Copy link</DropdownMenuItem>
                            <DropdownMenuItem>Report post</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </CardHeader>

            <CardContent className="pt-0">
                <div className="space-y-3">
                    <div className="text-base text-foreground leading-relaxed">
                        {showFullContent ? post.content : contentPreview}
                        {post.content.length > 280 && (
                            <button
                                onClick={() => setShowFullContent(!showFullContent)}
                                className="text-blue-600 hover:text-blue-700 ml-1 font-medium"
                            >
                                {showFullContent ? "Show less" : "Show more"}
                            </button>
                        )}
                    </div>

                    {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                            {post.tags.slice(0, 4).map((tag, index) => (
                                <span key={index} className="text-base text-blue-600 hover:text-blue-700 cursor-pointer">
                                    #{tag}
                                </span>
                            ))}
                            {post.tags.length > 4 && (
                                <span className="text-base text-muted-foreground">
                                    +{post.tags.length - 4} more
                                </span>
                            )}
                        </div>
                    )}

                    {post.media && post.media.length > 0 && (
                        <div className={`grid gap-2 ${post.media.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} rounded-lg overflow-hidden`}>
                            {post.media.map((item, index) => (
                                <div key={index} className="relative">
                                    {item.type === 'image' && (
                                        <img
                                            src={item.url}
                                            alt={item.title || 'Post media'}
                                            className="w-full h-48 object-cover rounded-lg border"
                                        />
                                    )}
                                    {item.type === 'video' && (
                                        <video
                                            src={item.url}
                                            controls
                                            className="w-full h-48 object-cover rounded-lg border"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {post.studyData && (
                        <div className="bg-gray-50 dark:bg-gray-700/30 text-foreground rounded-2xl p-3 border flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                {post.studyData.timeSpent && (
                                    <div className="flex flex-col items-center justify-center p-2 gap-2 border rounded-2xl">
                                        {/* <CalendarDays className="h-3 w-3" /> */}
                                        <div className="flex text-sm">
                                            <div className="flex flex-col gap-2 items-center">
                                                <Timer className="size-4" />
                                                <span>{Math.floor(post.studyData.timeSpent / 60)}h {post.studyData.timeSpent % 60}m</span>
                                                {post.studyData.difficulty && (
                                                    <Badge variant="cool" className="flex items-center text-xs w-fit">
                                                        <span className="capitalize">{post.studyData.difficulty}</span>
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="flex flex-col gap-2">
                                    <Badge variant="cool" className="text-sm py-0.5 px-2">
                                        <PostTypeIcon type={post.type} />
                                        <span className="text-sm capitalize">{post.type}</span>
                                    </Badge>
                                    {post.studyData.skills && (
                                        <div className="flex flex-wrap gap-1 mt-2">
                                            <Badge variant="sky" className="text-sm capitalize">
                                                {post.subject}
                                            </Badge>
                                            {post.language && (
                                                <Badge variant="cool" className="text-sm capitalize">
                                                    {post.language.name}
                                                </Badge>
                                            )}
                                            <Badge variant="amethyst" className="text-sm capitalize">
                                                <span className="mr-1">👥</span>
                                                <span className="line-clamp-1">{post.community.name}</span>
                                            </Badge>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Resource Links */}
                            {post.linkData && (
                                <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                                    <a
                                        href={post.linkData.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-3 hover:bg-blue-100 dark:hover:bg-blue-900/30 rounded-lg p-2 transition-colors"
                                    >
                                        {post.linkData.image && (
                                            <img
                                                src={post.linkData.image}
                                                alt={post.linkData.title || "Resource"}
                                                className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                                            />
                                        )}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 mb-1">
                                                <ExternalLink className="h-4 w-4 text-blue-600" />
                                                <span className="text-sm font-medium text-blue-600 line-clamp-1">
                                                    {post.linkData.title || "Resource Link"}
                                                </span>
                                            </div>
                                            {post.linkData.description && (
                                                <p className="text-sm text-muted-foreground line-clamp-2">
                                                    {post.linkData.description}
                                                </p>
                                            )}
                                            <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                                                {new URL(post.linkData.url).hostname}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            )}

                            {/* Study Resources from studyData */}
                            {post.studyData?.resources && post.studyData.resources.length > 0 && (
                                <div className="mt-2">
                                    <p className="text-sm font-medium text-muted-foreground mb-2">Resources used:</p>
                                    <div className="flex flex-wrap gap-1">
                                        {post.studyData.resources.map((resource, index) => (
                                            <Badge key={index} variant="outline" className="text-xs">
                                                {resource}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Poll Display */}
                    {post.poll && (
                        <div className="bg-[#8a2be2]/20 rounded-3xl p-4 border border-[#8a2be2]">
                            <h4 className="font-medium text-lg mb-3">{post.poll.question}</h4>
                            <div className="space-y-2">
                                {post.poll.options.map((option, index) => {
                                    const votes = post.poll?.votes?.[option] || 0;
                                    const totalVotes = post.poll?.votes ? Object.values(post.poll.votes).reduce((a, b) => a + b, 0) : 0;
                                    const percentage = totalVotes > 0 ? Math.round((votes / totalVotes) * 100) : 0;

                                    return (
                                        <div key={index} className="relative">
                                            <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-xl border cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                                <span className="font-medium">{option}</span>
                                                <span className="text-sm text-muted-foreground">{percentage}% ({votes})</span>
                                            </div>
                                            <div
                                                className="absolute left-0 top-0 h-full bg-[#8a2be2] rounded-xl transition-all duration-300"
                                                style={{ width: `${percentage}%`, opacity: 0.5 }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                            {post.poll.endTime && (
                                <p className="text-sm text-muted-foreground mt-3">
                                    Poll ends: {new Date(post.poll.endTime).toLocaleDateString()}
                                </p>
                            )}
                        </div>
                    )}

                    {/* Collaboration Details */}
                    {post.collaboration && post.collaboration.isCollaborative && (
                        <div className="bg-gray-50 dark:bg-gray-900/20 rounded-lg p-4 border border-gray-200 dark:border-gray-800">
                            <div className="flex items-center gap-2 mb-2">
                                <Users className="h-4 w-4 text-gray-600" />
                                <span className="font-medium text-gray-800 dark:text-gray-200">
                                    {post.collaboration.title || "Looking for Collaborators"}
                                </span>
                            </div>
                            <div className="flex items-center justify-between text-sm text-gray-700 dark:text-gray-300">
                                <span>
                                    {post.collaboration.currentParticipants?.length || 0} / {post.collaboration.maxParticipants || "∞"} participants
                                </span>
                                <Button size="sm" variant="outline" className="text-gray-600 border-gray-600 hover:bg-gray-100">
                                    Join Collaboration
                                </Button>
                            </div>
                        </div>
                    )}

                    <Separator />

                    {/* New reactions, comments, and shares summary */}
                    {(getTotalReactions() > 0 || post.engagement.comments > 0 || post.engagement.shares > 0) && (
                        <div className="flex items-center justify-between text-base text-muted-foreground">
                            <div className="flex items-center gap-2">
                                {/* Reaction icons and count */}
                                {getTotalReactions() > 0 && (
                                    <button
                                        className="flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer"
                                        onClick={() => setShowReactionModal(true)}
                                    >
                                        <div className="flex -space-x-1">
                                            {(post.engagement.reactions?.like || 0) > 0 && (
                                                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                                                    <ThumbsUp className="h-3 w-3 text-white" />
                                                </div>
                                            )}
                                            {(post.engagement.reactions?.love || 0) > 0 && (
                                                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                                                    <Heart className="h-3 w-3 text-white" />
                                                </div>
                                            )}
                                            {(post.engagement.reactions?.celebrate || 0) > 0 && (
                                                <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                                                    <Trophy className="h-3 w-3 text-white" />
                                                </div>
                                            )}
                                        </div>
                                        <span>{getReactionSummary() || `${getTotalReactions().toLocaleString()}`}</span>
                                    </button>
                                )}
                            </div>

                            <div className="flex items-center gap-4 text-sm">
                                {post.engagement.comments > 0 && (
                                    <span>{post.engagement.comments.toLocaleString()} comments</span>
                                )}
                                {post.engagement.shares > 0 && (
                                    <span>{post.engagement.shares.toLocaleString()} shares</span>
                                )}
                            </div>
                        </div>
                    )}

                    <Separator />

                    <div className="flex items-center justify-between">
                        <ReactionClick onReactionSelect={(reaction) => handleReaction(reaction)}>
                            <Button
                                variant="post_action"
                                size="post_fit"
                                className="flex-1 px-3 gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <SmilePlus className="size-6" />
                                <span className="text-base font-medium">React</span>
                            </Button>
                        </ReactionClick>
                        <ReactionButton
                            icon={MessageCircle}
                            label={"Comment"}
                            isActive={false}
                            onClick={() => { }}
                            activeColor="text-blue-500"
                        />
                        <ReactionButton
                            icon={Share2}
                            label={"Share"}
                            isActive={false}
                            onClick={() => { }}
                            activeColor="text-green-500"
                        />
                        <ReactionButton
                            icon={Gift}
                            count={post.engagement.gifts || 0}
                            isActive={false}
                            onClick={() => { }}
                            activeColor="text-sky-500"
                        />
                        <ReactionButton
                            icon={Bookmark}
                            count={post.engagement.saves}
                            isActive={isSaved}
                            onClick={() => setIsSaved(!isSaved)}
                            activeColor="text-yellow-500"
                        />
                    </div>
                </div>
            </CardContent>
            <ReactionModal />
        </Card>
    )
}
