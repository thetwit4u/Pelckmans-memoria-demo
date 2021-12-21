interface GalleryArticleSource {
  id: number;
  alt: string;
  src: string;
  caption: string;
}

export interface GalleryArticleProps {
  src: GalleryArticleSource[];
}
