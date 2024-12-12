import Image from "next/image";
import BostonSchoolsMap from "@/public/BostonSchoolsMap.png";
const InvestmentThesis = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Investment Thesis</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-700">
            Genesis Fund is a $2M pre-seed fund focused on backing exceptional student entrepreneurs building innovative solutions across various sectors. We partner with founders at the earliest stages and support them through their entrepreneurial journey.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Investment Focus</h2>
          <div className="flex flex-row items-center justify-between gap-8">
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Pre-seed investments in student-led startups</li>
              <li>Initial checks between $25K - $100K</li>
              <li>Sector-agnostic with particular interest in:</li>
              <ul className="list-circle pl-6 space-y-1 mt-2">
                <li>Enterprise SaaS</li>
                <li>Consumer Technology</li>
                <li>Deep Tech</li>
                <li>Digital Health</li>
                <li>Climate Tech</li>
              </ul>
            </ul>
            <div className="relative w-[400px] h-[400px] flex-shrink-0">
              <Image 
                src={BostonSchoolsMap.src}
                alt="Boston Schools Map"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">What We Look For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Team</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Strong technical or domain expertise</li>
                <li>• Clear vision and execution capability</li>
                <li>• Student founders or recent graduates</li>
                <li>• Commitment to building long-term</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Business</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Innovative solution to clear problem</li>
                <li>• Large addressable market</li>
                <li>• Early signs of product-market fit</li>
                <li>• Scalable business model</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Value Add</h2>
          <div className="text-gray-700 space-y-3">
            <p>Beyond capital, we support our portfolio companies through:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access to our network of industry experts and mentors</li>
              <li>Connections to follow-on investors</li>
              <li>Recruiting support and talent networking</li>
              <li>Strategic guidance and operational support</li>
              <li>Community of fellow student founders</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InvestmentThesis;
