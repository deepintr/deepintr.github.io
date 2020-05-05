import React from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { Menu } from '../../../models';

export interface BreadcrumbProps {
  items: Menu.NavLink[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  const parts: Menu.NavLink[] = [
    {
      name: 'Anasayfa',
      url: {
        href: '/',
      },
    },
    ...items,
  ];

  return (
    <nav className="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
      <ul>
        {parts.map(({ name, url }, i) => (
          <li
            key={`breadcrumb-item-${i}`}
            className={clsx({ 'is-active': i === parts.length - 1 })}
          >
            {/* Treat the all links as internal. */}
            <Link to={url.href}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
