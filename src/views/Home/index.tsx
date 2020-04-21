import React from "react";
import { createUseStyles } from "react-jss";
import Main from "../../layouts/Main";
import TypoLogo from "../../icons/TypoLogo";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Main>
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <TypoLogo />
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Home;
