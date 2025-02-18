import { NextResponse } from 'next/server';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const CACHE_KEY = 'rss_feed';
const CACHE_DURATION = 3600; // 1 hour in seconds

export async function GET() {
  try {
    // Try to get cached RSS first
    const cachedRss = await redis.get(CACHE_KEY);
    if (cachedRss) {
      return new NextResponse(cachedRss as string, {
        headers: {
          'Content-Type': 'application/xml; charset=utf-8',
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
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Genesis Fund Blog</title>
    <link>https://genesisfund.co/blog</link>
    <description>Empowering Boston's Brightest Student Founders</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://genesisfund.co/api/rss" rel="self" type="application/rss+xml"/>
    ${data.data.map((post: any) => {
      const pubDate = post.publish_date ? new Date(Number(post.publish_date) * 1000).toUTCString() : new Date(Number(post.created) * 1000).toUTCString();
      const fullContent = post.free_web_content || post.subtitle || '';
      return `
    <item>
      <title>${escapeXml(post.title || '')}</title>
      <link>https://genesisfund.co/blog/${post.id}</link>
      <guid isPermaLink="true">https://genesisfund.co/blog/${post.id}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.subtitle || '')}</description>
      <content:encoded><![CDATA[${fullContent}]]></content:encoded>
      ${post.thumbnail_url ? `<enclosure url="${escapeXml(post.thumbnail_url)}" type="image/jpeg" />` : ''}
      ${post.authors && post.authors.length > 0 ? `<author>${escapeXml(post.authors.join(', '))}</author>` : ''}
    </item>`}).join('')}
  </channel>
</rss>`;

    // Cache the RSS feed
    await redis.set(CACHE_KEY, rssXml, { ex: CACHE_DURATION });

    return new NextResponse(rssXml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
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