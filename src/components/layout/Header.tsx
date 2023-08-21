import clsx from 'clsx';
import { useRouter } from 'next/router';
import type { FC } from 'react';
import { LangButtonts } from './LangButtonts';

export const Header: FC = () => {
  const { pathname } = useRouter();

  return (
    <header
      className={clsx(
        pathname === '/' ? 'h-screen' : null,
        'px-5 pt-2.5 relative'
      )}
    >
      <div className='flex items-center justify-end gap-8 mt-4 mr-4'>
        <div className='z-10 text-white'>
          <LangButtonts />
        </div>
        <div
          className={clsx(
            'w-8 h-8 font-bold z-10 text-sand relative flex items-center justify-center cursor-pointer mr-1',
            'after:w-full after:h-1 after:bg-sand after:absolute after:top-1',
            'before:w-full before:h-1 before:bg-sand before:absolute before:bottom-1'
          )}
        >
          <span className='w-full h-1 bg-sand' />
        </div>
      </div>
    </header>
  );
};
