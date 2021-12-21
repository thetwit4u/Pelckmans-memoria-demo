import React from 'react';
import { FaAngleLeft, FaTimes } from 'react-icons/fa';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../button/Button';
import { DrawerProps } from './types';

const Drawer = ({ open, onClose }: DrawerProps): JSX.Element => {
  return (
    <>
      <div
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
    </>
  );
};

export default Drawer;
