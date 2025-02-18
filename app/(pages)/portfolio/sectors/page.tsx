"use client";

import { Briefcase, Code, Brain, Heart, Building, ShoppingCart } from "lucide-react";

interface SectorProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples?: string[];
}

const sectors: SectorProps[] = [
  {
    icon: <Code className="h-8 w-8 text-blue-600" />,
    title: "Enterprise Software",
    description: "B2B solutions that modernize workflows and improve efficiency",
    examples: ["AI/ML Tools", "Developer Tools", "Security Solutions"]
  },
  {
    icon: <Brain className="h-8 w-8 text-blue-600" />,
    title: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence and machine learning applications",
    examples: ["NLP Solutions", "Computer Vision", "Predictive Analytics"]
  },
  {
    icon: <Heart className="h-8 w-8 text-blue-600" />,
    title: "Healthcare Tech",
    description: "Digital solutions transforming healthcare delivery and patient care",
    examples: ["Digital Health", "Telemedicine", "Health Analytics"]
  },
  {
    icon: <Building className="h-8 w-8 text-blue-600" />,
    title: "FinTech",
    description: "Innovative financial technology solutions and services",
    examples: ["Payment Solutions", "WealthTech", "InsurTech"]
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-blue-600" />,
    title: "E-commerce & Retail",
    description: "Next-generation shopping and retail technology",
    examples: ["D2C Platforms", "Retail Analytics", "Supply Chain Tech"]
  },
  {
    icon: <Briefcase className="h-8 w-8 text-blue-600" />,
    title: "Future of Work",
    description: "Tools and platforms shaping the modern workplace",
    examples: ["Remote Work Tools", "HR Tech", "Collaboration Platforms"]
  },
];

const SectorsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Investment Sectors
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We invest in transformative technology companies across these key sectors
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sectors.map((sector) => (
          <div key={sector.title} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              {sector.icon}
              <h3 className="text-xl font-semibold ml-3">{sector.title}</h3>
            </div>
            <p className="text-gray-600 mb-4">{sector.description}</p>
            {sector.examples && (
              <div className="flex flex-wrap gap-2">
                {sector.examples.map((example) => (
                  <span
                    key={example}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700"
                  >
                    {example}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectorsPage; 