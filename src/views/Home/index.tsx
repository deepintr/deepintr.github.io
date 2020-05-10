import React from 'react';
import { createUseStyles } from 'react-jss';
import { Link } from 'gatsby';
import MainLayout from '../../layouts/Main';
import Columns from '../../components/Bulma/Columns';
import Column from '../../components/Bulma/Column';
import PageContent from '../../components/PageContent';
import Post from '../../components/Post';
import SEO, { SEOProps } from '../../components/SEO';
import { Data } from '../../models';
import { contact } from '../../data';
import MainButtons from './components/MainButtons';
import Greeter from './components/Greeter';
import styles from './styles';
import Container from '../../components/Bulma/Container';
import FAIcon from '../../icons/FAIcon';

const useStyles = createUseStyles(styles);

export interface HomeProps {
  posts: Data.BlogPost[];
}

const Home: React.FC<SEOProps & HomeProps> = ({
  children,
  posts,
  ...seoProps
}) => {
  const classes = useStyles();

  const heroBody = (
    <Greeter
      title={seoProps.title}
      content={<MainButtons contactItems={contact} />}
    />
  );

  return (
    <MainLayout showHero size="medium" heroBody={heroBody}>
      <SEO {...seoProps} />
      <Columns>
        <Column>
          <PageContent>
            {posts.map((post) => (
              <Post post={post} key={post.fields.slug} />
            ))}

            <Container className={classes.buttons}>
              <span />
              <Link to="/blog" className="button">
                <FAIcon icon={{ name: 'blog', style: 'fas' }} />
                <span>Tüm yazılar</span>
              </Link>
            </Container>
          </PageContent>
        </Column>
      </Columns>
    </MainLayout>
  );
};

export default Home;
