import React from "react";
import { createUseStyles } from "react-jss";
import Topbar from "../components/Topbar";
import Container from "../../components/Bulma/Container";
import Footer from "../components/Footer";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const BlogLayout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <Topbar />
      <Container className={classes.root}>{children}</Container>
      <Footer />
    </>
  );
};

export default BlogLayout;
