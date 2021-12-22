import React from 'react';
import { HomeLayoutProps } from './types';

const HomeLayout = ({ children }: HomeLayoutProps): JSX.Element => {
  return (
    <main
      className={`grid grid-rows-homepage-layout mx-auto min-h-screen bg-center bg-no-repeat bg-cover bg-[url('https://digitaleverkenning.pelckmans.be/memoria2-panhelleensecultuur/wp-content/uploads/sites/50/2020/09/978-90-289-9944_2_Memo_2_B.jpg')]`}>
      {children}
    </main>
  );
};

export default HomeLayout;
