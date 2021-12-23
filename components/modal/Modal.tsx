import React from 'react';
import ReactDOM from 'react-dom';
import { ModalProps } from './types';
import { FaTimes } from 'react-icons/fa';

const Modal = ({ children, headerTitle, onClose }: ModalProps): JSX.Element | null => {
  const [isBrowser, setIsBrowser] = React.useState(false);

  const modalElement = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setIsBrowser(true);

    const handleBackDrop = (event: MouseEvent) => {
      if (modalElement.current && !modalElement.current.contains(event.target as Element)) {
        onClose();
      }
    };

    window.addEventListener('click', handleBackDrop);

    return () => window.removeEventListener('click', handleBackDrop);
  }, [onClose]);

  if (isBrowser) {
    const modalRootElement = document.getElementById('modal-root');

    if (modalRootElement) {
      return ReactDOM.createPortal(
        <section className='fixed top-0 right-0 bottom-0 left-0 z-50 w-full h-full bg-black/50'>
          <section
            ref={modalElement}
            className='fixed z-50 w-10/12 h-auto text-white bg-white border border-grey-dark -translate-x-2/4 -translate-y-2/4 left-[50%] top-[50%]'>
            <header className='flex justify-between items-center p-4 text-tertiary bg-grey'>
              <p>{headerTitle}</p>
              <button onClick={onClose}>
                <FaTimes />
              </button>
            </header>
            <section className='p-4 text-tertiary'>{children}</section>
          </section>
        </section>,
        modalRootElement
      );
    }
    return null;
  }
  return null;
};

export default Modal;
