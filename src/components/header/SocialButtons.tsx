import { usePlaySound } from '@/src/hooks/usePlaySound';
import Link from 'next/link';
import { type FC } from 'react';

export const SocialButtons: FC = () => {
  const { playSound } = usePlaySound();

  return (
    <div className="flex items-center justify-center gap-3">
      <Link
        onClick={playSound}
        className="border-sand mx-1 hover:bg-sand hover:bg-opacity-50 transition-all duration-150 w-10 h-10 rounded-full flex items-center justify-center"
        href={'#'}
        target="_blank"
      >
        <img className="w-6 h-6" src="/icons/mail-logo.svg" alt="" />
      </Link>
      <Link
        onClick={playSound}
        className="border-sand mx-1 hover:bg-sand hover:bg-opacity-50 transition-all duration-150 w-10 h-10 rounded-full flex items-center justify-center"
        href={'#'}
        target="_blank"
      >
        <img className="w-6 h-6" src="/icons/instagram-logo.svg" alt="logo" />
      </Link>
      <Link
        onClick={playSound}
        className="border-sand hover:bg-sand hover:bg-opacity-50 transition-all duration-150 p-1 rounded-full flex items-center justify-center"
        href={'#'}
        target="_blank"
      >
        <img
          className="w-8 h-8 -ml-0.5"
          src="/icons/telegram-logo.svg"
          alt="logo"
        />
      </Link>
      <Link
        onClick={playSound}
        className="border-sand mx-1 hover:bg-sand hover:bg-opacity-50 transition-all duration-150 w-10 h-10 rounded-full flex items-center justify-center"
        href={'#'}
        target="_blank"
      >
        <img className="w-6 h-6" src="/icons/whatsapp-logo.svg" alt="logo" />
      </Link>
    </div>
  );
};
