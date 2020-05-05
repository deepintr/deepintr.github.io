import { Data } from '../models';
import { getUrlParts } from './strings';
import disqusConfig from '../configs/disqus';

/**
 * Returns Disqus config for given post.
 * @param post Blog post object
 */
export const getDisqusConfig = (
  post: Data.BlogPost,
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
export const getPostId = (slug: string, replaceWith: string = '-') => {
  return getUrlParts(slug).join(replaceWith);
};
