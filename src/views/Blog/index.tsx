import React, { useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import MainLayout from '../../layouts/Main';
import Columns from '../../components/Bulma/Columns';
import Column from '../../components/Bulma/Column';
import Box from '../../components/Bulma/Box';
import Breadcrumb from '../../components/Bulma/Breadcrumb';
import PageContent from '../../components/PageContent';
import Post from '../../components/Post';
import Pagination from '../../components/Pagination';
import SEO, { SEOProps } from '../../components/SEO';
import { Data, Menu } from '../../models';
import { useLocalStorageState } from '../../hooks';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface BlogProps {
  posts: Data.BlogPost[];
}

const ITEMS_PER_PAGE = 10;

const Blog: React.FC<SEOProps & BlogProps> = ({
  children,
  posts,
  ...seoProps
}) => {
  const classes = useStyles();
  const [blogPage, setBlogPage] = useLocalStorageState<number>('blogPage', 0);

  const pages = useMemo(() => {
    const sorted = posts
      .filter((p) => !!p.frontmatter.pinned)
      .concat(posts.filter((p) => !p.frontmatter.pinned));
    const items: Data.BlogPost[][] = [];
    while (sorted.length) {
      items.push(sorted.splice(0, ITEMS_PER_PAGE));
    }
    return items;
  }, [posts]);

  const breadcrumbItems: Menu.NavLink[] = [
    {
      name: 'Blog',
      url: {
        href: '/blog',
      },
    },
  ];

  return (
    <MainLayout>
      <SEO {...seoProps} />
      <Box>
        <Breadcrumb items={breadcrumbItems} />
      </Box>
      <Columns>
        <Column>
          <PageContent>
            {pages[blogPage].map((post) => (
              <Post post={post} key={post.fields.slug} />
            ))}

            <Pagination
              prev={
                pages[blogPage - 1] && (
                  <a
                    onClick={() => setBlogPage(blogPage - 1)}
                    rel="prev"
                    className="pagination-previous"
                    title="Daha yeni içerikler"
                  >
                    ← Daha yeni
                  </a>
                )
              }
              next={
                pages[blogPage + 1] && (
                  <a
                    onClick={() => setBlogPage(blogPage + 1)}
                    rel="next"
                    className="pagination-next"
                    title="Daha eski içerikler"
                  >
                    Daha eski →
                  </a>
                )
              }
            />
          </PageContent>
        </Column>
      </Columns>
    </MainLayout>
  );
};

export default Blog;
