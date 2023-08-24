import { FC } from 'react';
import { Logo } from '../logo/Logo';

export type PageTitleProps = {
  title: string;
  text: string;
};

export const PageTitle: FC<PageTitleProps> = ({ title, text }) => {
  return (
    <>
      <Logo />
      <div className="max-w-[800px] w-full mx-auto px-5 pt-16 sm:pt-24 text-center mb-12 sm:mb-24">
        <p className="text-sand mb-12 sm:mb-24 text-base sm:text-lg pointer-events-none">
          {text}
        </p>
        <h1 className="text-sand font-medium text-4xl tracking-wide pointer-events-none">
          {title}
        </h1>
      </div>
    </>
  );
};
