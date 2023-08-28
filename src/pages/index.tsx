import { useRef, type FC } from 'react';
import { MainInfo } from '../components/header/MainInfo';
import { usePlaySound } from '../hooks/usePlaySound';
import { GridContainer } from '../components/main/GridContainer';

const Home: FC = () => {
  const { playSound } = usePlaySound();
  const ref = useRef(null);
  const handleClick = () => {
    //@ts-ignore
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    playSound();
  };

  return (
    <>
      <div className='h-screen bg-[url("/pictures/main.webp")] bg-no-repeat bg-cover bg-center w-full'>
        <MainInfo />
        <div className="left-0 absolute bottom-5 w-full mx-auto">
          <span
            onClick={handleClick}
            className="text-white cursor-pointer text-center w-10 h-10 animate-pulse hover:animate-none rounded-full mx-auto flex items-center justify-center"
          >
            <img className="w-7 h-7" src="/icons/arrow-icon.svg" alt="logo" />
          </span>
        </div>
      </div>
      <div ref={ref}>
        <GridContainer />
      </div>
    </>
  );
};
export default Home;
