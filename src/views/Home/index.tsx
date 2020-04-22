import React from "react";
import { createUseStyles } from "react-jss";
import Main from "../../layouts/Main";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Main>
      Hello World
    </Main>
  );
};

export default Home;
