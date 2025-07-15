import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { TopNavigation } from "@/components/top-navigation";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Bitroot App",
  description: "Where language takes root — and culture comes alive.",
  generator: "Techgators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen bg-background text-foreground theme-aware overflow-hidden relative">
            <Sidebar />
            <div className="flex-1 flex flex-col h-screen overflow-hidden overflow-y-auto">
              <TopNavigation />
              <main className="flex-1 p-6 h-full">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
