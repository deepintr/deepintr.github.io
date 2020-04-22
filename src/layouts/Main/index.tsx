import React from "react";
import { createUseStyles } from "react-jss";
import Container from "../../components/Bulma/Container";
import HeroPanel from "./components/HeroPanel";
import Footer from "../components/Footer";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const MainLayout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <HeroPanel
        size="large"
        title="Türkiye'nin Tek Linux Deepin Kullanıcı Topluluğu"
      />
      <Container className={classes.content}>{children}</Container>
      <Footer />
    </>
  );
};

export default MainLayout;
