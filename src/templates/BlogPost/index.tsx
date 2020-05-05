import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import { createUseStyles } from 'react-jss';
import { DiscussionEmbed } from 'disqus-react';
import Container from '../../components/Bulma/Container';
import Breadcrumb from '../../components/Bulma/Breadcrumb';
import Box from '../../components/Bulma/Box';
import MainLayout from '../../layouts/Main';
import PageContent from '../../components/PageContent';
import SEO from '../../components/SEO';
import Post from '../../components/Post';
import Pagination from '../../components/Pagination';
import { Data, Menu } from '../../models';
import { getDisqusConfig, summarize, getUrlParts } from '../../utils';
import styles from './styles';

const useStyles = createUseStyles(styles);

interface PageContext {
  slug: string;
  previous: Data.BlogPost;
  next: Data.BlogPost;
}

const BlogPostTemplate: React.FC<PageProps<Data.Data, PageContext>> = ({
  data,
  pageContext,
  location,
}) => {
  const classes = useStyles();

  const { previous, next } = pageContext;
  const post = data.markdownRemark;

  // Calculate breadcrumb items.
  const breadcrumbItems: Menu.NavLink[] = [];
  const [blogPart, postPart] = getUrlParts(post.fields.slug);
  breadcrumbItems.push({
    name: 'Blog',
    url: {
      href: `/${blogPart}`,
    },
  });
  breadcrumbItems.push({
    name: post.frontmatter.title,
    url: {
      href: `/${postPart}`,
    },
  });

  return (
    <MainLayout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Box>
        <Breadcrumb items={breadcrumbItems} />
      </Box>
      <Container>
        <PageContent>
          <Post post={post} details />

          <Pagination
            prev={
              previous && (
                <Link
                  to={previous.fields.slug}
                  rel="prev"
                  className="pagination-previous"
                  title={previous.frontmatter.title}
                >
                  ← {summarize(previous.frontmatter.title)}
                </Link>
              )
            }
            next={
              next && (
                <Link
                  to={next.fields.slug}
                  rel="next"
                  className="pagination-next"
                  title={next.frontmatter.title}
                >
                  {summarize(next.frontmatter.title)} →
                </Link>
              )
            }
          />
        </PageContent>
        <PageContent>
          <DiscussionEmbed {...getDisqusConfig(post)} />
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
        date
        description
        author
        pinned
      }
    }
  }
`;
