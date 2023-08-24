import { useState, type FC } from 'react';
import { LangButtonts } from './LangButtonts';
import { BurgerButton } from './BurgerButton';
import { usePlaySound } from '@/src/hooks/usePlaySound';
import { NavMenu } from './NavMenu';

export const Header: FC = () => {
  const [isOpenNav, setToggleNav] = useState(false);
  const { playSound } = usePlaySound();

  const toggleNav = () => {
    setToggleNav(!isOpenNav);
    playSound();
  };

  return (
    <header className="px-9 pt-7 fixed w-full top-0 z-30">
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
