import React from 'react';
import Article from './Article';
import ImageArticle from './imageArticle/ImageArticle';
import SliderArticle from './sliderArticle/SliderArticle';
import * as placeholder from '../../assets/data/placeholderData';
import ReactMarkdown from 'react-markdown';
import { IArticle } from 'utils/service/types';

type ArticleFactoryProps = {
  articles: IArticle[];
};
type ArticleLayoutProps = {
  article: IArticle;
};
export default function ArticleFactory({ articles }: ArticleFactoryProps) {
  function ArticleLayout({ article }: ArticleLayoutProps): JSX.Element {
    const hasImage = article.hasOwnProperty('images') && article.images.length > 0;
    const imageLength = hasImage ? article.images.length : 0;

    // slider
    if (hasImage && imageLength > 1) {
      return (
        <Article icon='watch' title='Slider Article'>
          <SliderArticle src={placeholder.sliderGallery} />
        </Article>
      );
    }

    // no image
    if (hasImage && imageLength > 1) {
      return (
        <Article caption={<ReactMarkdown>{article.body}</ReactMarkdown>} icon='watch' title='Single Image Article'>
          <ImageArticle alt='image' src={placeholder.images[1]} />
        </Article>
      );
    }

    // single with caption
    return (
      <Article caption={<ReactMarkdown>{article.body}</ReactMarkdown>} icon='watch' title='Single Image Article'>
        <ImageArticle alt='image' src={placeholder.images[1]} />
      </Article>
    );
  }
  return (
    <>
      {articles.map((article, idx: number) => {
        return <ArticleLayout key={idx} article={article} />;
      })}
    </>
  );
}
