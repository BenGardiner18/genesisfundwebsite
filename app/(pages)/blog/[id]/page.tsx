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
  data: {
    title: string;
    subtitle: string;
    content: string;
    created_at: string;
    thumbnail_url?: string;
    web_url: string;
    authors?: any[];
    publish_date?: number;
    status?: string;
    free_web_content?: string;
  };
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

  const postData = post?.data;


  return (
    <div className="container max-w-4xl mx-auto pb-5">
      <div className="flex justify-between items-center my-4">
        <Button asChild>
          <Link href="/blog">← Back to Blog</Link>
        </Button>
        {postData?.web_url && (
          <Button asChild variant="outline">
            <Link href={postData.web_url} target="_blank">Read it in Beehiiv</Link>
          </Button>
        )}
      </div>

      {loading ? (
        <PostSkeleton />
      ) : (
        <Card className="rounded-lg">
        
          <CardHeader>
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{postData?.title}</h1>
              {postData?.thumbnail_url && (
                <div 
                  className="w-full h-[400px] bg-cover bg-center rounded-lg" 
                  style={{ backgroundImage: `url(${postData.thumbnail_url})` }}
                />
              )}
              <div className="flex flex-row gap-2 justify-between">
              <div className="flex items-center gap-2 text-muted-foreground">
                {postData?.authors?.map((author: any, index: number) => (
                  <p key={author.id} className="text-sm">
                    {index > 0 ? ', ' : 'By '}{author}
                  </p>
                ))}
               
              </div>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  {postData?.publish_date && new Date(postData.publish_date * 1000).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <Badge variant="secondary">{postData?.status}</Badge>
              </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: postData?.free_web_content || '' }}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}