import type { AppProps } from 'next/app';
import type { FC } from 'react';
import '@/src/styles/globals.css';
import { I18nextProvider } from 'react-i18next';
import { MainLayout } from '../components/layout/MainLayout';
import i18n from '@/src/utils/i18next';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </I18nextProvider>
  );
};

export default App;
