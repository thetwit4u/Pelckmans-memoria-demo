import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import classNames from 'classnames';
import { FaAngleLeft } from 'react-icons/fa';
import { DefaultLayout } from '@layouts';
import {
  Article,
  Button,
  Drawer,
  HamburgerMenu,
  ImageArticle,
  SliderArticle,
  TextArticle,
  VideoArticle
} from '@components';
import {
  placeholderImages,
  placeholderLinks,
  placeholderSiteSettings,
  placeholderSliderGallery,
  placeholderVideos
} from '../../../../assets/data/placeholderData';

const Page = () => {
  const [showDrawer, setShowDrawer] = React.useState(true);

  const handleDrawerToggle = () => setShowDrawer(prevState => !prevState);

  return (
    <>
      <Head>
        <title>Memoria2 Template</title>
        <meta content='Memoria2 Template' name='description' />
        <link href='/favicon.ico' rel='icon' />
      </Head>

      <Drawer open={showDrawer} onClose={handleDrawerToggle}>
        <h2 className='text-3xl leading-10 text-tertiary'>{placeholderSiteSettings.title}</h2>

        <section className='my-6'>
          <p>Maak je keuze:</p>
          <ul className='inline-block py-4 pl-10 leading-8 list-disc list-inside text-tertiary'>
            {placeholderLinks.map(link => {
              return (
                <li key={link.id} className='group hover:text-secondary cursor-pointer'>
                  <Link href={link.url}>
                    <a className='group-hover:text-secondary'>{link.text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <Link href='/'>
          <a>
            <Button startIcon={<FaAngleLeft />} verticalSpacing='small'>
              Startpagina
            </Button>
          </a>
        </Link>
      </Drawer>
      {!showDrawer && <HamburgerMenu onClick={handleDrawerToggle} />}

      <section
        className={classNames('transition-all duration-500', {
          'w-8/12': showDrawer,
          'w-full': !showDrawer
        })}>
        <section className='grid grid-cols-4 my-16 mx-auto w-10/12'>
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
                Vloeren, muren en plafonds hadden fresco’s of mozaïeken. Bij een fresco werd de verf aangebracht voordat
                de laatste plaaster droog was. Er waren heel wat kleuren. Rood en geel kwamen van oker, groen van aarde,
                zwart van kool en roet, wit uit kalk. Blauw was zeer duur, want het was een mengsel van koper en glas.
                Ook met paars, gewonnen uit bepaalde zeeschelpen, kon men zijn rijkdom tonen (fresco in Romeinse villa,
                Pompeii).
              </p>
            </TextArticle>
          </Article>
        </section>
      </section>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Page;
