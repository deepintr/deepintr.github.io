import React from "react";
import { Link, graphql, PageProps } from "gatsby";
import Box from "../../components/Bulma/Box";
import BlogLayout from "../../layouts/Blog";
import SEO from "../../components/SEO";
import Post from "../../components/Post";
import { Data, BlogPost } from "../../models";
import Container from "../../components/Bulma/Container";

interface PageContext {
  slug: string;
  previous: BlogPost;
  next: BlogPost;
}

const BlogPostTemplate: React.FC<PageProps<Data, PageContext>> = ({
  data,
  pageContext,
  location,
}) => {
  const { title, description } = data.site.siteMetadata;
  const { previous, next } = pageContext;

  const post = data.markdownRemark;

  return (
    <BlogLayout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Container>
        <Box content>
          <Post {...post} details commentCount={5} />

          <nav>
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <Link to={previous.fields.slug} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </Box>
      </Container>
    </BlogLayout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
      }
    }
  }
`;
