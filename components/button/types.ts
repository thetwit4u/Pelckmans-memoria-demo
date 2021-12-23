import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  endIcon?: ReactNode;
  startIcon?: ReactNode;
  verticalSpacing?: 'small' | 'large';
}
