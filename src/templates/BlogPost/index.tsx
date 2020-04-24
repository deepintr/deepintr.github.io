import React from "react";
import { Link, graphql, PageProps } from "gatsby";
import { createUseStyles } from "react-jss";
import Container from "../../components/Bulma/Container";
import MainLayout from "../../layouts/Main";
import PageContent from "../../components/PageContent";
import SEO from "../../components/SEO";
import Post from "../../components/Post";
import { Data, BlogPost } from "../../models";
import styles from "./styles";

const useStyles = createUseStyles(styles);

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
  const classes = useStyles();
  const { previous, next } = pageContext;

  const post = data.markdownRemark;

  return (
    <MainLayout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Container>
        <PageContent>
          <Post {...post} details commentCount={5} />

          <nav className="pagination" role="navigation" aria-label="pagination">
            <span>
              {previous && (
                <Link
                  to={previous.fields.slug}
                  rel="prev"
                  className="pagination-previous"
                >
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </span>
            <span>
              {next && (
                <Link
                  to={next.fields.slug}
                  rel="next"
                  className="pagination-next"
                >
                  {next.frontmatter.title} →
                </Link>
              )}
            </span>
          </nav>
        </PageContent>
      </Container>
    </MainLayout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
