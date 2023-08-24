import { FC, useState } from 'react';
import { SocialButtons } from '../header/SocialButtons';

export const ContactMe: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="h-[40px]">
      {isOpen ? (
        <SocialButtons />
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="px-2.5 py-1.5 border border-sand text-sand hover:text-mainBg hover:border-mainBg hover:bg-sand hover:font-medium transition-all duration-200"
        >
          Contact me
        </button>
      )}
    </div>
  );
};
