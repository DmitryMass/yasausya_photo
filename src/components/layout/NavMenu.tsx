import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { SocialButtons } from '../header/SocialButtons';

type NavMenuProps = {
  isOpenNav: boolean;
  closeNav: () => void;
};

export const NavMenu: FC<NavMenuProps> = ({ isOpenNav, closeNav }) => {
  const { asPath } = useRouter();
  const { t } = useTranslation();

  return (
    <div
      className={clsx(
        'bg-mainBgOpacity w-full visible fixed overflow-hidden top-0 left-0 h-full transition-all duration-700 ease-[cubic-bezier(0.68,-0.35,0.265,1.35)]',
        !isOpenNav ? 'invisible opacity-0 h-0' : null,
      )}
    >
      <div
        className={clsx(
          'w-full h-full bg-mainBg sm:w-1/4 min-w-[320px] flex flex-col justify-between ml-auto pl-7 pr-9 pt-20 pb-10 transition-all duration-700 ease-[cubic-bezier(0.68,-0.35,0.265,1.35)]',
          !isOpenNav ? 'translate-x-full' : null,
        )}
      >
        <nav className="w-full flex flex-col gap-5 text-sand text-2xl ml-auto text-right">
          <Link
            className={clsx(
              "hover:font-bold after:content-[''] after:block after:border-b-2 after:border-sand after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300 ",
              asPath === '/'
                ? 'font-bold after:scale-x-100'
                : 'hover:after:scale-x-100',
            )}
            href="/"
            onClick={closeNav}
          >
            {t('home')}
          </Link>
          <Link
            className={clsx(
              "hover:font-bold after:content-[''] after:block after:border-b-2 after:border-sand after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300 hover:after:scale-x-100",
              asPath === '/posters'
                ? 'font-bold after:scale-x-100'
                : 'hover:after:scale-x-100',
            )}
            href="/posters"
            onClick={closeNav}
          >
            {t('posters')}
          </Link>
          <Link
            className={clsx(
              "hover:font-bold after:content-[''] after:block after:border-b-2 whitespace-nowrap after:border-sand after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300 hover:after:scale-x-100",
              asPath === '/wallpapers'
                ? 'font-bold after:scale-x-100'
                : 'hover:after:scale-x-100',
            )}
            href="/wallpapers"
            onClick={closeNav}
          >
            {t('wallpapers')}
          </Link>
        </nav>
        <SocialButtons />
      </div>
    </div>
  );
};
