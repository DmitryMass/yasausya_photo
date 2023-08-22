import clsx from 'clsx';
import { FC, useEffect, useRef } from 'react';
import styles from './grid-container.module.css';
import { usePlaySound } from '@/src/hooks/usePlaySound';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

type GridElementProps = {
  img: {
    img: string;
    text: string;
  };
};

const GridElement: FC<GridElementProps> = ({ img }) => {
  const { playSound } = usePlaySound();
  const elementRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.create({
      trigger: elementRef.current,
      start: 'top 100%',
      end: 'bottom 40%',
      scrub: 1,
      onEnter: () => {
        gsap.fromTo(
          elementRef.current,
          { autoAlpha: 0, y: 50 },
          { autoAlpha: 1, y: 0, ease: 'power3.out', duration: 3 }
        );
      },
    });
  }, []);
  return (
    <div
      ref={elementRef}
      onClick={playSound}
      className={clsx(styles.div, 'overflow-hidden cursor-pointer')}
    >
      <img src={img.img} alt='logo' />
      <p className=' text-sand absolute top-0 w-full text-center text-2xl  uppercase transition-all duration-500 h-full flex justify-center items-center'>
        {img.text}
      </p>
    </div>
  );
};

export default GridElement;
