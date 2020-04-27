import React from 'react';
import clsx from 'clsx';

export interface ColumnProps {
  size?: number;
}

const Column: React.FC<ColumnProps> = ({ size, children }) => {
  return (
    <div className={clsx('column', { [`is-${size}`]: size })}>{children}</div>
  );
};

export default Column;
