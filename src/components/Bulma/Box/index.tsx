import React from "react";
import clsx from "clsx";

export interface BoxProps {
  content?: boolean;
}

const Box: React.FC<BoxProps> = ({ content, children }) => {
  return (
    <div className={clsx("box", { ["content"]: !!content })}>{children}</div>
  );
};

export default Box;
