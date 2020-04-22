import "normalize.css";
import "../../styles/bulma.scss";
import React from "react";
import { createUseStyles } from "react-jss";
import Container from "../../components/Container";
import Hero from "./components/Hero";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const Main: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero
        size="large"
        title="Türkiye'nin Tek Linux Deepin Kullanıcı Topluluğu"
      />
      <Container>{children}</Container>
    </div>
  );
};

export default Main;
