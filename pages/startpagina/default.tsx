import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import classNames from 'classnames';
import { Article, Drawer, HamburgerMenu, ImageArticle, SliderArticle, VideoArticle } from '@components';
import { placeholderImages, placeholderSliderGallery, placeholderVideos } from '../../assets/data/placeholderData';

const Default: NextPage = () => {
  const [showDrawer, setShowDrawer] = React.useState(true);

  const handleDrawerToggle = () => setShowDrawer(prevState => !prevState);

  return (
    <div>
      <Head>
        <title>Memoria2 Template</title>
        <meta content='Memoria2 Template' name='description' />
        <link href='/favicon.ico' rel='icon' />
      </Head>

      <main className='flex justify-end mx-auto'>
        <Drawer open={showDrawer} onClose={handleDrawerToggle} />
        {!showDrawer && <HamburgerMenu onClick={handleDrawerToggle} />}

        <section
          className={classNames('transition-all duration-500', {
            'w-8/12': showDrawer,
            'w-full': !showDrawer
          })}>
          <section className='grid grid-cols-4 my-16 mx-auto w-10/12'>
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
          </section>
        </section>
      </main>
    </div>
  );
};

export default Default;
