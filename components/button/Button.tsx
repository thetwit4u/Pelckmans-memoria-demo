import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './types';

const Button = ({ children, verticalSpacing, startIcon, endIcon }: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(
        'w-full text-base tracking-wider text-white uppercase bg-secondary hover:bg-secondary-dark border-0 shadow-button-homepage hover:shadow-button-homepage-hover transition-all hover:translate-y-px cursor-pointer rounded-[3px]',
        {
          'py-4': verticalSpacing === 'large' || !verticalSpacing,
          'py-2': verticalSpacing === 'small'
        }
      )}
    >
      <span className='flex justify-center items-center'>
        <span className='inline-block'>{startIcon}</span>
        {children}
        <span className='inline-block'>{endIcon}</span>
      </span>
    </button>
  );
};

export default Button;
