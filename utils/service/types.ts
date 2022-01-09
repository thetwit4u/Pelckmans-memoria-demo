export type ICollection = {
  body: string;
  filename: string;
  meta: IMeta;
};
export type IImage = {
  description: string;
  image: string;
};
export type IArticle = {
  title: string;
  body: string;
  images: IImage[];
};
export type IMeta = {
  [key: string]: string | null | boolean | IArticle[];
};
export type IFileName = { params: { slug: string } };
export type FileOrFolder = 'file' | 'folder';
export type AllowedFormats = 'md' | 'json';
