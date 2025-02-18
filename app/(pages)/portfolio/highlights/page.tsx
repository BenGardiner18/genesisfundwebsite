"use client";

import { useEffect, useState } from "react";
import { LinkedInEmbed } from 'react-social-media-embed';
import { Trophy, TrendingUp, Award, Newspaper, Loader2, Calendar, ArrowRight } from "lucide-react";

interface LinkedInPost {
  id: string;
  title: string;
  link: string;
  content: string;
  pubDate: string;
}

interface HighlightProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  date: string;
  type: 'achievement' | 'milestone' | 'press';
}

const highlights: HighlightProps[] = [
  {
    icon: <Trophy className="h-6 w-6 text-yellow-500" />,
    title: "Portfolio Company Series A",
    description: "Our portfolio company XYZ raised $10M Series A led by top-tier VCs",
    date: "March 2024",
    type: 'milestone'
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-green-500" />,
    title: "Growth Milestone",
    description: "ABC Tech reaches 1 million active users",
    date: "February 2024",
    type: 'achievement'
  },
  {
    icon: <Newspaper className="h-6 w-6 text-blue-500" />,
    title: "Press Feature",
    description: "Genesis Fund featured in TechCrunch's rising VC firms",
    date: "January 2024",
    type: 'press'
  },
];

const HighlightsPage = () => {
  const [linkedInPosts, setLinkedInPosts] = useState<LinkedInPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLinkedInPosts = async () => {
      try {
        const response = await fetch('/api/linkedin/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch LinkedIn posts');
        }
        const data = await response.json();
        setLinkedInPosts(data.posts);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching LinkedIn posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLinkedInPosts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Portfolio Highlights
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Celebrating the achievements and milestones of our portfolio companies
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {/* LinkedIn Posts Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Latest Updates</h2>
          <div className="space-y-4">
            {loading ? (
              <div className="flex items-center justify-center h-40">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              </div>
            ) : error ? (
              <div className="bg-red-50 p-4 rounded-md">
                <p className="text-red-800">{error}</p>
              </div>
            ) : linkedInPosts.length === 0 ? (
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-gray-600">No recent LinkedIn posts found.</p>
              </div>
            ) : (
              linkedInPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">{post.title}</h3>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(post.pubDate)}
                      </div>
                    </div>
                    <div 
                      className="prose prose-sm max-w-none mb-4"
                      dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    <a 
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      View on LinkedIn
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Highlights Cards Section */}
        {/* <div className="space-y-6">
          <h2 className="text-2xl font-semibold mb-6">Key Milestones</h2>
          {highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gray-50 rounded-lg">{highlight.icon}</div>
                </div>
                <div className="ml-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{highlight.title}</h3>
                    <span className="text-sm text-gray-500">{highlight.date}</span>
                  </div>
                  <p className="text-gray-600 mt-1">{highlight.description}</p>
                  <div className="mt-2">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      highlight.type === 'achievement' ? 'bg-green-100 text-green-800' :
                      highlight.type === 'milestone' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {highlight.type.charAt(0).toUpperCase() + highlight.type.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default HighlightsPage; 