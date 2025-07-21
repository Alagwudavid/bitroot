import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { TopNavigation } from "@/components/top-navigation";
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
        url: "/logo.png",
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
    images: ["/logo.png"],
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
          <div className="flex min-h-screen bg-background text-foreground theme-aware overflow-hidden relative">
            <Sidebar />
            <div className="flex-1 flex flex-col h-screen overflow-hidden overflow-y-auto">
              <TopNavigation />
              <main className="flex-1 px-6">{children}</main>
              <div className="h-10 w-full shrink-0 bg-transparent border-0 md:p-5 p-[10%]"></div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
