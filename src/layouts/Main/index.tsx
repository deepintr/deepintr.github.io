import "../../init";
import React from "react";
import { createUseStyles } from "react-jss";
import Container from "../../components/Bulma/Container";
import HeroPanel from "./components/HeroPanel";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const Main: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HeroPanel
        size="large"
        title="Türkiye'nin Tek Linux Deepin Kullanıcı Topluluğu"
      />
      <Container>{children}</Container>
    </div>
  );
};

export default Main;
