'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface Post {
  id: string;
  title: string;
  subtitle: string;
  authors: string[];
  created: number;
  status: string;
  publish_date: number;
  displayed_date: string | null;
  thumbnail_url: string;
  web_url: string;
  free_web_content?: string;
}

function PostSkeleton() {
  return (
    <Card>
      <Skeleton className="w-full h-[400px] rounded-t-lg" />
      <CardHeader>
        <div className="space-y-2">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-4 w-24" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </CardContent>
    </Card>
  );
}

export default function BlogPostPage() {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { toast } = useToast();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/api/blog/posts/${params.id}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }

        const data = await response.json();
        setPost(data.data);
      } catch (error) {
        console.error('Error fetching post:', error);
        toast({
          title: "Error",
          description: "Failed to load blog post. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchPost();
    }
  }, [params.id, toast]);

  if (!post && !loading) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <main className="container max-w-4xl mx-auto pb-5">
      <nav className="flex justify-between items-center my-4" aria-label="Blog navigation">
        <Button asChild>
          <Link href="/blog" aria-label="Return to blog listing">← Back to Blog</Link>
        </Button>
        {post?.web_url && (
          <Button asChild variant="outline">
            <Link href={post.web_url} target="_blank" rel="noopener noreferrer" aria-label="Read article on Beehiiv">
              Read it in Beehiiv
            </Link>
          </Button>
        )}
      </nav>

      {loading ? (
        <PostSkeleton />
      ) : (
        <article className="rounded-lg">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold">{post?.title}</h1>
            {post?.thumbnail_url && (
              <img 
                src={post.thumbnail_url}
                alt={`Featured image for ${post?.title}`}
                className="w-full h-[400px] object-cover rounded-lg"
              />
            )}
            <div className="flex flex-row gap-2 justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                {post?.authors?.length && post.authors.length > 0 && (
                  <p className="text-sm">
                    By {post.authors.join(', ')}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  {post?.publish_date && new Date(post.publish_date * 1000).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long', 
                    day: 'numeric'
                  })}
                </p>
                {post?.status && <Badge variant="secondary">{post.status}</Badge>}
              </div>
            </div>
          </header>
          <CardContent>
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post?.free_web_content || '' }}
            />
          </CardContent>
        </article>
      )}
    </main>
  );
}