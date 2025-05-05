import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Rss } from "lucide-react";
import type { BlogPost } from '@/services/blog';
import { getBlogPosts } from '@/services/blog';

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="flex flex-col h-full transition-shadow hover:shadow-lg">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{post.excerpt}</CardDescription>
      </CardContent>
      <CardContent>
         {/* In a real app, this link would go to the actual blog post page */}
        <Button variant="link" asChild className="p-0 h-auto">
          <Link href={post.url}>
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
         <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <Rss className="mr-2 h-7 w-7 text-primary" /> Blog
        </h1>
        {/* Optional: Add a search or filter bar here */}
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post.url} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">No blog posts found. Stay tuned for updates!</p>
        </div>
      )}
    </div>
  );
}
