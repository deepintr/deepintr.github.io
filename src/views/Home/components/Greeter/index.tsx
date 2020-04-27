import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import logoImg from '../../../../images/icon-256x256.png';
import seperatorImg from '../../../../images/seperator.png';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface GreeterProps {
  title?: string;
  subtitle?: string;
  content?: React.ReactNode;
}

const Greeter: React.FC<GreeterProps> = ({ title, subtitle, content }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.logo} src={logoImg} />
      <div>
        <p className={clsx('title', classes.title)}>{title}</p>
        {subtitle && <p className="subtitle">{subtitle}</p>}
        <div className={classes.seperator}>
          <img src={seperatorImg} />
        </div>
        {content && <div className={classes.content}>{content}</div>}
      </div>
    </div>
  );
};

export default Greeter;
