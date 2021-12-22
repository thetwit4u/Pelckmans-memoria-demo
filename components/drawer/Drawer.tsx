import React from 'react';
import { FaTimes } from 'react-icons/fa';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { DrawerProps } from './types';

const Drawer = ({ children, open, onClose }: DrawerProps): JSX.Element => {
  return (
    <section
      className={classNames(
        'transition-all',
        'duration-500',
        'ease-in-out',
        'fixed',
        'w-4/12',
        'h-screen',
        'bg-grey',
        'z-50',
        {
          'left-0': open,
          'left-[-50%]': !open
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

          <FaTimes className='text-2xl text-white cursor-pointer' onClick={onClose} />
        </div>
      </section>

      <section className='my-4 mx-auto w-11/12'>{children}</section>
    </section>
  );
};

export default Drawer;
