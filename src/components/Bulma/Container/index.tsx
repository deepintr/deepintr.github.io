import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  const classes = useStyles();

  return (
    <div
      className={clsx('container', {
        [`${className}`]: !!className,
      })}
    >
      {children}
    </div>
  );
};

export default Container;
