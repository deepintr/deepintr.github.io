import React from "react";
import { createUseStyles } from "react-jss";
import BlogLayout from "../../layouts/Blog";
import Columns from "../../components/Bulma/Columns";
import Column from "../../components/Bulma/Column";
import Container from "../../components/Bulma/Container";
import SEO, { SEOProps } from "../../components/SEO";
import styles from "./styles";

const useStyles = createUseStyles(styles);

export interface NotFoundProps {
  location: Window["location"];
}

const NotFound: React.FC<SEOProps & NotFoundProps> = ({
  children,
  location,
  ...seoProps
}) => {
  const classes = useStyles();

  return (
    <BlogLayout>
      <SEO {...seoProps} />
      <Columns>
        <Column>
          <Container>
            <h1>404 :)</h1>
            <h3>Aradığınız içerik burada değil..</h3>
          </Container>
        </Column>
      </Columns>
    </BlogLayout>
  );
};

export default NotFound;
