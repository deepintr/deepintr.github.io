import React from 'react';
import { createUseStyles } from 'react-jss';
import Particles from 'react-particles-js';
import Container from '../../components/Bulma/Container';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Hero, { HeroProps } from '../../components/Bulma/Hero';
import particlesConfig from '../../configs/particlesjs-config';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface MainLayoutProps {
  showHero?: boolean;
  particles?: boolean;
}

const MainLayout: React.FC<MainLayoutProps & Partial<HeroProps>> = ({
  children,
  particles = true,
  showHero,
  ...heroProps
}) => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Topbar />
      {showHero && <Hero {...heroProps} />}
      <Container>{children}</Container>
      <Footer />
      {particles && <Particles params={particlesConfig} />}
    </div>
  );
};

export default MainLayout;
