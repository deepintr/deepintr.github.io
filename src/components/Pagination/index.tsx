import React from "react";

export interface PaginationButton {
  show: boolean;
  button: React.ReactNode;
}

export interface PaginationProps {
  prev: PaginationButton;
  next: PaginationButton;
}

const Pagination: React.FC<PaginationProps> = ({ prev, next }) => {
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <span>{prev.show && prev.button}</span>
      <span>{next.show && next.button}</span>
    </nav>
  );
};

export default Pagination;
