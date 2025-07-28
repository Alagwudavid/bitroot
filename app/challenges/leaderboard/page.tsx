import { Metadata } from "next";
import LeaderboardClient from "./LeaderboardClient";

export const metadata: Metadata = {
    title: "Leaderboard | BitRoot Challenges",
    description: "View the top performers in language learning challenges",
};

export default function LeaderboardPage() {
    return <LeaderboardClient />;
}
