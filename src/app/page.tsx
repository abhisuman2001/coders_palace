import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Rss, BookOpenText, Youtube } from "lucide-react";
import type { YouTubeVideo } from '@/services/youtube';
import { getYouTubeVideos } from '@/services/youtube';

async function VideoCard({ video }: { video: YouTubeVideo }) {
  // Placeholder for actual video thumbnail fetching if needed
  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`;

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-lg">
       <CardHeader className="p-0">
         {/* Using aspect-video for consistent video placeholder sizing */}
        <div className="aspect-video overflow-hidden">
           {/* In a real app, this might be replaced with a proper embed or link to a video player */}
           {/* Using an anchor tag that looks like a video player */}
          <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumbnailUrl}
              alt={video.title}
              className="w-full h-full object-cover"
              data-ai-hint="youtube video thumbnail coding tutorial"
            />
          </a>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">{video.title}</CardTitle>
        <Button variant="link" asChild className="p-0 h-auto">
          <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer" className="text-primary">
            Watch on YouTube <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}


export default async function Home() {
  // Replace 'YOUR_CHANNEL_ID' with the actual YouTube channel ID
  const videos = await getYouTubeVideos('YOUR_CHANNEL_ID');

  return (
    <div className="space-y-12">
      <section className="text-center py-12 bg-card rounded-lg shadow-sm">
        <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">Welcome to DevHub</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Your central hub for coding tutorials, tech insights, and essential developer documentation.
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Button asChild size="lg">
            <Link href="/blog">
              Explore Blog <Rss className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/docs">
              Browse Docs <BookOpenText className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center">
          <Youtube className="mr-2 h-7 w-7 text-primary" /> Latest Tutorials
        </h2>
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard key={video.videoId} video={video} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No videos available at the moment. Check back soon!</p>
        )}
      </section>

       <section>
        <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center">
          <Rss className="mr-2 h-7 w-7 text-primary" /> From the Blog
        </h2>
         {/* Placeholder - Link to Blog page */}
         <Card className="bg-secondary">
           <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">Discover the latest articles on development trends, tool guides, and coding best practices.</p>
            <Button asChild>
              <Link href="/blog">
                Visit the Blog <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
           </CardContent>
         </Card>
      </section>

       <section>
        <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center">
          <BookOpenText className="mr-2 h-7 w-7 text-primary" /> Documentation Hub
        </h2>
        {/* Placeholder - Link to Docs page */}
        <Card className="bg-secondary">
           <CardContent className="pt-6">
            <p className="text-muted-foreground mb-4">Find comprehensive guides and tutorials for essential developer tools like Git, VS Code, and more.</p>
            <Button asChild>
              <Link href="/docs">
                Explore Documentation <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
           </CardContent>
         </Card>
      </section>
    </div>
  );
}
