"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LanguageCard } from "@/components/language-card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { getLanguagesList } from "@/data/learn";

const LearnClient = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("");
    const [search, setSearch] = useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const languages = getLanguagesList();

    // Debounce search
    useEffect(() => {
        setLoading(true);
        const handler = setTimeout(() => {
            setDebouncedSearch(search);
            setLoading(false);
        }, 500); // 500ms debounce
        return () => clearTimeout(handler);
    }, [search]);

    const filteredLanguages = languages.filter(
        (lang) =>
            lang.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
            lang.description.toLowerCase().includes(debouncedSearch.toLowerCase())
    );

    const continueLearningLanguages = filteredLanguages.filter(
        (lang) => lang.progress > 0
    );
    const newLanguages = filteredLanguages.filter((lang) => lang.progress === 0);

    const handleLanguageSelect = (language: string) => {
        setSelectedLanguage(language);
        router.push(`/learn/${language.toLowerCase()}`);
    };

    return (
        <div className="p-6 max-w-6xl h-full mx-auto">
            <div className="mb-8">
                <Input
                    placeholder="Search languages..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="mb-4"
                />
            </div>
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    {[...Array(3)].map((_, i) => (
                        <Skeleton key={i} className="h-40 w-full rounded-3xl" />
                    ))}
                </div>
            ) : (
                <>
                    {continueLearningLanguages.length > 0 && (
                        <div className="mb-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {continueLearningLanguages.map((language) => (
                                    <LanguageCard
                                        key={language.name}
                                        language={language}
                                        onLanguageSelect={() => handleLanguageSelect(language.name)}
                                        onCardClick={setSelectedLanguage}
                                        isContinous={true}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {newLanguages.map((language) => (
                                <LanguageCard
                                    key={language.name}
                                    language={language}
                                    onLanguageSelect={() => handleLanguageSelect(language.name)}
                                    onCardClick={setSelectedLanguage}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default LearnClient;
