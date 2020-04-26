import React from "react";
import { Link } from "gatsby";
import clsx from "clsx";
import { createUseStyles } from "react-jss";
import { CommentCount } from "disqus-react";
import moment from "moment";
import Media from "../Bulma/Media";
import { BlogPost, Author, IAuthor } from "../../models";
import Column from "../Bulma/Column";
import Columns from "../Bulma/Columns";
import Button from "../Bulma/Button";
import FAIcon from "../../icons/FAIcon";
import { getDisqusConfig } from "../../utils";
import styles from "./styles";
import pkg from "../../../package.json";

const useStyles = createUseStyles(styles);

export interface PostProps {
  post: BlogPost;
  details?: boolean;
}

const Post: React.FC<PostProps> = ({ post, details = false }) => {
  const classes = useStyles();

  const {
    frontmatter,
    excerpt,
    fields: { slug },
    html,
  } = post;
  const { title, author, date } = frontmatter;

  const authorObj = author ? new Author(author) : null;

  const renderAuthor = (author: IAuthor) => {
    const { username, url } = author;
    return (
      <a href={url} target="_blank">
        @{username}&nbsp;
      </a>
    );
  };

  const commentCount = <CommentCount {...getDisqusConfig(post)} />;

  return (
    <article className={classes.post}>
      <Link to={slug}>
        <h4 className={classes.title}>{title}</h4>
      </Link>

      <Media
        right={
          details ? (
            <Button
              element="a"
              title="GitHub'da düzenle"
              anchor={{
                href: `${pkg.repository.url}/edit/master/content${slug}index.md`,
                target: "_blank",
              }}
              noBorder
            >
              <FAIcon icon={{ name: "edit", style: "fas" }} />
            </Button>
          ) : (
            <FAIcon
              icon={{ name: "comments", style: "fas" }}
              after={commentCount}
            />
          )
        }
      >
        <p className={clsx(classes.paragraph, { [classes.divider]: details })}>
          {authorObj && renderAuthor(authorObj.getCredentials())}
          <span>{moment(date).format(`DD MMMM YYYY`)}&nbsp;</span>
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
