import React, { ReactElement } from 'react';
import Head from 'next/head';
import { DefaultLayout } from '@layouts';
import { Article, ImageArticle, SliderArticle, VideoArticle } from '@components';
import { placeholderImages, placeholderSliderGallery, placeholderVideos } from '../../assets/data/placeholderData';

const Default = () => {
  return (
    <>
      <Head>
        <title>Memoria2 Template</title>
        <meta content='Memoria2 Template' name='description' />
        <link href='/favicon.ico' rel='icon' />
      </Head>

      <Article
        caption={'This is an example of an article description.'}
        icon='watch'
        size='3/4'
        title='Aangepaste Titel'>
        <ImageArticle alt='image' src={placeholderImages[0]} />
      </Article>

      <Article icon='watch'>
        <ImageArticle alt='image' src={placeholderImages[1]} />
      </Article>

      <Article icon='watch'>
        <ImageArticle alt='image' src={placeholderImages[2]} />
      </Article>

      <Article icon='watch'>
        <SliderArticle src={placeholderSliderGallery} />
      </Article>

      <Article icon='watch'>
        <VideoArticle src={placeholderVideos[0]} />
      </Article>
    </>
  );
};

Default.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Default;
