import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Info, Github, Linkedin, Twitter } from "lucide-react"; // Assuming you might add social links

export default function AboutPage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight flex items-center justify-center mb-8">
        <Info className="mr-2 h-7 w-7 text-primary" /> About DevHub
      </h1>

      <Card className="overflow-hidden shadow-md">
        <CardHeader className="bg-muted/50 p-6 flex flex-row items-center space-x-4">
          <Avatar className="h-16 w-16">
            {/* Add your image source here */}
            <AvatarImage src="https://picsum.photos/100/100" alt="Creator Avatar" data-ai-hint="professional avatar developer" />
            {/* Fallback initials */}
            <AvatarFallback>CD</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-2xl">The Creator</CardTitle>
            <p className="text-muted-foreground">Passionate Developer & Educator</p>
             {/* Optional Social Links */}
             {/*
             <div className="flex space-x-2 mt-2">
               <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Github className="h-5 w-5" /></a>
               <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></a>
               <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></a>
             </div>
             */}
          </div>
        </CardHeader>
        <CardContent className="p-6 text-foreground/90 space-y-4">
          <p>
            Welcome to DevHub (formerly Coders Palace)! I'm [Your Name], the creator behind this platform.
            My journey into the world of coding started [mention year/event], and since then, I've been captivated by the power of technology to solve problems and create amazing things.
          </p>
          <p>
            I built DevHub with a simple vision: to create a space where developers, from beginners taking their first steps to seasoned professionals, can find valuable resources, learn new skills, and connect with the broader tech community.
          </p>
           <p>
             Whether you're looking for clear tutorials, insights into the latest tech trends, or reliable documentation for your favorite tools, I hope DevHub becomes a go-to resource in your development journey.
           </p>
        </CardContent>
      </Card>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Our Vision</CardTitle>
        </CardHeader>
        <CardContent className="text-foreground/90 space-y-4">
           <p>
            DevHub aims to be more than just a collection of articles and videos. It's envisioned as a growing community hub. We strive to provide:
          </p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
             <li><strong className="text-foreground">Quality Content:</strong> Clear, concise, and accurate tutorials and articles.</li>
             <li><strong className="text-foreground">Practical Knowledge:</strong> Focus on real-world applications and best practices.</li>
             <li><strong className="text-foreground">Accessible Learning:</strong> Resources for all skill levels in an easy-to-navigate format.</li>
             <li><strong className="text-foreground">Community Focus:</strong> A platform that encourages sharing and collaboration (future goal!).</li>
          </ul>
          <p>
             Thank you for visiting DevHub. Explore, learn, and happy coding!
           </p>
        </CardContent>
      </Card>
    </div>
  );
}
