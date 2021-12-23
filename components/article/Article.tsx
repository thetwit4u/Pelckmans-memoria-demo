import React from 'react';
import classNames from 'classnames';
import IconFileMedia from '@icons/icon-file-media.svg';
import IconInfo from '@icons/icon-info.svg';
import { ArticleProps } from './types';

const Article = ({ caption, children, icon, size = '4/4', title = 'Titel' }: ArticleProps): JSX.Element => {
  const renderIcon = () => {
    const iconParams = {
      className: 'block mr-2',
      height: '1.6em',
      width: '1.6em'
    };

    switch (icon) {
      case 'watch':
        return <IconFileMedia aria-label='Media bestand icoon' title='Media bestand icoon' {...iconParams} />;
      case 'read':
        return <IconInfo aria-label='Info icoon' title='Info icoon' {...iconParams} />;
      default:
        throw new Error(`Icon ${icon} not found. Please use: 'watch' or 'read' `);
    }
  };

  return (
    <article
      className={classNames('bg-white border border-grey-dark m-4', {
        'col-span-4 xl:col-span-1': size === '1/4',
        'col-span-4 lg:col-span-2': size === '2/4',
        'col-span-4 lg:col-span-3': size === '3/4',
        'col-span-4 lg:col-span-4': size === '4/4'
      })}>
      <header className='flex items-center py-5 px-6 text-tertiary bg-grey'>
        {renderIcon()} {title}
      </header>
      {children}
      {caption && (
        <section className='p-3 my-6 mx-6 border border-grey-dark'>
          <p className='text-tertiary'>{caption}</p>
        </section>
      )}
    </article>
  );
};

export default Article;
