"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Users, FileText, MessageSquare } from "lucide-react";

const ResourcesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Founder Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We&apos;ve compiled helpful resources and tools to support founders at every stage of their journey.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Resource Cards */}
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start mb-4">
            <BookOpen className="h-6 w-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Fundraising Guide</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Comprehensive guide on raising capital, including pitch deck templates, valuation frameworks, and negotiation tips.
          </p>
          <Link 
            href="/resources/fundraising-guide" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            Learn more <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start mb-4">
            <FileText className="h-6 w-6 text-blue-600 mr-3" />
            <h3 className="text-xl font-semibold">Legal Templates</h3>
          </div>
          <p className="text-gray-600 mb-4">
            Essential legal documents including SAFE agreements, term sheets, and employment contracts.
          </p>
          <Link 
            href="/resources/legal-templates" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            Access templates <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Community Section */}
      {/* <div className="bg-blue-50 rounded-xl p-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
            <Users className="h-8 w-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Join Our Founder Community</h2>
          <p className="text-gray-600 mb-6">
            Connect with fellow founders, share experiences, and get real-time advice from our network of entrepreneurs and investors.
          </p>
          <Link 
            href="https://chat.whatsapp.com/Hi2evLWeL55Lv0gVQVybds" 
            target="_blank"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Join WhatsApp Group
          </Link>
        </div>
      </div> */}

      {/* Additional Resources Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-semibold mb-2">Growth Metrics Template</h3>
          <p className="text-gray-600 text-sm mb-3">
            Track your startup&apos;s key metrics with our pre-built spreadsheet templates.
          </p>
          <Link href="/resources/metrics-template" className="text-blue-600 text-sm hover:text-blue-800">
            Download template →
          </Link>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-semibold mb-2">Hiring Playbook</h3>
          <p className="text-gray-600 text-sm mb-3">
            Best practices for building your founding team and making early hires.
          </p>
          <Link href="/resources/hiring-guide" className="text-blue-600 text-sm hover:text-blue-800">
            Read guide →
          </Link>
        </div>

        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-semibold mb-2">Product Market Fit Guide</h3>
          <p className="text-gray-600 text-sm mb-3">
            Framework for validating your product and finding product-market fit.
          </p>
          <Link href="/resources/pmf-guide" className="text-blue-600 text-sm hover:text-blue-800">
            View guide →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage; 