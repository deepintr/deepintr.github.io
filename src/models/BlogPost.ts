import { Frontmatter } from "./Frontmatter";

export interface BlogPost {
  id: string;
  excerpt: string;
  html: string;
  fields: {
    slug: string;
  };
  frontmatter: Frontmatter;
}
