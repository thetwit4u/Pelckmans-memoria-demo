import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { HomeLayout } from '@layouts';
import { Button } from '@components';
import * as placeholder from '../assets/data/placeholderData';

const Home = () => {
  const pageTitle = `Startpagina - ${placeholder.siteSettings.title}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta content='Memoria 2 Site Template - Startpagina' name='description' />
      </Head>

      <section className='text-center'>
        <h1 className='my-4 text-2xl xl:text-4xl text-white'>{placeholder.siteSettings.title}</h1>
        <h2 className='my-6 text-xl xl:text-3xl text-white'>{placeholder.siteSettings.type}</h2>
      </section>
      <section className='flex justify-center'>
        <Link href='/startpagina/page'>
          <a>
            <Button>{placeholder.siteSettings.title}</Button>
          </a>
        </Link>
      </section>
    </>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <HomeLayout>{page}</HomeLayout>;
};
