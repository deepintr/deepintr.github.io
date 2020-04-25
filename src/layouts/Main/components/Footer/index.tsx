import React from "react";
import clsx from "clsx";
import { createUseStyles } from "react-jss";
import Container from "../../../../components/Bulma/Container";
import FAIcon from "../../../../icons/FAIcon";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const Footer: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Container>
      <footer className={clsx("footer", classes.root)}>
        <div className="content has-text-centered">
          <a href="https://deepintr.org/">deepintr.org</a>
          <span> © </span>
          {new Date().getFullYear()}, Built with
          <FAIcon icon={{ name: "coffee", style: "fas" }} />.
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
