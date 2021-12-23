import React from 'react';
import { useMediaQuery } from 'react-responsive';

const useRefHeight = (ref: React.RefObject<HTMLDivElement>) => {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const [refHeight, setRefHeight] = React.useState(0);

  React.useEffect(() => {
    if (isLargeScreen || !ref.current) return;

    setRefHeight(ref.current.clientHeight);
  }, [isLargeScreen, ref]);

  React.useEffect(() => {
    const handleResize = () => {
      if (!ref.current) return;
      setRefHeight(ref.current.clientHeight);
    };

    if (isLargeScreen) return setRefHeight(0);
    else {
      window.addEventListener('resize', handleResize);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isLargeScreen, ref]);

  return [refHeight];
};

export default useRefHeight;
