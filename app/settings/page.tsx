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

export default function SettingsPage() {
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
      {/* ...rest of the component code (tabs, settings, etc.)... */}
    </div>
  );
}
