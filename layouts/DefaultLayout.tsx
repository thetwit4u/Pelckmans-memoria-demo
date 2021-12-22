import React from 'react';
import { DefaultLayoutProps } from './types';
import Head from 'next/head';

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
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
      <main className='flex justify-end mx-auto'>{children}</main>
    </>
  );
};

export default DefaultLayout;
