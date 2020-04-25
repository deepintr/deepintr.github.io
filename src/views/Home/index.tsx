import React, { useMemo, useState } from "react";
import { createUseStyles } from "react-jss";
import MainLayout from "../../layouts/Main";
import Columns from "../../components/Bulma/Columns";
import Column from "../../components/Bulma/Column";
import PageContent from "../../components/PageContent";
import Post from "../../components/Post";
import Pagination from "../../components/Pagination";
import SEO, { SEOProps } from "../../components/SEO";
import { BlogPost } from "../../models";
import { contact } from "../../data";
import MainButtons from "./components/MainButtons";
import Greeter from "./components/Greeter";
import styles from "./styles";
import { useLocalStorageState } from "../../hooks";

const useStyles = createUseStyles(styles);

export interface HomeProps {
  posts: BlogPost[];
}

const ITEMS_PER_PAGE = 5;

const Home: React.FC<SEOProps & HomeProps> = ({
  children,
  posts,
  ...seoProps
}) => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useLocalStorageState<number>(
    "currentPage",
    0,
  );

  const heroBody = (
    <Greeter
      title={seoProps.title}
      content={<MainButtons contactItems={contact} />}
    />
  );

  const pages = useMemo(() => {
    const items: BlogPost[][] = [];
    const postsCopy = posts.slice();
    while (postsCopy.length) {
      items.push(postsCopy.splice(0, ITEMS_PER_PAGE));
    }
    return items;
  }, [posts]);

  return (
    <MainLayout showHero size="medium" heroBody={heroBody}>
      <SEO {...seoProps} />
      <Columns>
        <Column>
          <PageContent>
            {pages[currentPage].map((post) => (
              <Post post={post} key={post.fields.slug} />
            ))}

            <Pagination
              prev={
                pages[currentPage - 1] && (
                  <a
                    onClick={() => setCurrentPage(currentPage - 1)}
                    rel="prev"
                    className="pagination-previous"
                    title="Daha yeni içerikler"
                  >
                    ← Daha yeni
                  </a>
                )
              }
              next={
                pages[currentPage + 1] && (
                  <a
                    onClick={() => setCurrentPage(currentPage + 1)}
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

export default Home;
