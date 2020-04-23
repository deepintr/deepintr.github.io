import React, { useCallback } from "react";
import { createUseStyles } from "react-jss";
import MainLayout from "../../layouts/Main";
import Columns from "../../components/Bulma/Columns";
import Column from "../../components/Bulma/Column";
import PageContent from "../../components/PageContent";
import Post from "../../components/Post";
import SEO, { SEOProps } from "../../components/SEO";
import { BlogPost } from "../../models";
import { contact } from "../../data";
import styles from "./styles";
import MainButtons from "./components/MainButtons";
import Greeter from "./components/Greeter";

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

  const heroBody = (
    <>
      <Greeter title={seoProps.title} />
      <MainButtons contactItems={contact} />
    </>
  );

  return (
    <MainLayout showHero size="medium" heroBody={heroBody}>
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
