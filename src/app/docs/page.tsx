import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, BookOpenText, GitBranch, Code } from "lucide-react";
import type { DocumentationArticle } from '@/services/documentation';
import { getDocumentation } from '@/services/documentation';

// Helper function to get an icon based on the tool name (can be expanded)
function getToolIcon(toolName: string) {
  if (toolName.toLowerCase().includes('git')) {
    return <GitBranch className="mr-2 h-5 w-5" />;
  }
  if (toolName.toLowerCase().includes('vs code') || toolName.toLowerCase().includes('vscode')) {
    return <Code className="mr-2 h-5 w-5" />;
  }
  return <BookOpenText className="mr-2 h-5 w-5" />;
}


async function DocCategory({ tool }: { tool: string }) {
  const articles = await getDocumentation(tool);

  if (!articles || articles.length === 0) {
    return null; // Don't render empty categories
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 flex items-center">
        {getToolIcon(tool)} {tool}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Card key={article.contentUrl} className="transition-shadow hover:shadow-lg">
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
            </CardHeader>
            <CardContent>
               {/* In a real app, this would link to the specific doc page */}
              <Button variant="link" asChild className="p-0 h-auto">
                <Link href={article.contentUrl}>
                  Read Guide <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default async function DocsPage() {
  // Define the tools/categories you want to fetch documentation for
  const tools = ['Git', 'VS Code', 'API Development']; // Example tools

  // Fetch all documentation concurrently (optional optimization)
  const docPromises = tools.map(tool => getDocumentation(tool));
  const allDocsArrays = await Promise.all(docPromises);
  const totalDocs = allDocsArrays.flat().length;


  return (
    <div className="space-y-8">
       <h1 className="text-3xl font-bold tracking-tight flex items-center">
        <BookOpenText className="mr-2 h-7 w-7 text-primary" /> Documentation
      </h1>

      {totalDocs > 0 ? (
        tools.map(tool => <DocCategory key={tool} tool={tool} />)
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">Documentation is coming soon. Check back later!</p>
        </div>
      )}
    </div>
  );
}
