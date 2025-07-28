import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Courses - BitRoot",
    description:
        "Earn as you teach, learn as you grow. Explore work from the most talented and accomplished instructors ready to help you master a new language.",
    openGraph: {
        title: "Courses - BitRoot",
        description:
            "Earn as you teach, learn as you grow. Explore work from the most talented and accomplished instructors ready to help you master a new language.",
        type: "website",
        siteName: "BitRoot",
        images: [
            {
                url: "/og/courses.png",
                width: 1200,
                height: 630,
                alt: "BitRoot Courses",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Courses - BitRoot",
        description:
            "Earn as you teach, learn as you grow. Explore work from the most talented and accomplished instructors ready to help you master a new language.",
        images: ["/og/courses.png"],
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function CoursesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
