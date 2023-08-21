import type { AppProps } from 'next/app';
import type { FC } from 'react';
import '@/styles/globals.css';

export const App: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};
