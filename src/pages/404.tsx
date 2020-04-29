import React from 'react';
import { graphql, PageProps } from 'gatsby';
import NotFound from '../views/NotFound';
import { Data } from '../models';

const NotFoundPage: React.FC<PageProps<Data.Data>> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return <NotFound title="404 :(" location={location} />;
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
