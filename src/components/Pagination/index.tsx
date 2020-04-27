import React from 'react';

export interface PaginationProps {
  prev?: React.ReactNode;
  next?: React.ReactNode;
}

const Pagination: React.FC<PaginationProps> = ({ prev, next }) => {
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <span>{prev && prev}</span>
      <span>{next && next}</span>
    </nav>
  );
};

export default Pagination;
