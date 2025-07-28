import SettingsClient from './SettingsClient'

export default function SettingsPage() {
  return <SettingsClient />
}
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
