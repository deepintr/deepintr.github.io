import { BlogPost } from "../models";
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

  const { baseUrl, shortname } = disqusConfig;

  return {
    shortname,
    config: {
      url: `${baseUrl}${slug}`,
      identifier: getPostId(slug),
      title: title,
    },
  };
};

/**
 * Returns post id from given slug.
 * @param slug Slug string
 * @param replaceWith String to be used in place of forward slash chars.
 */
export const getPostId = (slug: string, replaceWith: string = "-") => {
  if (slug.startsWith("/")) slug = slug.slice(1);
  if (slug.endsWith("/")) slug = slug.slice(0, slug.length - 1);
  return slug.replace(/\//g, replaceWith);
};
