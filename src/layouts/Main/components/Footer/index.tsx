import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import Container from '../../../../components/Bulma/Container';
import FAIcon from '../../../../icons/FAIcon';
import GitHubButton from 'react-github-btn';
import styles from './styles';
import pkg from '../../../../../package.json';

const useStyles = createUseStyles(styles);

const Footer: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Container>
      <footer className={clsx('footer', classes.root)}>
        <div className={clsx('content', classes.content)}>
          <span>
            <a href={pkg.homepage}>deepintr.js.org</a>
            <span> © </span>
            {new Date().getFullYear()}, Built with
            <FAIcon icon={{ name: 'coffee', style: 'fas' }} />.
          </span>

          {/* Stargazers button */}
          <span>
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
      </footer>
    </Container>
  );
};

export default Footer;
