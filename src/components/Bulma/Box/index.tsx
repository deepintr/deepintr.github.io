import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface BoxProps {
  content?: boolean;
}

const Box: React.FC<BoxProps> = ({ content, children }) => {
  const classes = useStyles();

  return (
    <div className={clsx('box', classes.boxCustom, { ['content']: !!content })}>
      {children}
    </div>
  );
};

export default Box;
