"use client"

import React, { useState, useRef, useEffect } from "react"
import { Compass, GraduationCap, MessagesSquare, Pencil, Hash, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const features = [
    {
        icon: Compass,
        title: "Discover",
        description: "The best tutors and courses",
        bgColor: "bg-green-600",
        hoverColor: "hover:bg-green-700"
    },
    {
        icon: GraduationCap,
        title: "Learn",
        description: "Active & interactive learning paths",
        bgColor: "bg-yellow-600",
        hoverColor: "hover:bg-yellow-700"
    },
    {
        icon: MessagesSquare,
        title: "Community",
        description: "Engage your audience",
        bgColor: "bg-blue-600",
        hoverColor: "hover:bg-blue-700"
    },
    {
        icon: Pencil,
        title: "Make",
        description: "Engaging content, quizzes & assignments",
        bgColor: "bg-red-600",
        hoverColor: "hover:bg-red-700"
    },
    {
        icon: Hash,
        title: "Classroom",
        description: "Enter code to join active sessions",
        bgColor: "bg-purple-600",
        hoverColor: "hover:bg-purple-700"
    }
]

export function FeaturesGridSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const nextSlide = () => {
        if (currentIndex < features.length - 1) {
            setCurrentIndex((prev) => prev + 1)
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1)
        }
    }

    useEffect(() => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const cardWidth = container.scrollWidth / features.length
            container.scrollTo({
                left: currentIndex * cardWidth,
                behavior: "smooth"
            })
        }
    }, [currentIndex])

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true)
        setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0))
        setScrollLeft(scrollContainerRef.current?.scrollLeft || 0)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return
        e.preventDefault()
        const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0)
        const walk = (x - startX) * 2
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollLeft - walk
        }
    }

    const handleMouseUp = () => {
        setIsDragging(false)
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const cardWidth = container.scrollWidth / features.length
            const newIndex = Math.round(container.scrollLeft / cardWidth)
            setCurrentIndex(Math.min(Math.max(newIndex, 0), features.length - 1))
        }
    }

    const handleMouseLeave = () => {
        if (isDragging) {
            handleMouseUp()
        }
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0))
        setScrollLeft(scrollContainerRef.current?.scrollLeft || 0)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        const x = e.touches[0].pageX - (scrollContainerRef.current?.offsetLeft || 0)
        const walk = (x - startX) * 2
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = scrollLeft - walk
        }
    }

    const handleTouchEnd = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const cardWidth = container.scrollWidth / features.length
            const newIndex = Math.round(container.scrollLeft / cardWidth)
            setCurrentIndex(Math.min(Math.max(newIndex, 0), features.length - 1))
        }
    }

    return (
        <section className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-muted">
            <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold mb-3">Bitroot for every occasion.</h2>
                <p className="text-muted-foreground text-lg">Bitroot makes learning easy and interactive with peers and the community.</p>
            </div>

            <div className="relative w-full mx-auto">
                {/* Left Arrow */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-background border-2 border-border rounded-full p-2 hover:bg-muted transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentIndex === 0}
                    aria-label="Previous features"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Scrollable Container */}
                <div
                    ref={scrollContainerRef}
                    className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    <div className="flex gap-8 w-max">
                        {features.map((feature, idx) => (
                            <div key={idx} className="w-80 flex-shrink-0">
                                <FeatureCard
                                    icon={<feature.icon className="w-8 h-8 text-white" />}
                                    title={feature.title}
                                    description={feature.description}
                                    bgColor={feature.bgColor}
                                    hoverColor={feature.hoverColor}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-background border-2 border-border rounded-full p-2 hover:bg-muted transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={currentIndex >= features.length - 1}
                    aria-label="Next features"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
                {features.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx
                                ? "bg-primary w-8"
                                : "bg-muted-foreground/30"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}

function FeatureCard({
    icon,
    title,
    description,
    bgColor,
    hoverColor
}: {
    icon: React.ReactNode
    title: string
    description: string
    bgColor: string
    hoverColor: string
}) {
    return (
        <div className={`flex flex-col items-start gap-4 p-6 rounded-2xl cursor-pointer border shadow-lg hover:scale-90 bg-background transition-all text-foreground`}>
            <div className={`flex items-center justify-center w-12 h-12 ${bgColor} rounded-2xl`}>
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-foreground text-sm">{description}</p>
            </div>
        </div>
    )
}
