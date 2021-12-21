import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FaAngleLeft, FaBars, FaTimes } from 'react-icons/fa';
import { Article, Button, ImageArticle, SliderArticle } from '@components';
import { placeholderImages, placeholderSliderGallery } from '../../assets/data/placeholderData';

const Default: NextPage = () => {
  const [showMenu, setShowMenu] = React.useState(true);

  const handleMenu = () => setShowMenu(prevState => !prevState);

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
            <Article icon='watch' size='3/4' title='Aangepaste Titel'>
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
          </section>
        </div>
      </main>
    </div>
  );
};

export default Default;
