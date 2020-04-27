import React from 'react';
import clsx from 'clsx';
import { BulmaColor, BulmaSize } from '../../../models';

export interface TagProps {
  color?: BulmaColor;
  size?: BulmaSize;
}

const Tag: React.FC<TagProps> = ({ color, size, children }) => {
  return (
    <span
      className={clsx(
        'tag',
        { [`is-${color}`]: !!color },
        { [`is-${size}`]: !!size },
      )}
    >
      {children}
    </span>
  );
};

export default Tag;
