"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { TopNavigation } from "@/components/top-navigation"
import { LearnPage } from "@/components/learn-page"
import { CommunityPage } from "@/components/community-page"
import { PodcastPage } from "@/components/podcast-page"
import { LanguagePage } from "@/components/language-page"
import { CoursesPage } from "@/components/courses-page"
import { ProfilePage } from "@/components/profile-page"
import { SettingsPage } from "@/components/settings-page"
import { useIsMobile } from "@/components/ui/use-mobile"
import { cn } from "@/lib/utils"

export default function BitrootApp() {
  const [currentPage, setCurrentPage] = useState("learn")
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const isMobile = useIsMobile()

  const handlePageChange = (page: string) => {
    setCurrentPage(page)
    setSelectedLanguage(null)
  }

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language)
    setCurrentPage("language")
  }

  const renderPage = () => {
    switch (currentPage) {
      case "learn":
        return <LearnPage onLanguageSelect={handleLanguageSelect} />
      case "community":
        return <CommunityPage />
      case "courses":
        return <CoursesPage />
      case "podcast":
        return <PodcastPage />
      case "language":
        return selectedLanguage ? (
          <LanguagePage language={selectedLanguage} />
        ) : (
          <LearnPage onLanguageSelect={handleLanguageSelect} />
        )
      case "profile":
        return <ProfilePage />
      case "settings":
        return <SettingsPage />
      default:
        return <LearnPage onLanguageSelect={handleLanguageSelect} />
    }
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground theme-aware">
      <Sidebar currentPage={currentPage} onPageChange={handlePageChange} />
      <div className={cn("flex-1 flex flex-col", isMobile ? "pb-16" : "")}>
        <TopNavigation currentPage={currentPage} onPageChange={handlePageChange} />
        <main className="flex-1 p-6 overflow-auto">{renderPage()}</main>
      </div>
    </div>
  )
}
