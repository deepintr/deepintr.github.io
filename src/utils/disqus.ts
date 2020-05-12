import { Data, Disqus } from '../models';
import { getUrlParts } from './strings';
import pkg from '../../package.json';

/**
 * Returns Disqus config for given post.
 * @param post Blog post object
 */
export const getDisqusConfig = (post: Data.BlogPost): Disqus.Config => {
  const {
    fields: { slug },
    frontmatter: { title },
  } = post;

  return {
    shortname: process.env.GATSBY_DISQUS_NAME || '',
    config: {
      url: `${pkg.homepage}${slug}`,
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
