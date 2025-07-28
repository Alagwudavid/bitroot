"use client"

import React, { useState } from "react"
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Clock, Users, Star, Trophy, ThumbsUp, Smile, Gift, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { VerifiedBadge } from "@/components/verified-badge"
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

interface PostCardProps {
    post: SocialPost
}

const PostTypeIcon = ({ type }: { type: string }) => {
    switch (type) {
        case "achievement":
            return <Trophy className="h-4 w-4 text-amber-600" />
        case "tip":
            return <Star className="h-4 w-4 text-blue-600" />
        case "question":
            return <MessageCircle className="h-4 w-4 text-purple-600" />
        case "project":
            return <Zap className="h-4 w-4 text-green-600" />
        case "collaboration":
            return <Users className="h-4 w-4 text-orange-600" />
        case "milestone":
            return <Trophy className="h-4 w-4 text-purple-600" />
        default:
            return <MessageCircle className="h-4 w-4 text-gray-600" />
    }
}

const SubjectBadge = ({ subject, color }: { subject: string; color?: string }) => {
    const getSubjectColor = (subject: string) => {
        switch (subject) {
            case "language":
                return "bg-blue-100 text-blue-800 border-blue-200"
            case "mathematics":
                return "bg-green-100 text-green-800 border-green-200"
            case "technology":
                return "bg-purple-100 text-purple-800 border-purple-200"
            case "arts":
                return "bg-pink-100 text-pink-800 border-pink-200"
            case "science":
                return "bg-cyan-100 text-cyan-800 border-cyan-200"
            case "business":
                return "bg-orange-100 text-orange-800 border-orange-200"
            default:
                return "bg-gray-100 text-gray-800 border-gray-200"
        }
    }

    return (
        <Badge variant="outline" className={color ? "" : getSubjectColor(subject)} style={color ? { backgroundColor: color + '20', color: color, borderColor: color + '40' } : {}}>
            {subject}
        </Badge>
    )
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
                                <button
                                    key={reaction.name}
                                    onClick={() => {
                                        onReactionSelect(reaction.name)
                                        setShowTooltip(false)
                                    }}
                                    className={`p-2 rounded-full transition-all duration-200 hover:scale-110 ${reaction.bgColor}`}
                                    title={reaction.name}
                                >
                                    <IconComponent className={`h-5 w-5 ${reaction.color}`} />
                                </button>
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

        const firstReactor = "Okoro Wisdom"

        if (total === 1) {
            return firstReactor
        } else if (total === 2) {
            return `${firstReactor} and 1 other`
        } else {
            return `${firstReactor} and ${(total - 1).toLocaleString()} others`
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
                            <span className="text-xs">({getTotalReactions()})</span>
                        </TabsTrigger>
                        <TabsTrigger value="like" className="flex items-center gap-1 transition-all duration-200">
                            <ThumbsUp className="h-3 w-3" />
                            <span className="text-xs">({post.engagement.reactions?.like || 0})</span>
                        </TabsTrigger>
                        <TabsTrigger value="love" className="flex items-center gap-1 transition-all duration-200">
                            <Heart className="h-3 w-3" />
                            <span className="text-xs">({post.engagement.reactions?.love || 0})</span>
                        </TabsTrigger>
                        <TabsTrigger value="celebrate" className="flex items-center gap-1 transition-all duration-200">
                            <Zap className="h-3 w-3" />
                            <span className="text-xs">({post.engagement.reactions?.celebrate || 0})</span>
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
                                    <span className="text-sm font-medium">{user.name}</span>
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
                                    <span className="text-sm font-medium">{user.name}</span>
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
                                    <span className="text-sm font-medium">{user.name}</span>
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
                                    <span className="text-sm font-medium">{user.name}</span>
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
        <Card className="w-full bg-background rounded-none border-0 text-foreground transition-shadow">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                            <AvatarImage src={post.author.avatar} alt={post.author.displayName} />
                            <AvatarFallback>{post.author.displayName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1.5">
                                <h3 className="font-medium text-sm">{post.author.displayName}</h3>
                                {post.author.verified && <VerifiedBadge />}
                                <span className="text-xs text-muted-foreground">@{post.author.username}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-0.5">
                                <div className="flex items-center gap-1">
                                    <PostTypeIcon type={post.type} />
                                    <span className="text-xs text-muted-foreground capitalize">{post.type}</span>
                                </div>
                                <span className="text-xs text-muted-foreground">•</span>
                                <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3 text-muted-foreground" />
                                    <span className="text-xs text-muted-foreground">{post.timestamp}</span>
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

                <div className="flex items-center gap-2 mt-3">
                    <SubjectBadge subject={post.subject} color={post.community.color} />
                    {post.language && (
                        <Badge variant="outline" className="text-xs">
                            <span className="mr-1">🌐</span>
                            {post.language.name}
                        </Badge>
                    )}
                    <Badge variant="outline" className="text-xs">
                        <span className="mr-1">👥</span>
                        {post.community.name}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="pt-0">
                <div className="space-y-3">
                    <div className="text-sm text-foreground leading-relaxed">
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
                                <span key={index} className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer">
                                    #{tag}
                                </span>
                            ))}
                            {post.tags.length > 4 && (
                                <span className="text-sm text-muted-foreground">
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
                        <div className="bg-gray-50 dark:bg-gray-700 text-foreground rounded-lg p-3 border">
                            <h4 className="text-xs font-medium mb-2">Study Details</h4>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                {post.studyData.timeSpent && (
                                    <div className="flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        <span>{Math.floor(post.studyData.timeSpent / 60)}h {post.studyData.timeSpent % 60}m</span>
                                    </div>
                                )}
                                {post.studyData.difficulty && (
                                    <div className="flex items-center gap-1">
                                        <Star className="h-3 w-3" />
                                        <span className="capitalize">{post.studyData.difficulty}</span>
                                    </div>
                                )}
                            </div>
                            {post.studyData.skills && (
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {post.studyData.skills.slice(0, 3).map((skill, index) => (
                                        <Badge key={index} variant="secondary" className="text-xs text-black">
                                            {skill}
                                        </Badge>
                                    ))}
                                    {post.studyData.skills.length > 3 && (
                                        <Badge variant="secondary" className="text-xs text-black">
                                            +{post.studyData.skills.length - 3} more
                                        </Badge>
                                    )}
                                </div>
                            )}
                        </div>
                    )}

                    <Separator />

                    {/* New reactions, comments, and shares summary */}
                    {(getTotalReactions() > 0 || post.engagement.comments > 0 || post.engagement.shares > 0) && (
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                {/* Reaction icons and count */}
                                {getTotalReactions() > 0 && (
                                    <button
                                        className="flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer"
                                        onClick={() => setShowReactionModal(true)}
                                    >
                                        <div className="flex -space-x-1">
                                            {(post.engagement.reactions?.like || 0) > 0 && (
                                                <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center border border-white">
                                                    <ThumbsUp className="h-3 w-3 text-white" />
                                                </div>
                                            )}
                                            {(post.engagement.reactions?.love || 0) > 0 && (
                                                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center border border-white">
                                                    <Heart className="h-3 w-3 text-white" />
                                                </div>
                                            )}
                                            {(post.engagement.reactions?.celebrate || 0) > 0 && (
                                                <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center border border-white">
                                                    <Trophy className="h-3 w-3 text-white" />
                                                </div>
                                            )}
                                        </div>
                                        <span>{getReactionSummary() || `${getTotalReactions().toLocaleString()}`}</span>
                                    </button>
                                )}
                            </div>

                            <div className="flex items-center gap-4 text-xs">
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
                                <Heart className="size-6" />
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
