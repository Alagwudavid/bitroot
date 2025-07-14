"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
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
} from "lucide-react"

export function SettingsPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [notifications, setNotifications] = useState({
    dailyReminder: true,
    streakReminder: true,
    achievementAlerts: true,
    weeklyProgress: false,
    friendActivity: true,
    emailUpdates: false,
    pushNotifications: true,
  })

  const [privacy, setPrivacy] = useState({
    profileVisibility: "public",
    showProgress: true,
    showStreak: true,
    showFriends: true,
    allowFriendRequests: true,
    showOnLeaderboard: true,
  })

  const [learning, setLearning] = useState({
    dailyGoal: "20",
    reminderTime: "19:00",
    difficulty: "intermediate",
    autoplay: true,
    soundEffects: true,
    hapticFeedback: true,
  })

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-[#fafafa] mb-2">Settings</h1>
        <p className="text-gray-600 dark:text-[#fafafa]/70">Manage your account and learning preferences</p>
      </div>

      <Tabs defaultValue="account" className="space-y-6">
        <TabsList className="grid w-full grid-cols-6 max-w-3xl rounded-xl dark:bg-[#0d1117]">
          <TabsTrigger value="account" className="rounded-xl">
            <User className="w-4 h-4 mr-2" />
            Account
          </TabsTrigger>
          <TabsTrigger value="notifications" className="rounded-xl">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="privacy" className="rounded-xl">
            <Shield className="w-4 h-4 mr-2" />
            Privacy
          </TabsTrigger>
          <TabsTrigger value="learning" className="rounded-xl">
            <BookOpen className="w-4 h-4 mr-2" />
            Learning
          </TabsTrigger>
          <TabsTrigger value="data" className="rounded-xl">
            <Database className="w-4 h-4 mr-2" />
            Data
          </TabsTrigger>
          <TabsTrigger value="help" className="rounded-xl">
            <HelpCircle className="w-4 h-4 mr-2" />
            Help
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-6">
          <Card className="rounded-2xl dark:bg-[#0d1117] dark:border-[#7037e4]/30">
            <CardHeader>
              <CardTitle className="dark:text-[#fafafa]">Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center space-x-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/placeholder-user.jpg" alt="Profile" />
                  <AvatarFallback className="bg-[#1e96fc] text-white text-2xl">AJ</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline" className="rounded-xl dark:border-[#7037e4]/30 bg-transparent">
                    <Camera className="w-4 h-4 mr-2" />
                    Change Photo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-xl text-red-600 hover:text-red-700 bg-transparent"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Remove
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    defaultValue="Alex"
                    className="rounded-xl dark:bg-[#030318] dark:border-[#7037e4]/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    defaultValue="Johnson"
                    className="rounded-xl dark:bg-[#030318] dark:border-[#7037e4]/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    defaultValue="alexlearns"
                    className="rounded-xl dark:bg-[#030318] dark:border-[#7037e4]/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="alex.johnson@email.com"
                    className="rounded-xl dark:bg-[#030318] dark:border-[#7037e4]/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us about yourself..."
                  className="rounded-xl dark:bg-[#030318] dark:border-[#7037e4]/30"
                  rows={3}
                />
              </div>

              <Separator />

              {/* Password Change */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-[#fafafa]">Change Password</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type={showPassword ? "text" : "password"}
                        className="rounded-xl dark:bg-[#030318] dark:border-[#7037e4]/30 pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      className="rounded-xl dark:bg-[#030318] dark:border-[#7037e4]/30"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-2">
                <Button variant="outline" className="rounded-xl dark:border-[#7037e4]/30 bg-transparent">
                  Cancel
                </Button>
                <Button className="rounded-xl bg-[#072ac8] hover:bg-[#1e96fc] dark:bg-[#7037e4] dark:hover:bg-[#8ddeed] dark:hover:text-[#030318]">
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="rounded-2xl dark:bg-[#0d1117] dark:border-[#7037e4]/30">
            <CardHeader>
              <CardTitle className="dark:text-[#fafafa]">Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Daily Learning Reminder</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                      Get reminded to practice your languages daily
                    </p>
                  </div>
                  <Switch
                    checked={notifications.dailyReminder}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, dailyReminder: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Streak Reminders</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">Don't lose your learning streak</p>
                  </div>
                  <Switch
                    checked={notifications.streakReminder}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, streakReminder: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Achievement Alerts</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">Celebrate your learning milestones</p>
                  </div>
                  <Switch
                    checked={notifications.achievementAlerts}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, achievementAlerts: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Weekly Progress Report</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                      Summary of your weekly learning progress
                    </p>
                  </div>
                  <Switch
                    checked={notifications.weeklyProgress}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, weeklyProgress: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Friend Activity</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">Updates about your friends' progress</p>
                  </div>
                  <Switch
                    checked={notifications.friendActivity}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, friendActivity: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Email Updates</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">Receive updates via email</p>
                  </div>
                  <Switch
                    checked={notifications.emailUpdates}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, emailUpdates: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                      Receive push notifications on your device
                    </p>
                  </div>
                  <Switch
                    checked={notifications.pushNotifications}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, pushNotifications: checked })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <Card className="rounded-2xl dark:bg-[#0d1117] dark:border-[#7037e4]/30">
            <CardHeader>
              <CardTitle className="dark:text-[#fafafa]">Privacy Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Profile Visibility</Label>
                  <Select defaultValue={privacy.profileVisibility}>
                    <SelectTrigger className="rounded-xl dark:bg-[#030318] dark:border-[#7037e4]/30">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="friends">Friends Only</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Show Learning Progress</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                      Allow others to see your learning progress
                    </p>
                  </div>
                  <Switch
                    checked={privacy.showProgress}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showProgress: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Show Streak</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                      Display your learning streak publicly
                    </p>
                  </div>
                  <Switch
                    checked={privacy.showStreak}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showStreak: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Show Friends List</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">Allow others to see your friends</p>
                  </div>
                  <Switch
                    checked={privacy.showFriends}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showFriends: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Allow Friend Requests</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">Let others send you friend requests</p>
                  </div>
                  <Switch
                    checked={privacy.allowFriendRequests}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, allowFriendRequests: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Show on Leaderboard</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">Appear on public leaderboards</p>
                  </div>
                  <Switch
                    checked={privacy.showOnLeaderboard}
                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showOnLeaderboard: checked })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="learning" className="space-y-6">
          <Card className="rounded-2xl dark:bg-[#0d1117] dark:border-[#7037e4]/30">
            <CardHeader>
              <CardTitle className="dark:text-[#fafafa]">Learning Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Daily XP Goal</Label>
                  <Select defaultValue={learning.dailyGoal}>
                    <SelectTrigger className="rounded-xl dark:bg-[#030318] dark:border-[#7037e4]/30">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10 XP - Casual</SelectItem>
                      <SelectItem value="20">20 XP - Regular</SelectItem>
                      <SelectItem value="50">50 XP - Serious</SelectItem>
                      <SelectItem value="100">100 XP - Intense</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Reminder Time</Label>
                  <Input
                    type="time"
                    defaultValue={learning.reminderTime}
                    className="rounded-xl dark:bg-[#030318] dark:border-[#7037e4]/30"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Difficulty Level</Label>
                  <Select defaultValue={learning.difficulty}>
                    <SelectTrigger className="rounded-xl dark:bg-[#030318] dark:border-[#7037e4]/30">
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

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Autoplay Audio</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                      Automatically play pronunciation audio
                    </p>
                  </div>
                  <Switch
                    checked={learning.autoplay}
                    onCheckedChange={(checked) => setLearning({ ...learning, autoplay: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Sound Effects</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                      Play sounds for correct/incorrect answers
                    </p>
                  </div>
                  <Switch
                    checked={learning.soundEffects}
                    onCheckedChange={(checked) => setLearning({ ...learning, soundEffects: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Haptic Feedback</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                      Vibrate on mobile devices for feedback
                    </p>
                  </div>
                  <Switch
                    checked={learning.hapticFeedback}
                    onCheckedChange={(checked) => setLearning({ ...learning, hapticFeedback: checked })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="data" className="space-y-6">
          <Card className="rounded-2xl dark:bg-[#0d1117] dark:border-[#7037e4]/30">
            <CardHeader>
              <CardTitle className="dark:text-[#fafafa]">Data Management</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-xl dark:border-[#7037e4]/30">
                  <div className="space-y-1">
                    <Label>Export Learning Data</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                      Download your progress, achievements, and statistics
                    </p>
                  </div>
                  <Button variant="outline" className="rounded-xl dark:border-[#7037e4]/30 bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-xl dark:border-[#7037e4]/30">
                  <div className="space-y-1">
                    <Label>Import Data</Label>
                    <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">
                      Import learning data from another platform
                    </p>
                  </div>
                  <Button variant="outline" className="rounded-xl dark:border-[#7037e4]/30 bg-transparent">
                    <Upload className="w-4 h-4 mr-2" />
                    Import
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between p-4 border border-red-200 dark:border-red-800/30 rounded-xl bg-red-50 dark:bg-red-900/10">
                  <div className="space-y-1">
                    <Label className="text-red-700 dark:text-red-400">Delete Account</Label>
                    <p className="text-sm text-red-600 dark:text-red-400">
                      Permanently delete your account and all associated data
                    </p>
                  </div>
                  <Button variant="destructive" className="rounded-xl">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="help" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-2xl dark:bg-[#0d1117] dark:border-[#7037e4]/30">
              <CardHeader>
                <CardTitle className="dark:text-[#fafafa]">Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-xl dark:border-[#7037e4]/30 bg-transparent"
                >
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Help Center
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-xl dark:border-[#7037e4]/30 bg-transparent"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-xl dark:border-[#7037e4]/30 bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Report a Bug
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-2xl dark:bg-[#0d1117] dark:border-[#7037e4]/30">
              <CardHeader>
                <CardTitle className="dark:text-[#fafafa]">About</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">Version: 2.1.0</p>
                  <p className="text-sm text-gray-600 dark:text-[#fafafa]/70">Last Updated: December 2024</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-xl dark:border-[#7037e4]/30 bg-transparent"
                >
                  Terms of Service
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start rounded-xl dark:border-[#7037e4]/30 bg-transparent"
                >
                  Privacy Policy
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
