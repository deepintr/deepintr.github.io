import React from "react";
import clsx from "clsx";
import { Severity, Size, FAIconStyle, FAIconSize } from "../../models";

export interface FAIconProps {
  severity?: Severity;
  size?: Size;
  style: FAIconStyle;
  iconName: string;
  faSize?: FAIconSize;
  before?: React.ReactNode;
  after?: React.ReactNode;
}

const FAIcon: React.FC<FAIconProps> = ({
  severity,
  size,
  style,
  iconName,
  faSize,
  before,
  after,
  children,
}) => {
  const icon = (
    <span
      className={clsx(
        "icon",
        { [`is-${size}`]: !!size },
        { [`has-text-${severity}`]: !!severity },
      )}
    >
      <i
        className={clsx(style, `fa-${iconName}`, {
          [`fa-${faSize}`]: !!faSize,
        })}
      ></i>
      {children && <span>{children}</span>}
    </span>
  );

  return (
    <>
      {before && <span>{before}</span>}
      {icon}
      {after && <span>{after}</span>}
    </>
  );
};

export default FAIcon;
