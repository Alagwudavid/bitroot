"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { TopNavigation } from "@/components/top-navigation"
import { LearnPage } from "@/components/learn-page"
import { CommunityPage } from "@/components/community-page"
import { PodcastPage } from "@/components/podcast-page"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemePreviewToast } from "@/components/theme-preview-toast"
import { LanguagePage } from "@/components/language-page"
import { CoursesPage } from "@/components/courses-page"
import { ProfilePage } from "@/components/profile-page"
import { SettingsPage } from "@/components/settings-page"

export default function AfroLingoApp() {
  const [currentPage, setCurrentPage] = useState("learn")
  const [currentLanguage, setCurrentLanguage] = useState("English")
  const [themePreview, setThemePreview] = useState<string | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)

  const renderPage = () => {
    if (selectedLanguage) {
      return <LanguagePage language={selectedLanguage} onBack={() => setSelectedLanguage(null)} />
    }

    switch (currentPage) {
      case "learn":
        return <LearnPage onLanguageSelect={setSelectedLanguage} />
      case "community":
        return <CommunityPage />
      case "courses":
        return <CoursesPage />
      case "podcast":
        return <PodcastPage />
      case "profile":
        return <ProfilePage />
      case "settings":
        return <SettingsPage />
      default:
        return <LearnPage onLanguageSelect={setSelectedLanguage} />
    }
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="flex h-screen bg-background theme-aware">
        <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
        <div className="flex-1 flex flex-col">
          <TopNavigation
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
            onPageChange={setCurrentPage}
          />
          <main className="flex-1 overflow-auto theme-aware">{renderPage()}</main>
          <ThemePreviewToast theme={themePreview} />
        </div>
      </div>
    </ThemeProvider>
  )
}
