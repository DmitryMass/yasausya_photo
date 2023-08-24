import { useState, type FC } from 'react';
import { LangButtonts } from './LangButtonts';
import { BurgerButton } from './BurgerButton';
import { usePlaySound } from '@/src/hooks/usePlaySound';
import { NavMenu } from './NavMenu';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export const Header: FC = () => {
  const [isOpenNav, setToggleNav] = useState(false);
  const { playSound } = usePlaySound();
  const { route } = useRouter();

  const toggleNav = () => {
    setToggleNav(!isOpenNav);
    playSound();
  };

  return (
    <header
      className={clsx(
        'px-9 py-6 fixed w-full top-0 z-10',
        route === '/' ? null : 'bg-mainBg',
      )}
    >
      <div className="flex items-center justify-end gap-8">
        <div className="text-white z-20">
          <LangButtonts />
        </div>
        <BurgerButton isOpenNav={isOpenNav} toggleBurger={toggleNav} />
      </div>
      <NavMenu isOpenNav={isOpenNav} closeNav={toggleNav} />
    </header>
  );
};
