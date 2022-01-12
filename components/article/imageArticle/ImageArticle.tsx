import React from 'react';
import Image from 'next/image';
import { ImageArticleProps } from './types';
import CollectionService from 'utils/service/collectionService';

const ImageArticle = ({ alt, src }: ImageArticleProps): JSX.Element => {
  return (
    <section className='p-6 image-container'>
      <Image
        unoptimized
        alt={alt}
        className='image-item'
        layout='fill'
        loader={() => CollectionService.getImagePath({ src })}
        src={src}
      />
    </section>
  );
};

export default ImageArticle;
