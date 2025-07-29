import { Metadata } from "next";
import ChallengesClient from "./ChallengesClient";

export const metadata: Metadata = {
    title: "Challenges | BitRoot",
    description: "Take on language learning challenges and compete with other learners",
};

export default function ChallengesPage() {
    return <ChallengesClient />;
}
