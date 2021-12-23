import { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  headerTitle: ReactNode;
  onClose: () => void;
}
