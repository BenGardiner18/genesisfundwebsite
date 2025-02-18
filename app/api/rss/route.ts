import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

const CACHE_KEY = 'rss_feed';
const CACHE_DURATION = 3600; // 1 hour in seconds

export async function GET() {
  try {
    // Try to get cached RSS first
    const cachedRss = await kv.get(CACHE_KEY);
    if (cachedRss) {
      return new NextResponse(cachedRss as string, {
        headers: {
          'Content-Type': 'application/xml',
        },
      });
    }

    // Fetch posts from BeehiveAPI
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.NEXT_PUBLIC_BEEHIVE_PUBLICATION_ID}/posts`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BEEHIVE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }

    const data = await response.json();
    
    // Generate RSS XML
    const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Genesis Fund Blog</title>
    <link>https://genesisfund.co/blog</link>
    <description>Empowering Boston's Brightest Student Founders</description>
    <language>en-us</language>
    <atom:link href="https://genesisfund.co/api/rss" rel="self" type="application/rss+xml"/>
    ${data.data.map((post: any) => `
    <item>
      <title>${escapeXml(post.title || '')}</title>
      <link>https://genesisfund.co/blog/${post.id}</link>
      <guid>https://genesisfund.co/blog/${post.id}</guid>
      <pubDate>${new Date(Number(post.created_at) * 1000).toUTCString()}</pubDate>
      <description>${escapeXml(post.subtitle || '')}</description>
    </item>`).join('')}
  </channel>
</rss>`;

    // Cache the RSS feed
    await kv.set(CACHE_KEY, rssXml, { ex: CACHE_DURATION });

    return new NextResponse(rssXml, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return NextResponse.json(
      { error: 'Failed to generate RSS feed' },
      { status: 500 }
    );
  }
}

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
} 