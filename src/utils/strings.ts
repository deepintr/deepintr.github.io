/**
 * Compresses the string into given length.
 * @param str Source string
 * @param maxLength Max length
 */
export const summarize = (str: string, maxLength: number = 32) => {
  if (str.length <= maxLength) return str;
  return `${str.slice(0, maxLength)}...`;
};
