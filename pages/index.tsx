import React, { ReactElement } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { HomeLayout } from '@layouts';
import { Button } from '@components';
import CollectionService from '../utils/service/collectionService';

type IProps = {
  meta: { title: string };
};
const Home = (props: IProps) => {
  const { title } = props.meta;
  const pageTitle = `Startpagina - ${title}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta content='Memoria 2 Site Template - Startpagina' name='description' />
      </Head>

      <section className='text-center'>
        <h1 className='my-4 text-2xl xl:text-4xl text-white'>{title}</h1>
        <h2 className='my-6 text-xl xl:text-3xl text-white'>Digitiale Exploratie</h2>
      </section>
      <section className='flex justify-center'>
        <Link href='/startpagina/page'>
          <a>
            <Button>{title}</Button>
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

export async function getStaticProps() {
  const homeCollection = new CollectionService('home', 'file');
  const {
    meta: { title }
  } = homeCollection.getItem('home_general');

  return {
    props: {
      meta: { title }
    }
  };
}
