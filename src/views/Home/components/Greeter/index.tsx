import React from "react";
import clsx from "clsx";
import { createUseStyles } from "react-jss";
import logo from "../../../../images/icon-256x256.png";
import seperator from "../../../../images/slit_separator.webp";
import styles from "./styles";

const useStyles = createUseStyles(styles);

export interface GreeterProps {
  title?: string;
  subtitle?: string;
}

const Greeter: React.FC<GreeterProps> = ({ title, subtitle }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.logo} src={logo} />
      <div>
        <p className={clsx("title", classes.title)}>{title}</p>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        <div className={classes.seperator}>
          <img src={seperator} />
        </div>
      </div>
    </div>
  );
};

export default Greeter;
