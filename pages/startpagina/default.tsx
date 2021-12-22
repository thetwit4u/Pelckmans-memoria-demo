import React, { ReactElement } from 'react';
import Head from 'next/head';
import { DefaultLayout } from '@layouts';
import { Article, ImageArticle, SliderArticle, TextArticle, VideoArticle } from '@components';
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

      <Article icon='read' title='Lees'>
        <TextArticle>
          <p>
            Vloeren, muren en plafonds hadden fresco’s of mozaïeken. Bij een fresco werd de verf aangebracht voordat de
            laatste plaaster droog was. Er waren heel wat kleuren. Rood en geel kwamen van oker, groen van aarde, zwart
            van kool en roet, wit uit kalk. Blauw was zeer duur, want het was een mengsel van koper en glas. Ook met
            paars, gewonnen uit bepaalde zeeschelpen, kon men zijn rijkdom tonen (fresco in Romeinse villa, Pompeii).
          </p>
        </TextArticle>
      </Article>
    </>
  );
};

Default.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Default;
