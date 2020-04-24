import { BlogPost } from "./BlogPost";
import { SiteMetadata } from "./SiteMetadata";
import { EdgeNode } from "./EdgeNode";

export interface Data {
  site: {
    siteMetadata: SiteMetadata;
  };
  markdownRemark: BlogPost;
  allMarkdownRemark: {
    edges: EdgeNode<BlogPost>[];
  };
}
