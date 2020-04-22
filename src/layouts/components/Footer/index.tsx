import React from "react";
import clsx from "clsx";
import { createUseStyles } from "react-jss";
import Container from "../../../components/Bulma/Container";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const Footer: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Container>
      <footer className={clsx("footer", classes.root)}>
        <div className="content has-text-centered">
          <p>deepintr</p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
