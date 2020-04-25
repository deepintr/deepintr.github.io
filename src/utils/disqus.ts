import { BlogPost } from "../models";
import { removeSlashes } from "./strings";
import disqusConfig from "../configs/disqus";

/**
 * Returns Disqus config for given post.
 * @param post Blog post object
 */
export const getDisqusConfig = (
  post: BlogPost,
): {
  shortname: string;
  config: {
    url: string;
    identifier: string;
    title: string;
  };
} => {
  const {
    fields: { slug },
    frontmatter: { title },
  } = post;

  const postId = removeSlashes(slug);

  const { baseUrl, shortname } = disqusConfig;

  return {
    shortname,
    config: {
      url: `${baseUrl}/${postId}`,
      identifier: postId,
      title: title,
    },
  };
};
