import React from 'react';
import Image from 'next/image';
import { ImageArticleProps } from './types';
import { imageLoader } from '@utils';

const ImageArticle = ({ alt, src }: ImageArticleProps): JSX.Element => {
  return (
    <section className='p-6 image-container'>
      <Image unoptimized alt={alt} className='image-item' layout='fill' loader={() => imageLoader(src)} src={src} />
    </section>
  );
};

export default ImageArticle;
