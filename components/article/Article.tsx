import React from 'react';
import classNames from 'classnames';
import IconFileMedia from '@icons/icon-file-media.svg';
import { ArticleProps } from './types';

const Article = ({ caption, children, icon, size = '4/4', title = 'Kijk' }: ArticleProps): JSX.Element => {
  const renderIcon = () => {
    const iconParams = {
      className: 'block mr-2',
      height: '1.6em',
      width: '1.6em'
    };

    switch (icon) {
      case 'watch':
        return <IconFileMedia aria-label='Media file icon' title='Media file icon' {...iconParams} />;
      default:
        return 'some default icon'; // TODO: NEED TO PROVIDE DEFAULT ICON
    }
  };

  return (
    <article
      className={classNames('bg-white border border-grey-dark m-4', {
        'col-span-1': size === '1/4',
        'col-span-2': size === '2/4',
        'col-span-3': size === '3/4',
        'col-span-4': size === '4/4'
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
