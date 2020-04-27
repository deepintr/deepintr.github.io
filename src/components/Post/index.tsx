import React from 'react';
import { createUseStyles } from 'react-jss';
import { CommentCount } from 'disqus-react';
import Media from '../Bulma/Media';
import { BlogPost } from '../../models';
import Column from '../Bulma/Column';
import Columns from '../Bulma/Columns';
import Button from '../Bulma/Button';
import FAIcon from '../../icons/FAIcon';
import FrontmatterLine from './FrontmatterLine';
import { getDisqusConfig } from '../../utils';
import styles from './styles';
import pkg from '../../../package.json';

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

  const rightArea = details ? (
    <Button
      element="a"
      title="GitHub'da düzenle"
      anchor={{
        href: `${pkg.repository.url}/blob/master/content${slug}index.md`,
        target: '_blank',
      }}
      noBorder
    >
      <FAIcon icon={{ name: 'edit', style: 'fas' }} />
    </Button>
  ) : (
    <>
      <FAIcon icon={{ name: 'comments', style: 'fas' }} />
      <CommentCount {...getDisqusConfig(post)} />
    </>
  );

  return (
    <article className={classes.post}>
      <Media>
        <FrontmatterLine
          frontmatter={frontmatter}
          right={rightArea}
          slug={slug}
          details={details}
        />

        <Columns>
          <Column>
            {details ? (
              <div
                className={classes.postContent}
                dangerouslySetInnerHTML={{ __html: html }}
              ></div>
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
