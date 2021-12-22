import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import classNames from 'classnames';
import { DrawerProps } from './types';

const Drawer = React.forwardRef<HTMLDivElement | null, DrawerProps>(({ children, open, onClose }, ref): JSX.Element => {
  return (
    <section
      ref={ref}
      className={classNames('transition-all', 'duration-500', 'ease-in-out', 'bg-grey', 'z-50', {
        'absolute top-0 w-full left-0 lg:left-0 lg:w-4/12 lg:h-screen lg:fixed': open,
        'absolute top-[-100%] w-full lg:left-[-50%] lg:w-4/12 lg:top-0 lg:fixed': !open
      })}>
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
});

export default Drawer;
