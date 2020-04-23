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
import FAIcon from "../../icons/FAIcon";

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
        items.map(({ name, icon, url, isFeatured }) => (
          <a
            key={`main-icon-${name}`}
            className={clsx("button is-rounded", classes.button)}
            href={url}
            target="_blank"
            title={name}
            aria-label={name}
          >
            <FAIcon
              size="medium"
              iconName={icon.name}
              style={icon.style}
              faSize={icon.size}
            />
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
      heroTitle={seoProps.title}
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
