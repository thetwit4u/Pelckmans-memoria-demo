import React, { ReactElement, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import classNames from 'classnames';
import { FaAngleLeft } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';
import { DefaultLayout } from '@layouts';
import { Button, Drawer, HamburgerMenu } from '@components';
import { useRefHeight } from '@utils';
import CollectionService from 'utils/service/collectionService';
import ArticleFactory from 'components/article/ArticleFactory';
import { IArticle, ICollection } from 'utils/service/types';

type PageProps = {
  pages: ICollection[];
  articles: IArticle[];
  title: string;
};

const Page = ({ pages, articles, title }: PageProps) => {
  const [showDrawer, setShowDrawer] = React.useState(true);
  const [showContent, setShowContent] = React.useState(false);
  const drawerElement = React.useRef<HTMLDivElement>(null);
  const [drawerHeight] = useRefHeight(drawerElement);
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  useEffect(() => {
    if (isLargeScreen || drawerHeight > 0) setShowContent(true);
  }, [drawerHeight, isLargeScreen]);

  const handleDrawerToggle = () => setShowDrawer(prevState => !prevState);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content='Memoria 2 Site Template - Page' name='description' />
      </Head>

      <Drawer ref={drawerElement} open={showDrawer} onClose={handleDrawerToggle}>
        <h2 className='text-3xl leading-10 text-tertiary'>{title}</h2>

        <section className='my-6'>
          <p>Maak je keuze:</p>
          <ul className='inline-block py-4 pl-10 leading-8 list-disc list-inside text-tertiary'>
            {pages.map((page, index) => {
              return (
                <li key={index} className='group hover:text-secondary cursor-pointer'>
                  <Link href={`/startpagina/page/${page.filename}`}>
                    <a className='group-hover:text-secondary'>{page.meta.title}</a>
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
          <ArticleFactory articles={articles} />
        </section>
      </section>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default Page;

export async function getStaticProps() {
  const homeCollection = new CollectionService('home', 'file');
  const pagesCollection = new CollectionService('pages', 'folder');

  const {
    meta: { articles }
  } = homeCollection.getItem('home_articles');
  const {
    meta: { title }
  } = homeCollection.getItem('home_general');
  const pages = pagesCollection.getAllItems();

  return {
    props: {
      title: title ?? '-- titel --',
      pages: pages ?? [],
      articles: articles ?? []
    }
  };
}
