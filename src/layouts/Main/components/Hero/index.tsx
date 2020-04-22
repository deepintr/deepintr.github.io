import React from "react";
import clsx from "clsx";
import { createUseStyles } from "react-jss";
import Particles from "react-particles-js";
import Topbar from "../Topbar";
import particlesConfig from "../../../../configs/particlesjs-config";
import styles from "./styles";

const useStyles = createUseStyles(styles);

export interface HeroProps {
  title: string;
  subtitle?: string;
  size?: "medium" | "large" | "fullheight";
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, size }) => {
  const classes = useStyles();

  return (
    <section className={clsx("hero", classes.hero, { [`is-${size}`]: size })}>
      <div className="hero-head">
        <Topbar />
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">{title}</p>
          {subtitle && <p className="subtitle">{subtitle}</p>}
        </div>
        <Particles className={classes.particles} params={particlesConfig} />
      </div>
    </section>
  );
};

export default Hero;
