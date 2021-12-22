import React from 'react';
import { TextArticleProps } from './types';

const TextArticle = ({ children }: TextArticleProps): JSX.Element => {
  return <section className='p-6 text-tertiary'>{children}</section>;
};

export default TextArticle;
