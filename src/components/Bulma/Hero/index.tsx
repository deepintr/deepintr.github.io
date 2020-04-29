import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import Container from '../Container';
import { Bulma } from '../../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface HeroProps {
  size?: Bulma.HeroSize;
  particles?: boolean;
  heroHead?: React.ReactNode;
  heroBody?: React.ReactNode;
  heroFoot?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ size, heroHead, heroBody, heroFoot }) => {
  const classes = useStyles();

  return (
    <section className={clsx('hero', classes.hero, { [`is-${size}`]: size })}>
      <div className="hero-head">{heroHead}</div>

      <div className="hero-body">
        <Container className="has-text-centered">{heroBody}</Container>
      </div>

      <div className="hero-foot">{heroFoot}</div>
    </section>
  );
};

export default Hero;
