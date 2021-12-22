import React from 'react';
import classNames from 'classnames';
import { Drawer, HamburgerMenu } from '@components';
import { DefaultLayoutProps } from './types';
import Link from 'next/link';
import Button from '../components/button/Button';
import { FaAngleLeft } from 'react-icons/fa';
import { placeholderLinks, placeholderTitle } from '../assets/data/placeholderData';

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  const [showDrawer, setShowDrawer] = React.useState(true);

  const handleDrawerToggle = () => setShowDrawer(prevState => !prevState);

  return (
    <main className='flex justify-end mx-auto'>
      <Drawer open={showDrawer} onClose={handleDrawerToggle}>
        <h2 className='text-3xl leading-10 text-tertiary'>{placeholderTitle}</h2>

        <section className='my-6'>
          <p>Maak je keuze:</p>
          <ul className='inline-block py-4 pl-10 leading-8 list-disc list-inside text-tertiary'>
            {placeholderLinks.map(link => {
              return (
                <li key={link.id} className='group hover:text-secondary cursor-pointer'>
                  <Link href={link.url}>
                    <a className='group-hover:text-secondary'>{link.text}</a>
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
        className={classNames('transition-all duration-500', {
          'w-8/12': showDrawer,
          'w-full': !showDrawer
        })}>
        <section className='grid grid-cols-4 my-16 mx-auto w-10/12'>{children}</section>
      </section>
    </main>
  );
};

export default DefaultLayout;
