import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

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
        {/* navigation bar */}
        {!showMenu && (
          <div className='absolute left-0' onClick={handleMenu}>
            X
          </div>
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
          )}
        >
          <section className='py-2 bg-primary min-h-[60px]'>
            <div className='flex justify-between items-center mx-auto w-11/12'>
              <h1 className='max-w-[250px]'>
                <Image
                  alt='Memoria 2 logo'
                  height='111px'
                  src='https://digitaleverkenning.pelckmans.be/memoria2-panhelleensecultuur/wp-content/uploads/sites/50/2020/09/memoria.png'
                  width='558px'
                />
              </h1>

              <FaTimes className='text-2xl text-white cursor-pointer' onClick={handleMenu} />
            </div>
          </section>

          <section className='my-4 mx-auto w-11/12'>
            <h2 className='text-3xl leading-10 text-tertiary'>Hedendaagse resten van de pan-Helleense cultuur</h2>

            <section className='my-6'>
              <p>Maak je keuze:</p>
              <ul className='py-4 pl-10 leading-8 list-disc list-inside text-tertiary'>
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
          </section>
        </div>
        <div
          className={classNames('transition-all duration-500', {
            'w-8/12 bg-secondary': showMenu,
            'w-full bg-primary': !showMenu
          })}
        >
          {/* article content */}
          <div className='grid grid-cols-2 mx-auto w-10/12 bg-primary-light'>
            <div className='col-span-2'>
              Article 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolore doloribus id impedit iste
              labore magni, maiores quo reiciendis repellat repellendus, suscipit. Est maxime nemo nisi sapiente ut.
              Consectetur, soluta.
            </div>
            <div>Article 2</div>
            <div>Article 3</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Default;
