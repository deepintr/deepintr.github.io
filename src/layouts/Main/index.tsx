import "normalize.css";
import "../../styles/bulma.scss";
import React from "react";
import Particles from "react-particles-js";
import { createUseStyles } from "react-jss";
import GitHubBadge from "../../components/GitHubBadge";
import particlesConfig from "../../configs/particlesjs-config";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const Main: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>{children}</div>
      <GitHubBadge />
      <Particles className={classes.particles} params={particlesConfig} />
    </>
  );
};

export default Main;
