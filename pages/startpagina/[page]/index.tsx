import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { FaAngleLeft } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
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

const Page = () => {
  const [showDrawer, setShowDrawer] = React.useState(true);
  const [showContent, setShowContent] = React.useState(false);
  const drawerElement = React.useRef<HTMLDivElement>(null);
  const [drawerHeight] = useRefHeight(drawerElement);
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const router = useRouter();

  React.useEffect(() => {
    if (isLargeScreen || drawerHeight > 0) setShowContent(true);
  }, [drawerHeight, isLargeScreen]);

  const { page } = router.query;

  const pageTitle = page ? `${page && typeof page === 'string' && capitalizeString(page)}` : 'Laden...';

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
        className={classNames({
          'w-full lg:w-8/12': showDrawer,
          'w-full lg:w-full': !showDrawer,
          'block transition-all duration-500': showContent,
          hidden: !showContent
        })}
        style={{ paddingTop: showDrawer ? `${drawerHeight}px` : '2rem' }}>
        <section className='grid grid-cols-4 my-16 mx-auto w-full lg:w-10/12'>
          {/* Single Image Article */}
          <Article icon='watch' title='Single Image Article'>
            <ImageArticle alt='image' src={placeholder.images[1]} />
          </Article>

          {/* Slider Article */}
          <Article icon='watch' title='Slider Article'>
            <SliderArticle src={placeholder.sliderGallery} />
          </Article>

          <Article icon='watch' title='Video Article'>
            <VideoArticle src={placeholder.videos[0]} />
          </Article>

          {/* Text Article */}
          <Article icon='read' title='Text Article'>
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

          {/* Article - With Caption*/}
          <Article
            caption='This is an additional description box you can add to every article.'
            icon='watch'
            title='Article - With Caption'>
            <ImageArticle alt='image' src={placeholder.images[2]} />
          </Article>

          {/* Article Size 1/4 */}
          <Article icon='watch' size='1/4' title='Article Size 1/4'>
            <ImageArticle alt='image' src={placeholder.images[1]} />
          </Article>

          {/* Article Size 2/4 */}
          <Article icon='watch' size='2/4' title='Article Size 2/4'>
            <ImageArticle alt='image' src={placeholder.images[1]} />
          </Article>

          {/* Article Size 3/4 */}
          <Article icon='watch' size='3/4' title='Article Size 3/4'>
            <ImageArticle alt='image' src={placeholder.images[1]} />
          </Article>

          {/* Article Size 4/4 */}
          <Article icon='watch' size='4/4' title='Article Size 4/4'>
            <ImageArticle alt='image' src={placeholder.images[1]} />
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
