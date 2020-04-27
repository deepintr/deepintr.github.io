import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface MediaProps {
  left?: {
    imgUrl?: string;
    size: 16 | 32 | 64 | 128 | 256;
  };
  right?: React.ReactNode;
}

const Media: React.FC<MediaProps> = ({ left, right, children }) => {
  const classes = useStyles();

  return (
    <article className="media">
      {left && (
        <figure className="media-left">
          <p className={clsx('image', `is-${left.size}x${left.size}`)}>
            <img
              className={classes.image}
              src={
                left.imgUrl ||
                'https://bulma.io/images/placeholders/128x128.png'
              }
            />
          </p>
        </figure>
      )}

      <div className="media-content">
        <div className="content">{children}</div>
      </div>

      {right && <div className="media-right">{right}</div>}
    </article>
  );
};

export default Media;
