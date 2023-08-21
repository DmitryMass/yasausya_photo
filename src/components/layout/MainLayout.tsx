import type { FC, ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Raleway } from 'next/font/google';
import clsx from 'clsx';

const raleway = Raleway({ subsets: ['latin'] });

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={clsx(raleway.className, 'flex flex-col min-h-full')}>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
};
