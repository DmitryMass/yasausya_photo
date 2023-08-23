import clsx from 'clsx';
import { type FC } from 'react';

type BurgerButtonProps = {
  isOpenNav: boolean;
  toggleBurger: () => void;
};

export const BurgerButton: FC<BurgerButtonProps> = ({
  isOpenNav,
  toggleBurger,
}) => {
  return (
    <button
      className="cursor-pointer z-20 ease-out duration-300"
      onClick={toggleBurger}
    >
      <div
        className={clsx(
          'flex flex-col gap-1.5 transition-all duration-700 ease-[cubic-bezier(0.68,-0.35,0.265,1.35)]',
          isOpenNav ? 'rotate-180' : 'burger',
        )}
      >
        <div
          className={clsx(
            'w-6 h-0.5 bg-sand transition-all duration-300 delay-200',
            isOpenNav ? 'rotate-45 translate-y-[8px]' : null,
          )}
        ></div>
        <div
          className={clsx(
            'w-6 h-0.5 transition-all duration-100 delay-300',
            isOpenNav ? 'bg-transparent' : 'bg-sand',
          )}
        ></div>
        <div
          className={clsx(
            'w-6 h-0.5 bg-sand transition-all duration-300 delay-200',
            isOpenNav ? '-rotate-45 -translate-y-[8px]' : null,
          )}
        ></div>
      </div>
    </button>
  );
};
