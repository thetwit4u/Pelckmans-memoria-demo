import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import classNames from 'classnames';
import Image from 'next/image';
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
            'bg-secondary',
            {
              'left-0': showMenu,
              'left-[-50%]': !showMenu
            }
          )}
        >
          <section className='py-2 bg-primary min-h-[60px]'>
            <div className='flex justify-between items-center mx-auto w-11/12'>
              <div className='max-w-[250px]'>
                <Image
                  alt='Memoria 2 logo'
                  height='111px'
                  src='https://digitaleverkenning.pelckmans.be/memoria2-panhelleensecultuur/wp-content/uploads/sites/50/2020/09/memoria.png'
                  width='558px'
                />
              </div>

              <FaTimes className='text-2xl text-white cursor-pointer' onClick={handleMenu} />
            </div>
          </section>
        </div>
        <div
          className={classNames('transition-all duration-500 ', {
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
