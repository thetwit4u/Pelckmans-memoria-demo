/**
 * Custom loader to handle external / local links
 * https://nextjs.org/docs/api-reference/next/image#built-in-loaders
 * @param src string
 * @returns string
 */
const imageLoader = (src: string): string => {
  return src;
};

export default imageLoader;
