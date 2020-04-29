import React from 'react';
import clsx from 'clsx';
import { Bulma } from '../../../models';

export interface ColumnProps {
  size?: Bulma.ColumnSize;
}

const Column: React.FC<ColumnProps> = ({ size, children }) => {
  return (
    <div className={clsx('column', { [`is-${size}`]: size })}>{children}</div>
  );
};

export default Column;
