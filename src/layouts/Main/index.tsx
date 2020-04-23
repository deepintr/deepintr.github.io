import React from "react";
import { createUseStyles } from "react-jss";
import Container from "../../components/Bulma/Container";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Hero, { HeroProps } from "../../components/Bulma/Hero";
import styles from "./styles";

const useStyles = createUseStyles(styles);

export interface MainLayoutProps {
  showHero?: boolean;
}

const MainLayout: React.FC<MainLayoutProps & Partial<HeroProps>> = ({
  children,
  showHero,
  ...heroProps
}) => {
  const classes = useStyles();

  return (
    <>
      {showHero ? <Hero {...heroProps} heroHead={<Topbar />} /> : <Topbar />}
      <Container className={classes.content}>{children}</Container>
      <Footer />
    </>
  );
};

export default MainLayout;
