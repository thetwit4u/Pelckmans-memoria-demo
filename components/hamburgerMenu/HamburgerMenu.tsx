import React from 'react';
import { FaBars } from 'react-icons/fa';
import { HamburgerMenuProps } from './types';

const HamburgerMenu = ({ onClick }: HamburgerMenuProps): JSX.Element => {
  return (
    <button
      className='absolute top-6 left-6 py-4 px-6 bg-secondary hover:bg-secondary-dark rounded-md border-0 shadow-button-homepage hover:shadow-button-homepage-hover transition-all hover:translate-y-px'
      onClick={onClick}>
      <FaBars className='text-white text-md' />
    </button>
  );
};

export default HamburgerMenu;
