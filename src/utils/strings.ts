/**
 * Compresses the string into given length.
 * @param str Source string
 * @param maxLength Max length
 */
export const summarize = (str: string, maxLength: number = 32) => {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength)}...`;
};

/**
 * Returns url parts from given slug.
 * @param slug Slug string
 */
export const getUrlParts = (slug: string) => {
  const delimiter = '/';
  if (slug.startsWith(delimiter)) slug = slug.slice(1);
  if (slug.endsWith(delimiter)) slug = slug.slice(0, slug.length - 1);
  return slug.split(delimiter);
};
