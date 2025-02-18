import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

const CACHE_DURATION = 3600; // 1 hour in seconds

export async function GET(request: Request, context: any) {
  // Await the params object before accessing its properties
  const params = await context.params;
  const { id } = params;
  const CACHE_KEY = `blog_post_${id}`;
  
  try {
    // Try to get cached data first
    const cachedPost = await kv.get(CACHE_KEY);
    if (cachedPost) {
      return NextResponse.json({ data: cachedPost });
    }

    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${process.env.NEXT_PUBLIC_BEEHIVE_PUBLICATION_ID}/posts/${id}?expand=stats,free_web_content,free_email_content,free_rss_content,premium_web_content,premium_email_content,premium_rss_content,thumbnail,meta,audience,creator,publication,segments,clicks,email_previews,web_previews,platform_metrics,email_metrics,web_metrics,rss_metrics,referral_metrics,subscription_metrics,revenue_metrics,platform_performance,email_performance,web_performance,rss_performance,referral_performance,subscription_performance,revenue_performance`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BEEHIVE_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }

    const data = await response.json();
    
    // Cache the results
    await kv.set(CACHE_KEY, data.data, { ex: CACHE_DURATION });

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 });
  }
}
