import React from "react";
import { Link } from "gatsby";
import clsx from "clsx";
import { createUseStyles } from "react-jss";
import Media from "../Bulma/Media";
import { BlogPost } from "../../models";
import styles from "./styles";
import Column from "../Bulma/Column";
import Columns from "../Bulma/Columns";

const useStyles = createUseStyles(styles);

export interface PostProps {
  details?: boolean;
  commentCount: number;
}

const Post: React.FC<BlogPost & PostProps> = ({
  excerpt,
  html,
  frontmatter,
  details = false,
  commentCount,
  fields,
}) => {
  const classes = useStyles();
  const { title, author, date } = frontmatter;
  const { slug } = fields;

  return (
    <article className={classes.post}>
      <Link to={slug}>
        <h4 className={classes.title}>{title}</h4>
      </Link>

      <Media
        right={
          !details && (
            <span className="has-text-grey">
              <i className="fa fa-comments"></i> {commentCount}
            </span>
          )
        }
      >
        <p className={clsx(classes.paragraph, { [classes.divider]: details })}>
          {author && <a href="#">@{author}&nbsp;</a>}
          <span>{date}&nbsp;</span>
        </p>

        <Columns>
          <Column>
            {details ? (
              <div dangerouslySetInnerHTML={{ __html: html }}></div>
            ) : (
              <p>{excerpt}</p>
            )}
          </Column>
        </Columns>
      </Media>
    </article>
  );
};

export default Post;
