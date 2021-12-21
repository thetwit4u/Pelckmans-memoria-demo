import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleLeft, FaBars, FaTimes } from 'react-icons/fa';
import { Button, GalleryArticle, WatchArticle } from '@components';

const Default: NextPage = () => {
  const [showMenu, setShowMenu] = React.useState(true);

  const handleMenu = () => setShowMenu(prevState => !prevState);

  const placeholderImages = [
    'https://digitaleverkenning.pelckmans.be/memoria2-athene/wp-content/uploads/sites/51/2020/09/athene.jpg',
    'https://digitaleverkenning.pelckmans.be/memoria2-panhelleensecultuur/wp-content/uploads/sites/50/2020/09/529876_9779_mem2_04_080.png',
    'https://digitaleverkenning.pelckmans.be/memoria2-familia/wp-content/uploads/sites/52/2020/09/529876_9779_mem2_ict_07_familia_008.jpg'
  ];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const placeholderImagesGallery = [
    {
      alt: 'sample image 1',
      id: 1,
      src: 'https://digitaleverkenning.pelckmans.be/memoria2-panhelleensecultuur/wp-content/uploads/sites/50/2020/09/529876_9779_mem2_ict_04_cultuur_011-e1600081703586.jpg',
      caption:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra lacus enim, at blandit nunc interdum non. Donec venenatis ac ligula a semper. Cras suscipit facilisis neque sit amet blandit. Praesent accumsan fringilla arcu, sit amet lacinia neque euismod quis. Vestibulum iaculis ante vitae luctus facilisis. Morbi eget neque odio.'
    },
    {
      alt: 'sample image 2',
      id: 2,
      src: 'https://digitaleverkenning.pelckmans.be/memoria2-panhelleensecultuur/wp-content/uploads/sites/50/2020/09/529876_9779_mem2_ict_04_cultuur_012-e1600081611564.jpg',
      caption:
        'Donec tempor turpis sagittis est pulvinar varius. Aenean velit augue, lacinia vel ullamcorper eget, luctus ut metus.'
    },
    {
      alt: 'sample image 3',
      id: 3,
      src: 'https://digitaleverkenning.pelckmans.be/memoria2-panhelleensecultuur/wp-content/uploads/sites/50/2020/09/529876_9779_mem2_ict_04_cultuur_013-e1600081578884.jpg',
      caption:
        'Quisque porttitor nunc sem, nec tincidunt lorem ullamcorper sit amet. Aenean dolor velit, mollis congue feugiat eget, pharetra eget nibh.'
    },
    {
      alt: 'sample image 4',
      id: 4,
      src: 'https://digitaleverkenning.pelckmans.be/memoria2-panhelleensecultuur/wp-content/uploads/sites/50/2020/09/529876_9779_mem2_ict_04_cultuur_018-e1600081439148.jpg',
      caption: ''
    }
  ];

  return (
    <div>
      <Head>
        <title>Memoria2 Template</title>
        <meta content='Memoria2 Template' name='description' />
        <link href='/favicon.ico' rel='icon' />
      </Head>

      <main className='flex justify-end mx-auto'>
        {!showMenu && (
          <button
            className='absolute top-6 left-6 py-4 px-6 bg-secondary hover:bg-secondary-dark rounded-md border-0 shadow-button-homepage hover:shadow-button-homepage-hover transition-all hover:translate-y-px'
            onClick={handleMenu}>
            <FaBars className='text-white text-md' />
          </button>
        )}
        <div
          className={classNames(
            'transition-all',
            'duration-500',
            'ease-in-out',
            'fixed',
            'w-4/12',
            'h-screen',
            'bg-grey',
            {
              'left-0': showMenu,
              'left-[-50%]': !showMenu
            }
          )}>
          <section className='py-2 bg-primary min-h-[60px]'>
            <div className='flex justify-between items-center mx-auto w-11/12'>
              <Link href='/'>
                <a>
                  <h1 className='max-w-[250px]'>
                    <Image
                      alt='Memoria 2 logo'
                      height='111px'
                      src='https://digitaleverkenning.pelckmans.be/memoria2-panhelleensecultuur/wp-content/uploads/sites/50/2020/09/memoria.png'
                      width='558px'
                    />
                  </h1>
                </a>
              </Link>

              <FaTimes className='text-2xl text-white cursor-pointer' onClick={handleMenu} />
            </div>
          </section>

          <section className='my-4 mx-auto w-11/12'>
            <h2 className='text-3xl leading-10 text-tertiary'>Hedendaagse resten van de pan-Helleense cultuur</h2>

            <section className='my-6'>
              <p>Maak je keuze:</p>
              <ul className='inline-block py-4 pl-10 leading-8 list-disc list-inside text-tertiary'>
                <li className='group hover:text-secondary cursor-pointer'>
                  <Link href='/startpagina/placeholder'>
                    <a className='group-hover:text-secondary'>Orakel</a>
                  </Link>
                </li>

                <li className='group hover:text-secondary cursor-pointer'>
                  <Link href='/startpagina/placeholder'>
                    <a className='group-hover:text-secondary'>Spelen</a>
                  </Link>
                </li>

                <li className='group hover:text-secondary cursor-pointer'>
                  <Link href='/startpagina/placeholder'>
                    <a className='group-hover:text-secondary'>Tempel</a>
                  </Link>
                </li>

                <li className='group hover:text-secondary cursor-pointer'>
                  <Link href='/startpagina/placeholder'>
                    <a className='group-hover:text-secondary'>Orakel</a>
                  </Link>
                </li>
              </ul>
            </section>

            <Link href='/'>
              <a>
                <Button startIcon={<FaAngleLeft />} verticalSpacing='small'>
                  Startpagina
                </Button>
              </a>
            </Link>
          </section>
        </div>
        <div
          className={classNames('transition-all duration-500', {
            'w-8/12': showMenu,
            'w-full': !showMenu
          })}>
          <section className='grid grid-cols-4 my-16 mx-auto w-10/12'>
            <WatchArticle alt='image' size='3/4' src={placeholderImages[0]} title='Aangepaste titel' />
            <WatchArticle alt='image' size='4/4' src={placeholderImages[1]} />
            <WatchArticle alt='image' size='4/4' src={placeholderImages[2]} />
            <GalleryArticle src={placeholderImagesGallery} />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Default;
