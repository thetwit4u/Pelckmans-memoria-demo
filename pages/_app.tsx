// swiper styles
import 'swiper/scss';
import 'swiper/css/effect-fade';

import '../styles/globals.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
