"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
    User,
    Bell,
    Shield,
    BookOpen,
    Database,
    HelpCircle,
    Mail,
    Phone,
    Eye,
    EyeOff,
    Camera,
    Trash2,
    Download,
    Upload,
    AlertTriangle,
} from "lucide-react";

export default function SettingsClient() {
    const [showPassword, setShowPassword] = useState(false);
    const [notifications, setNotifications] = useState({
        dailyReminder: true,
        streakReminder: true,
        achievementAlerts: true,
        weeklyProgress: false,
        friendActivity: true,
        emailUpdates: false,
        pushNotifications: true,
    });
    const [privacy, setPrivacy] = useState({
        profileVisibility: "public",
        showProgress: true,
        showStreak: true,
        showFriends: true,
        allowFriendRequests: true,
        showOnLeaderboard: true,
    });
    const [learning, setLearning] = useState({
        dailyGoal: "20",
        reminderTime: "19:00",
        difficulty: "intermediate",
        autoplay: true,
        soundEffects: true,
        hapticFeedback: true,
    });

    return (
        <div className="p-6 max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-[#fafafa] mb-2">
                    Settings
                </h1>
                <p className="text-gray-600 dark:text-[#fafafa]/70">
                    Manage your account and learning preferences
                </p>
            </div>

            <Tabs defaultValue="account" className="space-y-6">
                <TabsList className="grid w-full grid-cols-5">
                    <TabsTrigger value="account" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Account
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="flex items-center gap-2">
                        <Bell className="w-4 h-4" />
                        Notifications
                    </TabsTrigger>
                    <TabsTrigger value="privacy" className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        Privacy
                    </TabsTrigger>
                    <TabsTrigger value="learning" className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Learning
                    </TabsTrigger>
                    <TabsTrigger value="data" className="flex items-center gap-2">
                        <Database className="w-4 h-4" />
                        Data
                    </TabsTrigger>
                </TabsList>

                {/* Account Settings */}
                <TabsContent value="account" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="w-5 h-5" />
                                Profile Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Profile Picture */}
                            <div className="flex items-center gap-4">
                                <Avatar className="w-20 h-20">
                                    <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                                    <AvatarFallback className="text-xl">JD</AvatarFallback>
                                </Avatar>
                                <div className="space-y-2">
                                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                                        <Camera className="w-4 h-4" />
                                        Change Photo
                                    </Button>
                                    <Button variant="ghost" size="sm" className="flex items-center gap-2 text-destructive">
                                        <Trash2 className="w-4 h-4" />
                                        Remove
                                    </Button>
                                </div>
                            </div>

                            <Separator />

                            {/* Basic Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input id="firstName" defaultValue="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input id="lastName" defaultValue="Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="username">Username</Label>
                                    <Input id="username" defaultValue="john_doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <div className="flex">
                                        <Mail className="w-4 h-4 mt-3 mr-2 text-gray-400" />
                                        <Input id="email" type="email" defaultValue="john@example.com" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <div className="flex">
                                        <Phone className="w-4 h-4 mt-3 mr-2 text-gray-400" />
                                        <Input id="phone" type="tel" defaultValue="+1 234 567 8900" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="location">Location</Label>
                                    <Input id="location" defaultValue="New York, USA" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Textarea
                                    id="bio"
                                    placeholder="Tell others about yourself..."
                                    defaultValue="Language enthusiast learning multiple languages on Bitroot!"
                                    rows={3}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Security Settings */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                Security
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="currentPassword">Current Password</Label>
                                <div className="relative">
                                    <Input
                                        id="currentPassword"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter current password"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                    </Button>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="newPassword">New Password</Label>
                                <Input id="newPassword" type="password" placeholder="Enter new password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
                            </div>
                            <Button className="w-full">Update Password</Button>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Notifications Settings */}
                <TabsContent value="notifications" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Bell className="w-5 h-5" />
                                Notification Preferences
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label className="text-base">Daily Reminder</Label>
                                        <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                            Get reminded to complete your daily lessons
                                        </p>
                                    </div>
                                    <Switch
                                        checked={notifications.dailyReminder}
                                        onCheckedChange={(checked) =>
                                            setNotifications({ ...notifications, dailyReminder: checked })
                                        }
                                    />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label className="text-base">Streak Reminder</Label>
                                        <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                            Don't break your learning streak
                                        </p>
                                    </div>
                                    <Switch
                                        checked={notifications.streakReminder}
                                        onCheckedChange={(checked) =>
                                            setNotifications({ ...notifications, streakReminder: checked })
                                        }
                                    />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label className="text-base">Achievement Alerts</Label>
                                        <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                            Celebrate your learning milestones
                                        </p>
                                    </div>
                                    <Switch
                                        checked={notifications.achievementAlerts}
                                        onCheckedChange={(checked) =>
                                            setNotifications({ ...notifications, achievementAlerts: checked })
                                        }
                                    />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label className="text-base">Weekly Progress</Label>
                                        <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                            Weekly summary of your learning progress
                                        </p>
                                    </div>
                                    <Switch
                                        checked={notifications.weeklyProgress}
                                        onCheckedChange={(checked) =>
                                            setNotifications({ ...notifications, weeklyProgress: checked })
                                        }
                                    />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label className="text-base">Friend Activity</Label>
                                        <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                            Get notified when friends complete lessons
                                        </p>
                                    </div>
                                    <Switch
                                        checked={notifications.friendActivity}
                                        onCheckedChange={(checked) =>
                                            setNotifications({ ...notifications, friendActivity: checked })
                                        }
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Communication Preferences</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label className="text-base">Email Updates</Label>
                                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                        Receive updates and tips via email
                                    </p>
                                </div>
                                <Switch
                                    checked={notifications.emailUpdates}
                                    onCheckedChange={(checked) =>
                                        setNotifications({ ...notifications, emailUpdates: checked })
                                    }
                                />
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                                <div>
                                    <Label className="text-base">Push Notifications</Label>
                                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                        Receive push notifications on your device
                                    </p>
                                </div>
                                <Switch
                                    checked={notifications.pushNotifications}
                                    onCheckedChange={(checked) =>
                                        setNotifications({ ...notifications, pushNotifications: checked })
                                    }
                                />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Privacy Settings */}
                <TabsContent value="privacy" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                Privacy Controls
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>Profile Visibility</Label>
                                    <Select
                                        value={privacy.profileVisibility}
                                        onValueChange={(value) =>
                                            setPrivacy({ ...privacy, profileVisibility: value })
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="public">Public</SelectItem>
                                            <SelectItem value="friends">Friends Only</SelectItem>
                                            <SelectItem value="private">Private</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label className="text-base">Show Learning Progress</Label>
                                        <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                            Display your progress on your profile
                                        </p>
                                    </div>
                                    <Switch
                                        checked={privacy.showProgress}
                                        onCheckedChange={(checked) =>
                                            setPrivacy({ ...privacy, showProgress: checked })
                                        }
                                    />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label className="text-base">Show Learning Streak</Label>
                                        <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                            Display your current learning streak
                                        </p>
                                    </div>
                                    <Switch
                                        checked={privacy.showStreak}
                                        onCheckedChange={(checked) =>
                                            setPrivacy({ ...privacy, showStreak: checked })
                                        }
                                    />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label className="text-base">Show Friends List</Label>
                                        <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                            Allow others to see your friends
                                        </p>
                                    </div>
                                    <Switch
                                        checked={privacy.showFriends}
                                        onCheckedChange={(checked) =>
                                            setPrivacy({ ...privacy, showFriends: checked })
                                        }
                                    />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label className="text-base">Allow Friend Requests</Label>
                                        <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                            Let others send you friend requests
                                        </p>
                                    </div>
                                    <Switch
                                        checked={privacy.allowFriendRequests}
                                        onCheckedChange={(checked) =>
                                            setPrivacy({ ...privacy, allowFriendRequests: checked })
                                        }
                                    />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label className="text-base">Show on Leaderboard</Label>
                                        <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                            Appear on community leaderboards
                                        </p>
                                    </div>
                                    <Switch
                                        checked={privacy.showOnLeaderboard}
                                        onCheckedChange={(checked) =>
                                            setPrivacy({ ...privacy, showOnLeaderboard: checked })
                                        }
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Learning Settings */}
                <TabsContent value="learning" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BookOpen className="w-5 h-5" />
                                Learning Preferences
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Daily Learning Goal (minutes)</Label>
                                    <Select
                                        value={learning.dailyGoal}
                                        onValueChange={(value) =>
                                            setLearning({ ...learning, dailyGoal: value })
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="5">5 minutes</SelectItem>
                                            <SelectItem value="10">10 minutes</SelectItem>
                                            <SelectItem value="15">15 minutes</SelectItem>
                                            <SelectItem value="20">20 minutes</SelectItem>
                                            <SelectItem value="30">30 minutes</SelectItem>
                                            <SelectItem value="60">1 hour</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Reminder Time</Label>
                                    <Input
                                        type="time"
                                        value={learning.reminderTime}
                                        onChange={(e) =>
                                            setLearning({ ...learning, reminderTime: e.target.value })
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Difficulty Level</Label>
                                    <Select
                                        value={learning.difficulty}
                                        onValueChange={(value) =>
                                            setLearning({ ...learning, difficulty: value })
                                        }
                                    >
                                        <SelectTrigger>
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="beginner">Beginner</SelectItem>
                                            <SelectItem value="intermediate">Intermediate</SelectItem>
                                            <SelectItem value="advanced">Advanced</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <Separator />

                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label className="text-base">Autoplay Audio</Label>
                                        <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                            Automatically play pronunciation audio
                                        </p>
                                    </div>
                                    <Switch
                                        checked={learning.autoplay}
                                        onCheckedChange={(checked) =>
                                            setLearning({ ...learning, autoplay: checked })
                                        }
                                    />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label className="text-base">Sound Effects</Label>
                                        <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                            Play sounds for correct/incorrect answers
                                        </p>
                                    </div>
                                    <Switch
                                        checked={learning.soundEffects}
                                        onCheckedChange={(checked) =>
                                            setLearning({ ...learning, soundEffects: checked })
                                        }
                                    />
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between">
                                    <div>
                                        <Label className="text-base">Haptic Feedback</Label>
                                        <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                            Vibrate on correct/incorrect answers (mobile)
                                        </p>
                                    </div>
                                    <Switch
                                        checked={learning.hapticFeedback}
                                        onCheckedChange={(checked) =>
                                            setLearning({ ...learning, hapticFeedback: checked })
                                        }
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Data & Support */}
                <TabsContent value="data" className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Database className="w-5 h-5" />
                                Data Management
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                <div>
                                    <Label className="text-base">Export Data</Label>
                                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                        Download all your learning data and progress
                                    </p>
                                </div>
                                <Button variant="outline" className="flex items-center gap-2">
                                    <Download className="w-4 h-4" />
                                    Export
                                </Button>
                            </div>
                            <div className="flex items-center justify-between p-4 border rounded-lg">
                                <div>
                                    <Label className="text-base">Import Data</Label>
                                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                                        Import learning data from another platform
                                    </p>
                                </div>
                                <Button variant="outline" className="flex items-center gap-2">
                                    <Upload className="w-4 h-4" />
                                    Import
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <HelpCircle className="w-5 h-5" />
                                Support & Help
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Button variant="outline" className="w-full justify-start">
                                Contact Support
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                Help Center
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                Community Guidelines
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                Privacy Policy
                            </Button>
                            <Button variant="outline" className="w-full justify-start">
                                Terms of Service
                            </Button>
                        </CardContent>
                    </Card>

                    <Card className="border-destructive">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-destructive">
                                <AlertTriangle className="w-5 h-5" />
                                Danger Zone
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="p-4 bg-destructive/10 rounded-lg">
                                <h3 className="font-semibold text-destructive mb-2">Delete Account</h3>
                                <p className="text-sm text-gray-600 dark:text-[#fafafa]/70 mb-4">
                                    Once you delete your account, there is no going back. Please be certain.
                                </p>
                                <Button variant="destructive" className="flex items-center gap-2">
                                    <Trash2 className="w-4 h-4" />
                                    Delete Account
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
}
