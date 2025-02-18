import { NextResponse } from "next/server";
import Parser from 'rss-parser';

interface LinkedInPost {
  id: string;
  title: string;
  link: string;
  content: string;
  pubDate: string;
}

const COMPANY_NAME = "boston-genesis-fund"; // Your LinkedIn company name

export async function GET() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(
      `https://www.linkedin.com/company/${COMPANY_NAME}/feed?format=rss`
    );

    const posts: LinkedInPost[] = feed.items.map(item => ({
      id: item.guid || item.link || '',
      title: item.title || '',
      link: item.link || '',
      content: item.content || '',
      pubDate: item.pubDate || '',
    }));

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Error fetching LinkedIn RSS feed:", error);
    return NextResponse.json(
      { error: "Failed to fetch LinkedIn posts" },
      { status: 500 }
    );
  }
} 