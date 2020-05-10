import React from 'react';
import clsx from 'clsx';
import { Bulma, FAIcon as FAIconType } from '../../models';

export interface FAIconProps {
  icon: FAIconType.Icon;
  color?: Bulma.Color;
  size?: Bulma.Size;
  placement?: Bulma.Placement;
}

const FAIcon: React.FC<FAIconProps> = ({
  icon,
  color,
  size,
  placement,
  children,
}) => {
  return (
    <span
      className={clsx(
        'icon',
        { [`has-text-${color}`]: !!color },
        { [`is-${size}`]: !!size },
        { [`is-${placement}`]: !!placement },
      )}
    >
      <i
        className={clsx(icon.style, `fa-${icon.name}`, {
          [`fa-${icon.size}`]: !!icon.size,
        })}
      ></i>
      {children && <span>{children}</span>}
    </span>
  );
};

export default FAIcon;
