import React from "react";
import clsx from "clsx";
import { Icon, BulmaColor, BulmaSize } from "../../models";

export interface FAIconProps {
  icon: Icon;
  color?: BulmaColor;
  size?: BulmaSize;
  before?: React.ReactNode;
  after?: React.ReactNode;
}

const FAIcon: React.FC<FAIconProps> = ({
  icon,
  color,
  size,
  before,
  after,
  children,
}) => {
  const faIcon = (
    <span
      className={clsx(
        "icon",
        { [`is-${size}`]: !!size },
        { [`has-text-${color}`]: !!color },
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

  return (
    <>
      {before && <span>{before}</span>}
      {faIcon}
      {after && <span>{after}</span>}
    </>
  );
};

export default FAIcon;
