import LearnLanguageClient from "./LearnLanguageClient";

export default function LanguageSectionsPage({ params }: { params: { language: string } }) {
  return <LearnLanguageClient params={params} />;
}
