import React from "react";
import clsx from "clsx";
import { Icon, Severity, Size } from "../../models";

export interface FAIconProps {
  icon: Icon;
  severity?: Severity;
  size?: Size;
  before?: React.ReactNode;
  after?: React.ReactNode;
}

const FAIcon: React.FC<FAIconProps> = ({
  icon,
  severity,
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
        { [`has-text-${severity}`]: !!severity },
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
