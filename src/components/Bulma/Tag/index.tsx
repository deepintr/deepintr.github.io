import React from 'react';
import clsx from 'clsx';
import { Bulma } from '../../../models';

export interface TagProps {
  color?: Bulma.Color;
  size?: Bulma.Size;
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
