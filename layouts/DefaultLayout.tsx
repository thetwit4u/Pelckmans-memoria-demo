import React from 'react';
import { DefaultLayoutProps } from './types';

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  return <main className='flex justify-end mx-auto'>{children}</main>;
};

export default DefaultLayout;
