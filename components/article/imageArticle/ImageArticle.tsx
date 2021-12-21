import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { ImageArticleProps } from './types';

const ImageArticle = ({ alt, src }: ImageArticleProps): JSX.Element => {
  return (
    <section className={`${styles['image-container']} p-6`}>
      <Image alt={alt} className={styles['image-item']} layout='fill' src={src} />
    </section>
  );
};

export default ImageArticle;
