import React from "react";
import { graphql, PageProps } from "gatsby";
import Home from "../views/Home";
import { Data } from "../models";

const IndexPage: React.FC<PageProps<Data>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return <Home title={siteTitle} posts={posts.map((p) => p.node)} />;
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            author
          }
        }
      }
    }
  }
`;
