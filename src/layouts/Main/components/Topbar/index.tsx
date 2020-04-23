import React, { useState } from "react";
import { Link } from "gatsby";
import clsx from "clsx";
import { createUseStyles } from "react-jss";
import TypoLogo from "../../../../icons/TypoLogo";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const Topbar: React.FC = () => {
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={clsx("navbar", classes.root)}>
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <TypoLogo height={24} />
          </Link>
          <span
            onClick={() => handleBurgerClick()}
            className={clsx("navbar-burger burger", {
              ["is-active"]: menuOpen,
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
          className={clsx("navbar-menu", {
            ["is-active"]: menuOpen,
          })}
        >
          <div className="navbar-end">
            <a className="navbar-item is-active">Home</a>
            <a className="navbar-item">Examples</a>
            <a className="navbar-item">Documentation</a>
            <span className="navbar-item">
              <a className="button is-info is-inverted">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
