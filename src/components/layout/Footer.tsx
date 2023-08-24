import type { FC } from 'react';
import { SocialButtons } from '../header/SocialButtons';

export const Footer: FC = () => {
  const data = new Date();
  return (
    <footer className="border-t border-sand border-opacity-40 relative z-20 bg-mainBg py-5">
      <div className="max-w-[1320px] mx-auto w-full px-5 flex items-center justify-between max-[768px]:flex-col max-[768px]:gap-2">
        <span className="text-sand text-sm">
          Copyright © All rights reserved {data.getFullYear()}
        </span>
        <SocialButtons />
        <a
          className="flex items-center"
          target="_blank"
          href="https://www.fiverr.com/nextechcrew"
        >
          <span className="text-[#ebd7db] text-sm font-semibold">
            Developed by
          </span>
          <img
            className="invert w-[120px]"
            src="/pictures/nextech-logo.png"
            alt=""
          />
        </a>
      </div>
    </footer>
  );
};
