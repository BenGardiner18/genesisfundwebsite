import Image from "next/image";
import BostonSchoolsMap from "@/public/BostonSchoolsMap.png";
import { ArrowRight, Target, Users, Briefcase, Rocket, Star, TrendingUp, Zap, Network, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const InvestmentThesis = () => {
  // Add JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Genesis Fund Investment Thesis",
    "description": "Backing the next generation of visionary student founders building category-defining companies.",
    "publisher": {
      "@type": "Organization",
      "name": "Genesis Fund",
      "logo": {
        "@type": "ImageObject",
        "url": "https://genesisfund.co/logo.png"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Section with Subtle Background */}
      <div className="relative overflow-hidden bg-blue-900 text-white py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-8">
            <h1 className="text-6xl font-bold mb-6 animate-fade-up">
              Powering the Next Wave of
              <span className="block mt-2">
                Student Innovation
              </span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Genesis Fund backs exceptional student founders building category-defining companies at the intersection of ambition and innovation.
            </p>
            <div className="flex justify-center gap-4 pt-8">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <Link href="/apply">Pitch Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* Investment Highlights */}
        <section className="text-center space-y-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "$2M", label: "Fund Size" },
              { value: "$50K", label: "Initial Check" },
              { value: "30", label: "Portfolio Companies" },
              { value: "30+", label: "VC Partners" }
            ].map((stat, i) => (
              <div key={i} className="bg-blue-900 p-8 rounded-2xl text-white transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Focus */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Investment Focus</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re sector-agnostic but deeply passionate about transformative technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <TrendingUp />,
                title: "Enterprise SaaS",
                desc: "Next-gen solutions for enterprise workflow automation, AI-powered analytics, and vertical SaaS platforms."
              },
              {
                icon: <Zap />,
                title: "AI/ML",
                desc: "Cutting-edge AI applications in computer vision, NLP, generative AI, and autonomous systems."
              },
              {
                icon: <Star />,
                title: "Digital Health",
                desc: "Revolutionary healthcare solutions leveraging AI, biotech, and digital therapeutics."
              },
              {
                icon: <Globe />,
                title: "Climate Tech",
                desc: "Innovative solutions for sustainability, clean energy, and carbon reduction."
              }
            ].map((focus, i) => (
              <div key={i} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <div className="bg-gray-100 p-3 rounded-lg w-fit mb-6 group-hover:bg-gray-200 transition-colors">
                  <div className="h-6 w-6 text-gray-900">{focus.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{focus.title}</h3>
                <p className="text-gray-600">{focus.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Investment Criteria */}
        <section className="bg-gray-50 p-12 rounded-3xl">
          <h2 className="text-4xl font-bold mb-12 text-center">What We Look For</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Users className="mr-3 text-gray-900" /> Exceptional Teams
              </h3>
              <ul className="space-y-4">
                {[
                  "Student founders with unique insights",
                  "Strong technical or domain expertise",
                  "Ambitious vision with pragmatic execution",
                  "Resilient and adaptable mindset"
                ].map((item, i) => (
                  <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                    <ArrowRight className="text-gray-900 mr-3" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Target className="mr-3 text-gray-900" /> Market Opportunity
              </h3>
              <ul className="space-y-4">
                {[
                  "$1B+ TAM with clear expansion potential",
                  "Product-led growth capability",
                  "Defensible moat through tech or network effects",
                  "Clear path to $100M+ ARR"
                ].map((item, i) => (
                  <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm">
                    <ArrowRight className="text-gray-900 mr-3" size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Value Add */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">The Genesis Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond capital, we&apos;re committed to accelerating your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Network />,
                title: "Elite Network",
                items: [
                  "Direct access to 30+ top-tier VCs",
                  "Connections to Fortune 500 customers",
                  "Student founder community",
                  "Industry expert mentorship"
                ]
              },
              {
                icon: <Briefcase />,
                title: "Strategic Support",
                items: [
                  "Go-to-market strategy",
                  "Talent acquisition",
                  "Product development",
                  "Financial modeling & KPIs"
                ]
              },
              {
                icon: <Rocket />,
                title: "Resources",
                items: [
                  "$Cloud credits",
                  "Legal & accounting support",
                  "Software tool discounts",
                  "Boston office space"
                ]
              }
            ].map((section, i) => (
              <div key={i} className="bg-blue-900 p-8 rounded-2xl text-white">
                <div className="h-8 w-8 mb-6">{section.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3 text-gray-400">
                  {section.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-900 text-white p-12 rounded-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Epic?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            If you&apos;re a student founder building the next big thing, we want to hear from you.
          </p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            <Link href="/apply">Apply for Funding</Link>
          </Button>
        </section>
      </div>
    </>
  );
};

export default InvestmentThesis;
