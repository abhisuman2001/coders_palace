/**
 * Represents a documentation article with its title and content URL.
 */
export interface DocumentationArticle {
  /**
   * The title of the documentation article.
   */
  title: string;
  /**
   * The URL where the documentation content can be accessed.
   */
  contentUrl: string;
}

/**
 * Asynchronously retrieves a list of documentation articles for a specific tool.
 *
 * @param tool The name of the tool (e.g., 'Git', 'VS Code').
 * @returns A promise that resolves to an array of DocumentationArticle objects.
 */
export async function getDocumentation(tool: string): Promise<DocumentationArticle[]> {
  // TODO: Implement this by calling an API or fetching data from a documentation source.

  return [
    {
      title: 'Git Basics',
      contentUrl: '/docs/git-basics'
    },
    {
      title: 'VS Code Setup',
      contentUrl: '/docs/vs-code-setup'
    }
  ];
}
