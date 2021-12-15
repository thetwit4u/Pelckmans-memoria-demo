import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

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

      <main className='grid grid-cols-3 mx-auto'>
        {/* navigation bar */}
        {!showMenu && (
          <div className='absolute' onClick={handleMenu}>
            X
          </div>
        )}
        <div
          className={
            showMenu
              ? `transition-all fixed left-0 w-4/12 h-screen bg-secondary`
              : `transition-all fixed left-[-34%] w-4/12 h-screen bg-secondary`
          }
        >
          <section className='bg-primary'>
            <div className='flex justify-between mx-auto w-11/12'>
              <h1 className='text-4xl'>Memoria</h1>
              <span className='text-4xl' onClick={handleMenu}>
                X
              </span>
            </div>
          </section>
        </div>
        <div className={showMenu ? 'col-span-2 col-start-2 bg-primary' : 'col-span-3 col-start-1 bg-primary'}>
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
