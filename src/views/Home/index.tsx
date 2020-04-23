import React from "react";
import { createUseStyles } from "react-jss";
import MainLayout from "../../layouts/Main";
import Columns from "../../components/Bulma/Columns";
import Column from "../../components/Bulma/Column";
import PageContent from "../../components/PageContent";
import Post from "../../components/Post";
import SEO, { SEOProps } from "../../components/SEO";
import { BlogPost } from "../../models";
import styles from "./styles";

const useStyles = createUseStyles(styles);

export interface HomeProps {
  posts: BlogPost[];
}

const Home: React.FC<SEOProps & HomeProps> = ({
  children,
  posts,
  ...seoProps
}) => {
  const classes = useStyles();

  return (
    <MainLayout>
      <SEO {...seoProps} />
      <Columns>
        <Column>
          <PageContent>
            {posts.map((post, i) => (
              <Post {...post} commentCount={5} key={`post-${i}`} />
            ))}
          </PageContent>
        </Column>
      </Columns>
    </MainLayout>
  );
};

export default Home;
