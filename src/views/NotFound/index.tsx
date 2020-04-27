import React from 'react';
import { createUseStyles } from 'react-jss';
import MainLayout from '../../layouts/Main';
import SEO, { SEOProps } from '../../components/SEO';
import PageContent from '../../components/PageContent';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface NotFoundProps {
  location: Window['location'];
}

const NotFound: React.FC<SEOProps & NotFoundProps> = ({
  children,
  location,
  ...seoProps
}) => {
  const classes = useStyles();

  return (
    <MainLayout>
      <SEO {...seoProps} />
      <PageContent>
        <h1 className="title">404 :)</h1>
        <h3>Aradığınız içerik burada değil..</h3>
      </PageContent>
    </MainLayout>
  );
};

export default NotFound;
