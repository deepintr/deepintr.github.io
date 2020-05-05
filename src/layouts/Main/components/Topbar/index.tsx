import React, { useState } from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import GitHubButton from 'react-github-btn';
import TypoLogo from '../../../../icons/TypoLogo';
import FAIcon from '../../../../icons/FAIcon';
import { Menu } from '../../../../models';
import { mainMenu } from '../../../../data';
import pkg from '../../../../../package.json';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Topbar: React.FC = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const renderMenuItem = (item: Menu.ItemRegular, index?: number) => {
    const {
      name,
      icon,
      url: { href, isInternal },
    } = item;

    const itemContent = (
      <>
        <FAIcon icon={icon} />
        <span>{name}</span>
      </>
    );

    const linkProps = {
      className: 'navbar-item',
      key: `menu-item-${name}`,
      'aria-label': name,
    };

    return isInternal ? (
      <Link to={href} {...linkProps}>
        {itemContent}
      </Link>
    ) : (
      <a href={href} {...linkProps} target="_blank" rel="noopener noreferrer">
        {itemContent}
      </a>
    );
  };

  const renderMenu = (menu: Menu.ItemType[]) => {
    return menu.map(({ name, icon, url, items }) => {
      if (url) {
        // Standalone item, render it.
        return renderMenuItem({ name, icon, url });
      }

      // Dropdown. Render sub-items.
      return (
        <div
          key={`menu-section-${name}`}
          className={clsx('navbar-item', {
            ['has-dropdown is-hoverable']: !!items,
          })}
        >
          <a className="navbar-link">
            <FAIcon icon={icon} />
            <span>{name}</span>
          </a>
          {items && (
            <div className="navbar-dropdown is-right is-boxed">
              {(items as Menu.ItemRegular[]).map(renderMenuItem)}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <nav className={clsx('navbar', classes.root)}>
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <TypoLogo height={24} />
          </Link>
          <span
            onClick={() => handleBurgerClick()}
            className={clsx('navbar-burger burger', {
              ['is-active']: menuOpen,
            })}
            data-target="navbarMenuHeroB"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          id="navbarMenuHeroB"
          className={clsx('navbar-menu', {
            ['is-active']: menuOpen,
          })}
        >
          <div className="navbar-end">
            {renderMenu(mainMenu)}

            <span className={clsx('navbar-item', classes.ghButton)}>
              <GitHubButton
                href={pkg.repository.url}
                data-color-scheme="no-preference: light; light: light; dark: dark;"
                data-icon="octicon-star"
                data-size="large"
                data-show-count={true}
                aria-label="Star deepintr/www on GitHub"
              >
                Star
              </GitHubButton>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
