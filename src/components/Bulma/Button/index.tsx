import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { Bulma } from '../../../models';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface ButtonProps {
  element: 'button' | 'a';
  anchor?: {
    href?: string;
    target?: '_blank' | '_self';
  };
  size?: Bulma.Size;
  color?: Bulma.Color;
  title?: string;
  noBorder?: boolean;
  outlined?: boolean;
  inverted?: boolean;
  rounded?: boolean;
  handlers?: { [handler: string]: (e?: any) => void };
}

const Button: React.FC<ButtonProps> = ({
  element: Element,
  anchor,
  title,
  color,
  noBorder,
  handlers,
  children,
  ...rest
}) => {
  const classes = useStyles();

  const anchorProps = Element === 'a' ? { ...anchor, 'aria-label': title } : {};
  const styleRest = Object.keys(rest).map((key) => ({ [`is-${key}`]: !!key }));

  return (
    <Element
      {...anchorProps}
      {...handlers}
      className={clsx(
        'button',
        { [classes.noBorder]: noBorder },
        { [`is-${color}`]: !!color },
        ...styleRest,
      )}
      title={title}
    >
      {children}
    </Element>
  );
};

export default Button;
