import React from "react";
import { createUseStyles } from "react-jss";
import Hero, { HeroProps } from "../../../../components/Bulma/Hero";
import Topbar from "../../../components/Topbar";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const HeroPanel: React.FC<Partial<HeroProps>> = ({ title, subtitle, size }) => {
  const classes = useStyles();

  return (
    <Hero
      title={title as string}
      subtitle={subtitle}
      size={size}
      heroHead={<Topbar />}
    />
  );
};

export default HeroPanel;
