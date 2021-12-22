import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
import { capitalizeString, useRefHeight } from '@utils';
import * as placeholder from '../../../assets/data/placeholderData';
import { useMediaQuery } from 'react-responsive';

const Page = () => {
  const [showDrawer, setShowDrawer] = React.useState(true);

  const router = useRouter();
  const { page } = router.query;

  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  const drawerElement = React.useRef<HTMLDivElement>(null);
  const [drawerHeight] = useRefHeight(drawerElement);

  const pageTitle = `${page && typeof page === 'string' && capitalizeString(page)}`;

  const handleDrawerToggle = () => setShowDrawer(prevState => !prevState);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta content='Memoria 2 Site Template - Page' name='description' />
      </Head>

      <Drawer ref={drawerElement} open={showDrawer} onClose={handleDrawerToggle}>
        <h2 className='text-3xl leading-10 text-tertiary'>{placeholder.siteSettings.title}</h2>

        <section className='my-6'>
          <p>Maak je keuze:</p>
          <ul className='inline-block py-4 pl-10 leading-8 list-disc list-inside text-tertiary'>
            {placeholder.links.map(link => {
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
        className={classNames('block transition-all duration-500', {
          'w-full lg:w-8/12 lg:pt-0': showDrawer,
          'w-full lg:w-full pt-4 lg:pt-0': !showDrawer
        })}
        style={{ paddingTop: showDrawer && !isLargeScreen ? `${drawerHeight}px` : '0px' }}>
        <section className='grid grid-cols-4 my-16 mx-auto w-10/12'>
          <Article icon='watch'>
            <ImageArticle alt='image' src={placeholder.images[1]} />
          </Article>

          <Article icon='watch'>
            <ImageArticle alt='image' src={placeholder.images[2]} />
          </Article>

          <Article icon='watch'>
            <SliderArticle src={placeholder.sliderGallery} />
          </Article>

          <Article icon='watch'>
            <VideoArticle src={placeholder.videos[0]} />
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
