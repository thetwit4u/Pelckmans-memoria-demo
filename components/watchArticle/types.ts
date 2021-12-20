import { ReactNode } from 'react';

export interface WatchArticleProps {
  alt: string;
  size?: '1/4' | '2/4' | '3/4' | '4/4';
  src: string;
  title?: ReactNode;
}
