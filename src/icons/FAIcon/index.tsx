import React from "react";
import clsx from "clsx";
import { Severity, Size, FAIconStyle, FAIconSize } from "../../models";

export interface FAIconProps {
  severity?: Severity;
  size?: Size;
  style: FAIconStyle;
  iconName: string;
  faSize?: FAIconSize;
}

const FAIcon: React.FC<FAIconProps> = ({
  severity,
  size,
  style,
  iconName,
  faSize,
}) => {
  return (
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
    </span>
  );
};

export default FAIcon;
