import React from "react";
import clsx from "clsx";
import { createUseStyles } from "react-jss";
import Particles from "react-particles-js";
import Container from "../Container";
import particlesConfig from "../../../configs/particlesjs-config";
import styles from "./styles";

const useStyles = createUseStyles(styles);

export interface HeroProps {
  heroTitle?: string;
  heroSubtitle?: string;
  size?: "medium" | "large" | "fullheight";
  particles?: boolean;
  heroHead?: React.ReactNode;
  heroBody?: React.ReactNode;
  heroFoot?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({
  heroTitle,
  heroSubtitle,
  size,
  particles = true,
  heroHead,
  heroBody,
  heroFoot,
}) => {
  const classes = useStyles();

  return (
    <section className={clsx("hero", classes.hero, { [`is-${size}`]: size })}>
      <div className="hero-head">{heroHead}</div>

      <div className="hero-body">
        <Container className="has-text-centered">
          <p className={clsx("title", classes.title)}>{heroTitle}</p>
          {heroSubtitle && <p className="subtitle">{heroSubtitle}</p>}
          {heroBody}
        </Container>
        {particles && <Particles params={particlesConfig} />}
      </div>

      <div className="hero-foot">{heroFoot}</div>
    </section>
  );
};

export default Hero;
