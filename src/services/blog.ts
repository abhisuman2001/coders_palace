/**
 * Represents a blog post with its title, excerpt, and URL.
 */
export interface BlogPost {
  /**
   * The title of the blog post.
   */
  title: string;
  /**
   * A short excerpt or summary of the blog post.
   */
  excerpt: string;
  /**
   * The URL where the full blog post can be accessed.
   */
  url: string;
}

/**
 * Asynchronously retrieves a list of blog posts.
 *
 * @returns A promise that resolves to an array of BlogPost objects.
 */
export async function getBlogPosts(): Promise<BlogPost[]> {
  // TODO: Implement this by calling an API or fetching data from a CMS.

  return [
    {
      title: 'How Git Works',
      excerpt: 'An introduction to Git version control.',
      url: '/blog/how-git-works'
    },
    {
      title: 'Best VS Code Extensions',
      excerpt: 'Top extensions for productivity in VS Code.',
      url: '/blog/best-vs-code-extensions'
    }
  ];
}
