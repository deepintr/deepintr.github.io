import React from "react";
import { createUseStyles } from "react-jss";
import { PostTag } from "../../models/PostTag";
import Media from "../Bulma/Media";
import styles from "./styles";

const useStyles = createUseStyles(styles);

export interface PostProps {
  title: string;
  author: string;
  date: string;
  content: string;
  tag: PostTag;
  commentCount: number;
}

const Post: React.FC<PostProps> = ({
  title,
  author,
  date,
  content,
  tag,
  commentCount,
}) => {
  const classes = useStyles();

  return (
    <article className={classes.post}>
      <h4>{title}</h4>
      <Media
        right={
          <span className="has-text-grey-light">
            <i className="fa fa-comments"></i> {commentCount}
          </span>
        }
      >
        <p>
          <a href="#">{author}</a> {date} &nbsp;
          <span className="tag">{tag}</span>
        </p>
      </Media>
    </article>
  );
};

export default Post;
