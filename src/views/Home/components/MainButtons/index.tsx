import React from 'react';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';
import { ContactInfo } from '../../../../models';
import FAIcon from '../../../../icons/FAIcon';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface MainButtonsProps {
  contactItems: ContactInfo[];
}

const MainButtons: React.FC<MainButtonsProps> = ({ contactItems }) => {
  const classes = useStyles();

  const featured = contactItems.filter((i) => i.isFeatured);
  const unFeatured = contactItems.filter((i) => !i.isFeatured);

  const renderIcons = (icons: ContactInfo[]) => {
    return icons.map(({ name, icon, url, isFeatured }) => (
      <a
        key={`main-icon-${name}`}
        className={clsx('button is-rounded', classes.button)}
        href={url}
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
