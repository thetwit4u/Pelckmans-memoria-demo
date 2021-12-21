import React from 'react';
import classNames from 'classnames';
import { Drawer, HamburgerMenu } from '@components';
import { DefaultLayoutProps } from './types';

const DefaultLayout = ({ children }: DefaultLayoutProps): JSX.Element => {
  const [showDrawer, setShowDrawer] = React.useState(true);

  const handleDrawerToggle = () => setShowDrawer(prevState => !prevState);

  return (
    <main className='flex justify-end mx-auto'>
      <Drawer open={showDrawer} onClose={handleDrawerToggle} />
      {!showDrawer && <HamburgerMenu onClick={handleDrawerToggle} />}

      <section
        className={classNames('transition-all duration-500', {
          'w-8/12': showDrawer,
          'w-full': !showDrawer
        })}>
        <section className='grid grid-cols-4 my-16 mx-auto w-10/12'>{children}</section>
      </section>
    </main>
  );
};

export default DefaultLayout;
