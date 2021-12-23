import { ReactNode } from 'react';

export interface ArticleProps {
  caption?: ReactNode;
  children: ReactNode;
  icon?: 'watch' | 'read';
  size?: '1/4' | '2/4' | '3/4' | '4/4';
  title?: ReactNode;
}
