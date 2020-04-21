import "normalize.css";
import React from "react";
import Particles from "react-particles-js";
import { createUseStyles } from "react-jss";
import GitHubBadge from "../../components/GitHubBadge";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const Main: React.FC = ({ children }) => {
  const particlesConfig = require("../../configs/particlesjs-config.json");
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
