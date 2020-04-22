import { BlogPost } from "./BlogPost";
import { SiteMetadata } from "./SiteMetadata";

export interface Data {
  site: {
    siteMetadata: SiteMetadata;
  };
  markdownRemark: BlogPost;
  allMarkdownRemark: {
    edges: { node: BlogPost }[];
  };
}
