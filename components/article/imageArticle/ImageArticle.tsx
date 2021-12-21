import React from 'react';
import Image from 'next/image';
import { ImageArticleProps } from './types';

const ImageArticle = ({ alt, src }: ImageArticleProps): JSX.Element => {
  return (
    <section className='p-6 image-container'>
      <Image alt={alt} className='image-item' layout='fill' src={src} />
    </section>
  );
};

export default ImageArticle;
