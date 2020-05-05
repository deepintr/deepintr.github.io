import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { Menu } from '../../../../models';
import FAIcon from '../../../../icons/FAIcon';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface MainButtonsProps {
  contactItems: Menu.ContactItem[];
}

const MainButtons: React.FC<MainButtonsProps> = ({ contactItems }) => {
  const classes = useStyles();

  const featured = contactItems.filter((i) => !!i.isFeatured);
  const unFeatured = contactItems.filter((i) => !i.isFeatured);

  const renderIcons = (icons: Menu.ContactItem[]) => {
    return icons.map(({ name, icon, url: { href }, isFeatured }) => (
      <a
        key={`main-icon-${name}`}
        className={clsx('button is-rounded', classes.button)}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        title={name}
        aria-label={name}
      >
        <FAIcon icon={icon} size="medium" />
        {isFeatured && <span>{name}</span>}
      </a>
    ));
  };

  return (
    <div className={classes.icons}>
      <div>{renderIcons(featured)}</div>
      <div>{renderIcons(unFeatured)}</div>
    </div>
  );
};

export default MainButtons;
