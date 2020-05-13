import React from 'react';
import { Link, graphql, PageProps } from 'gatsby';
import { createUseStyles } from 'react-jss';
import MainLayout from '../../layouts/Main';
import Columns from '../../components/Bulma/Columns';
import Column from '../../components/Bulma/Column';
import Box from '../../components/Bulma/Box';
import Breadcrumb from '../../components/Bulma/Breadcrumb';
import PageContent from '../../components/PageContent';
import Post from '../../components/Post';
import Pagination from '../../components/Pagination';
import SEO from '../../components/SEO';
import { Data, Menu } from '../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

interface PageContext {
  limit: number;
  skip: number;
  numPages: number;
  currentPage: number;
  pathPrefix: string;
}

const BlogListTemplate: React.FC<PageProps<Data.Data, PageContext>> = ({
  data,
  pageContext,
  location,
}) => {
  const classes = useStyles();

  const posts = data.allMarkdownRemark.edges.map((e) => e.node);
  const { currentPage, numPages, pathPrefix } = pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString();
  const nextPage = (currentPage + 1).toString();

  const breadcrumbItems: Menu.NavLink[] = [
    {
      name: 'Blog',
      url: {
        href: pathPrefix,
      },
    },
  ];

  breadcrumbItems.push({
    name: `Sayfa ${currentPage}`,
    url: {
      href: '',
    },
  });

  return (
    <MainLayout>
      <SEO title="Blog" />
      <Box>
        <Breadcrumb items={breadcrumbItems} />
      </Box>
      <Columns>
        <Column>
          <PageContent>
            {posts.map((post) => (
              <Post post={post} key={post.fields.slug} />
            ))}

            <Pagination
              prev={
                !isFirst && (
                  <Link
                    to={`${pathPrefix}/${prevPage}`}
                    rel="prev"
                    className="pagination-previous"
                  >
                    ← Önceki
                  </Link>
                )
              }
              next={
                !isLast && (
                  <Link
                    to={`${pathPrefix}/${nextPage}`}
                    rel="next"
                    className="pagination-next"
                  >
                    Sonraki →
                  </Link>
                )
              }
            />
          </PageContent>
        </Column>
      </Columns>
    </MainLayout>
  );
};

export default BlogListTemplate;

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___pinned, frontmatter___date]
        order: [ASC, DESC]
      }
      limit: $limit
      skip: $skip
    ) {
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
