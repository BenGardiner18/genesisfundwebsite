'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

interface Post {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  publish_date: string;
  thumbnail_url?: string;
  status?: string;
}

function PostSkeleton() {
  return (
    <Card className="flex flex-col h-full">
      <Skeleton className="w-full pt-[56.25%]" />
      <CardHeader>
        <Skeleton className="h-8 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-24" />
      </CardContent>
      <CardFooter className="mt-auto">
        <Skeleton className="h-10 w-24" />
      </CardFooter>
    </Card>
  );
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);
  const { toast } = useToast();

  // Define which statuses to hide
  const hiddenStatuses = ['deleted','archived']; // Add or remove statuses as needed

  const convertedDate = (date: string) => {
    return new Date(Number(date) * 1000).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  }

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog/posts');
        
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        // Filter out posts with hidden statuses
        const filteredPosts = data.data.filter((post: Post) => 
          !post.status || !hiddenStatuses.includes(post.status.toLowerCase())
        );
        setPosts(filteredPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        toast({
          title: "Error",
          description: "Failed to load blog posts. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [toast]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribing(true);
    try {
      const response = await fetch('/api/blog/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }

      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <div className="p-8 items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Stay updated with our latest insights and news
        </p>
        <form onSubmit={handleSubscribe} className="flex max-w-md mx-auto gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" size="lg" disabled={subscribing}>
            {subscribing ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <>
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
          </>
        ) : (
          posts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
              {post.thumbnail_url && (
                <div 
                  className="w-full pt-[56.25%] relative bg-cover bg-center" 
                  style={{ backgroundImage: `url(${post.thumbnail_url})` }}
                />
              )}
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{post.title}</CardTitle>
                 
                </div>
                <CardDescription>{post.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-row gap-2">
                <p className="text-sm text-muted-foreground">
                  {convertedDate(post.publish_date)}
                </p>
                {post.status && (
                    <Badge variant="secondary">{post.status}</Badge>
                  )}
              </CardContent>
              <CardFooter className="mt-auto">
                <Button 
                  variant="outline" 
                  asChild
                >
                  <Link href={`/blog/${post.id}`}>
                    Read More
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
    </div>
  );
} 