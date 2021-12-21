interface SliderArticleSource {
  id: number;
  alt: string;
  src: string;
  caption: string;
}

export interface SliderArticleProps {
  src: SliderArticleSource[];
}
