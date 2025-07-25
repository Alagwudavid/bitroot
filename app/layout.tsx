import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { TopNavigation } from "@/components/top-navigation";
import { AsideBar } from "@/components/aside-bar";
import { ThemeProvider } from "@/components/theme-provider";

// export const metadata: Metadata = {
//   title: "Bitroot App",
//   description: "Where language takes root — and culture comes alive.",
//   generator: "Techgators",
// };
export const metadata: Metadata = {
  title: "Bitroot App",
  description: "Where language takes root — and culture comes alive.",
  generator: "Techgators",
  openGraph: {
    title: "Bitroot App",
    description: "Where language takes root — and culture comes alive.",
    url: "https://bitroot-app.vercel.app/",
    siteName: "Bitroot",
    images: [
      {
        url: "/og/icon.png",
        width: 1200,
        height: 630,
        alt: "Bitroot App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bitroot App",
    description: "Where language takes root — and culture comes alive.",
    images: ["/og/icon.png"],
    creator: "@LegendNGR",
  },
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
          <div className="flex h-screen bg-background text-foreground theme-aware overflow-hidden relative">
            <TopNavigation />
            <Sidebar />
            <div className="flex-1 flex h-screen overflow-hidden overflow-y-auto lg:w-full">
              <main className="flex-1 pt-14 p-2 shrink-0">
                {children}
                <div className="h-16 w-full shrink-0 bg-transparent border-0 md:hidden flex"></div>
              </main>
              <AsideBar />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
