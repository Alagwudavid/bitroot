import React from 'react';
import { 
  Network, 
  BookOpen, 
  Users, 
  FileText, 
  Puzzle, 
  CreditCard, 
  Heart, 
  Ticket, 
  GraduationCap, 
  Calendar,
  Send,
  Package,
  Sparkles
} from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  isNew?: boolean;
}

const features: Feature[] = [
  {
    icon: <Network className="w-10 h-10" />,
    title: "Affiliates",
    description: "Use affiliate marketing to grow your Sales."
  },
  {
    icon: <BookOpen className="w-10 h-10" />,
    title: "Courses & Webinar replays",
    description: "Sell courses & webinar replays that your customers can watch directly on Selar."
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: "Memberships",
    description: "Sell members-only subscriptions on your membership site."
  },
  {
    icon: <FileText className="w-10 h-10" />,
    title: "Landing Pages",
    description: "Create beautiful landing pages that drive more conversions."
  },
  {
    icon: <Puzzle className="w-10 h-10" />,
    title: "Integrations",
    description: "Seamlessly integrate Selar with your favourite tools."
  },
  {
    icon: <CreditCard className="w-10 h-10" />,
    title: "Multicurrency Payments",
    description: "Sell to customers anywhere in the world from one store."
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: "Show Love",
    description: "The best way to receive financial support from your fans and followers."
  },
  {
    icon: <Ticket className="w-10 h-10" />,
    title: "Event Tickets & Training",
    description: "Sell tickets for all kinds of events and access to masterclasses, events, workshops, training, webinars, and even more."
  },
  {
    icon: <GraduationCap className="w-10 h-10" />,
    title: "Masterclasses",
    description: "Host and sell online, physical, or hybrid masterclasses, manage attendees, send reminders, offer replays, and more."
  },
  {
    icon: <Calendar className="w-10 h-10" />,
    title: "Bookings",
    description: "Sell services like consultations and coaching sessions with automated scheduling, calendar integration, and reminders to keep appointments on track.",
    isNew: true
  },
  {
    icon: <Send className="w-10 h-10" />,
    title: "Telegram",
    description: "Easily create and manage Telegram groups, automate member access, and control subscriptions",
    isNew: true
  },
  {
    icon: <Package className="w-10 h-10" />,
    title: "Bundles",
    description: "Sell digital products in bundles with different prices and files. Let customers choose the bundle that fits them best, helping you earn more per sale.",
    isNew: true
  }
];

const productCategories = [
  {
    icon: <FileText className="w-12 h-12 text-blue-600" />,
    title: "Digital Products"
  },
  {
    icon: <BookOpen className="w-12 h-12 text-purple-600" />,
    title: "Ebooks"
  },
  {
    icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
    title: "Courses & Memberships"
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Header Section */}
      <section className="py-16 px-4 text-center">
        <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">
          FEATURES OVERVIEW
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Everything you need in one place.
        </h1>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white border border-gray-100 relative"
            >
              {feature.isNew && (
                <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded">
                  NEW
                </span>
              )}
              <div className="text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sell any kind of product,
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
            service or subscription
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Features CTA */}
      <section className="bg-yellow-50 rounded-2xl max-w-4xl mx-auto my-16 p-12 text-center">
        <div className="flex justify-center mb-4">
          <Sparkles className="w-16 h-16 text-yellow-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          All Features
        </h2>
        <p className="text-gray-600 mb-6">
          Take a look at all the features and benefits that selar has to offer.
        </p>
        <a 
          href="#" 
          className="text-blue-600 hover:text-blue-700 font-semibold hover:underline"
        >
          View all features.
        </a>
      </section>
    </div>
  );
}
