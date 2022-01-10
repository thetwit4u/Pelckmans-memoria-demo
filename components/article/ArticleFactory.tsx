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
type ArticleLayoutProps = {
  article: IArticle;
};
type SliderArticleImages = { caption: string; src: string; id: number; alt: string }[];
type ArticleType = 'read' | 'watch';

export default function ArticleFactory({ articles }: ArticleFactoryProps) {
  let articleType: ArticleType = 'read';

  function ArticleLayout({ article }: ArticleLayoutProps): JSX.Element {
    const hasImage = article.hasOwnProperty('images') && article.images.length > 0;
    const imagesLength = hasImage ? article.images.length : 0;

    const sliderImageAdapter = (images: IImage[]): SliderArticleImages => {
      return images.map((image, idx) => ({
        caption: image.description,
        src: image.image,
        id: idx,
        alt: `${article.title}-image-${idx}`
      }));
    };

    // Slider / images Article
    if (hasImage) {
      const images = sliderImageAdapter(article.images);
      articleType = 'watch';

      if (imagesLength > 1) {
        return <SliderArticle src={images} />;
      } else {
        return <ImageArticle alt={images[0].alt} src={images[0].src} />;
      }
    }

    // Read Article
    return (
      <TextArticle>
        <ReactMarkdown>{article.body}</ReactMarkdown>
      </TextArticle>
    );
  }

  return (
    <>
      {articles.map((article, idx: number) => {
        return (
          <Article
            key={idx}
            caption={<ReactMarkdown>{article.body}</ReactMarkdown>}
            icon={articleType}
            title={article.title}>
            <ArticleLayout article={article} />
          </Article>
        );
      })}
    </>
  );
}
