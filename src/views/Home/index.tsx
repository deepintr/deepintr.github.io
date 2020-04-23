import React, { useCallback } from "react";
import clsx from "clsx";
import { createUseStyles } from "react-jss";
import MainLayout from "../../layouts/Main";
import Columns from "../../components/Bulma/Columns";
import Column from "../../components/Bulma/Column";
import PageContent from "../../components/PageContent";
import Post from "../../components/Post";
import SEO, { SEOProps } from "../../components/SEO";
import { BlogPost, ContactInfo } from "../../models";
import styles from "./styles";
import { contact } from "../../data";

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

  const renderIcons = useCallback(
    (icons: ContactInfo[]) => {
      const featured = icons.filter((i) => i.isFeatured);
      const unFeatured = icons.filter((i) => !i.isFeatured);

      const renderItems = (items: ContactInfo[]) =>
        items.map(({ name, iconName, url, isFeatured }) => (
          <a
            key={`main-icon-${name}`}
            className={clsx("button is-rounded", classes.button)}
            href={url}
            target="_blank"
            title={name}
            aria-label={name}
          >
            <span className="icon is-medium">
              <i className={`fab fa-${iconName} fa-lg`}></i>
            </span>
            {isFeatured && <span>{name}</span>}
          </a>
        ));

      return (
        <div className={classes.icons}>
          <div>{renderItems(featured)}</div>
          <div>{renderItems(unFeatured)}</div>
        </div>
      );
    },
    [contact],
  );

  return (
    <MainLayout
      showHero
      size="large"
      heroTitle="Linux Deepin Türkiye Kullanıcı Topluluğu"
      heroBody={renderIcons(contact)}
    >
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
