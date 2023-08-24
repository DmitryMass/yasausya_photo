import { useTranslation } from 'react-i18next';
import { SocialButtons } from './SocialButtons';

export const MainInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full max-w-[880px] w-full mx-auto flex flex-col items-center justify-between">
      <div>
        <h1 className="pt-36 sm:pt-24 text-4xl sm:text-7xl font-medium tracking-wider text-center text-sand pointer-events-none">
          Olha Sausya
        </h1>
      </div>
      <div className="pb-32 text-sand">
        <div className="mb-8">
          <p className="text-center mb-1 font-medium text-base pointer-events-none">
            {t('photographerFrom')}
          </p>
        </div>
        <SocialButtons />
      </div>
    </div>
  );
};
