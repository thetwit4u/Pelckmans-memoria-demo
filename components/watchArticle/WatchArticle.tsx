import React from 'react';
import Image from 'next/image';
import IconFileMedia from '@icons/icon-file-media.svg';
import styles from './styles.module.scss';
import { WatchArticleProps } from './types';
import classNames from 'classnames';

const WatchArticle = ({ alt, src, size }: WatchArticleProps): JSX.Element => {
  return (
    <article
      className={classNames('bg-white border border-grey-dark m-4', {
        'col-span-1': size === '1/4',
        'col-span-2': size === '2/4',
        'col-span-3': size === '3/4',
        'col-span-4': size === '4/4' || size === undefined
      })}>
      <header className='flex items-center py-5 px-6 text-tertiary bg-grey'>
        <IconFileMedia
          aria-label='Media file icon'
          className='block mr-2'
          height='1.6em'
          title='Media file icon'
          width='1.6em'
        />
        Kijk
      </header>

      <section className={`${styles['image-container']} p-6`}>
        <Image alt={alt} className={styles['image-item']} layout='fill' src={src} />
      </section>
    </article>
  );
};

export default WatchArticle;
