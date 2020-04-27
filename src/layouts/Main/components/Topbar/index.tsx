import React, { useState } from 'react';
import { Link } from 'gatsby';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import GitHubButton from 'react-github-btn';
import TypoLogo from '../../../../icons/TypoLogo';
import FAIcon from '../../../../icons/FAIcon';
import { MenuItemType, MenuItemRegular } from '../../../../models';
import { mainMenu } from '../../../../data/mainMenu';
import pkg from '../../../../../package.json';
import styles from './styles';

const useStyles = createUseStyles(styles);

const Topbar: React.FC = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  const renderMenuItem = (item: MenuItemRegular, blank: boolean = true) => {
    const { name, icon, url } = item;
    return (
      <a
        key={`menu-item-${name}`}
        className="navbar-item"
        href={url}
        target={blank ? '_blank' : '_self'}
      >
        <FAIcon icon={icon} />
        <span>{name}</span>
      </a>
    );
  };

  const renderMenu = (menu: MenuItemType[]) => {
    return menu.map(({ name, icon, url, items }) => {
      if (url) {
        return renderMenuItem({ name, icon, url }, url !== '/');
      }

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
              {(items as MenuItemRegular[]).map((item) => renderMenuItem(item))}
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
