import React from 'react';
import { Link } from 'gatsby';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';
import moment from 'moment';
import Tag from '../../Bulma/Tag';
import { Frontmatter, Author } from '../../../models';
import FAIcon from '../../../icons/FAIcon';
import styles from './styles';

const useStyles = createUseStyles(styles);

export interface FrontmatterLineProps {
  frontmatter: Frontmatter;
  slug: string;
  right?: React.ReactNode;
  details?: boolean;
}

const FrontmatterLine: React.FC<FrontmatterLineProps> = ({
  frontmatter,
  slug,
  right,
  details,
}) => {
  const classes = useStyles();
  const { title, author, date, pinned } = frontmatter;

  const renderAuthor = (authorStr: string) => {
    try {
      const authorObj = new Author(authorStr);
      const { username, url } = authorObj.getCredentials();
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          @{username}
        </a>
      );
    } catch (_error) {
      return null;
    }
  };

  const renderDate = (dateStr: string) => {
    return <span>{moment(dateStr).format(`DD MMMM YYYY`)}</span>;
  };

  return (
    <div className={clsx(classes.root, { [classes.divider]: details })}>
      <div>
        <Link to={slug}>
          <h4 className={classes.title}>{title}</h4>
        </Link>
        <p className={clsx(classes.paragraph)}>
          {renderAuthor(author)}
          {renderDate(date)}
          {pinned && (
            <Tag color="warning">
              <FAIcon icon={{ name: 'thumbtack', style: 'fas' }} />
              <span>Sabitlenmiş</span>
            </Tag>
          )}
        </p>
      </div>
      {right && <span>{right}</span>}
    </div>
  );
};

export default FrontmatterLine;
