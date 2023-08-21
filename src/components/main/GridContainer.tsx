import { FC } from 'react';
import styles from './grid-container.module.css';
import clsx from 'clsx';
import { usePlaySound } from '@/src/hooks/usePlaySound';

const data = [
  {
    img: '/pictures/img_1033.JPG',
    text: 'Morning Gallery',
  },
  {
    img: '/pictures/header-bg.jpg',
  },
  {
    img: '/pictures/img_1033.JPG',
  },
  {
    img: '/pictures/img_1033.JPG',
  },
  {
    img: '/pictures/img_1033.JPG',
  },
  {
    img: '/pictures/header-bg.jpg',
  },
];

export const GridContainer: FC = () => {
  const { playSound } = usePlaySound();
  return (
    <div className={styles.container}>
      {data.map((img: any, idx) => {
        return (
          <div
            onClick={playSound}
            key={img.img + idx}
            className={clsx(styles.div)}
          >
            <img src={img.img} alt='logo' />
            <p className='text-white absolute w-full text-center bottom-10 '>
              {img.text}
            </p>
          </div>
        );
      })}
    </div>
  );
};
