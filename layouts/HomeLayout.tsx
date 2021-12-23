import React from 'react';
import { HomeLayoutProps } from './types';
import Head from 'next/head';

const HomeLayout = ({ children }: HomeLayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>Pelckmans - Memoria 2</title>

        <meta content='Memoria2 Template' name='description' />
        <link href='/apple-touch-icon.png' rel='apple-touch-icon' sizes='180x180' />
        <link href='/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png' />
        <link href='/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png' />
        <link href='/site.webmanifest' rel='manifest' />
        <link color='#5bbad5' href='/safari-pinned-tab.svg' rel='mask-icon' />
        <meta content='#ffffff' name='msapplication-TileColor' />
        <meta content='#ffffff' name='theme-color' />
        <link href='/favicon.ico' rel='icon' />
      </Head>
      <main
        className={`grid grid-rows-homepage-layout mx-auto min-h-screen bg-center bg-no-repeat bg-cover bg-[url('https://digitaleverkenning.pelckmans.be/memoria2-panhelleensecultuur/wp-content/uploads/sites/50/2020/09/978-90-289-9944_2_Memo_2_B.jpg')]`}>
        <section className='flex flex-col row-start-2 justify-center items-center mx-auto w-11/12'>{children}</section>
      </main>
    </>
  );
};

export default HomeLayout;
