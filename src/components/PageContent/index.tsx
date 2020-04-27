import React from 'react';
import Box from '../Bulma/Box';

const PageContent: React.FC = ({ children }) => {
  return <Box content>{children}</Box>;
};

export default PageContent;
