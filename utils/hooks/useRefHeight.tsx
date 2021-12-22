import React from 'react';
import { useMediaQuery } from 'react-responsive';

const useRefHeight = (ref: React.RefObject<HTMLDivElement>) => {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (isLargeScreen) return;

    const handleResize = () => {
      if (!ref.current) return;
      setHeight(ref.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  React.useEffect(() => {
    if (isLargeScreen || !ref.current) return;

    setHeight(ref.current.clientHeight);
  }, [isLargeScreen, ref]);

  return [height];
};

export default useRefHeight;
