import React from "react";
import clsx from "clsx";

export interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={clsx("container", { [`${className}`]: !!className })}>
      {children}
    </div>
  );
};

export default Container;
