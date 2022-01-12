import React from 'react';
import Article from './Article';
import ImageArticle from './imageArticle/ImageArticle';
import SliderArticle from './sliderArticle/SliderArticle';
import ReactMarkdown from 'react-markdown';
import { IArticle, IImage } from 'utils/service/types';
import TextArticle from './textArticle/TextArticle';

type ArticleFactoryProps = {
  articles: IArticle[];
};
type ArticleImagesProps = {
  images: SliderArticleImages;
};
type SliderArticleImages = { caption: string; src: string; id: number; alt: string }[];

function articleToSliderAdapter(images: IImage[], altPrefix?: string): SliderArticleImages {
  return images.map((image, idx) => ({
    caption: image.description,
    src: `/${image.image}`,
    id: idx,
    alt: `${altPrefix ?? 'article-image-'}${idx}`
  }));
}

function ImageOrSliderArticle({ images }: ArticleImagesProps): JSX.Element | null {
  if (!images) return null;

  if (images.length > 1) {
    return <SliderArticle src={images} />;
  } else {
    return <ImageArticle alt={images[0].alt} src={images[0].src} />;
  }
}

export default function ArticleFactory({ articles }: ArticleFactoryProps) {
  return (
    <>
      {articles.map((article, idx: number) => {
        const hasImages = article.hasOwnProperty('images') && article.images.length > 0;
        const articleIcon = hasImages ? 'watch' : 'read';
        const hasBody = article.body ?? null;
        const caption = hasImages && hasBody ? <ReactMarkdown>{article.body}</ReactMarkdown> : null;

        return (
          <Article key={idx} caption={caption} icon={articleIcon} title={article.title}>
            {hasImages && <ImageOrSliderArticle images={articleToSliderAdapter(article.images)} />}

            {!hasImages && (
              <TextArticle>
                <ReactMarkdown>{article.body}</ReactMarkdown>
              </TextArticle>
            )}
          </Article>
        );
      })}
    </>
  );
}
