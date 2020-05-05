import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Blog from '../views/Blog';
import { Data } from '../models';

const IndexPage: React.FC<PageProps<Data.Data>> = ({ data, location }) => {
  const siteDesc = data.site.siteMetadata.description;
  const posts = data.allMarkdownRemark.edges;

  return <Blog title={siteDesc} posts={posts.map((p) => p.node)} />;
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
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
            date
            title
            author
            pinned
          }
        }
      }
    }
  }
`;
