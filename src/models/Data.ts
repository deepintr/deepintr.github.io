export declare namespace Data {
  export interface EdgeNode<T> {
    node: T;
  }

  export interface SiteMetadata {
    title: string;
    description: string;
    siteUrl: string;
    author: string;
  }

  export interface Frontmatter {
    title: string;
    date: string;
    description: string;
    author: string;
    pinned?: boolean;
  }

  export interface BlogPost {
    id: string;
    excerpt: string;
    html: string;
    fields: {
      slug: string;
    };
    frontmatter: Frontmatter;
  }

  export interface Data {
    site: {
      siteMetadata: SiteMetadata;
    };
    markdownRemark: BlogPost;
    allMarkdownRemark: {
      edges: EdgeNode<BlogPost>[];
    };
  }
}
