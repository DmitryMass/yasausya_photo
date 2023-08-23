import { FC } from 'react';
import GridElement from './GridElement';
import styles from './grid-container.module.css';

const data = [
  {
    img: '/pictures/img_1033.JPG',
    text: 'Morning Gallery',
  },
  {
    // img: '/pictures/header-bg.jpg',
    img: '/pictures/img_1033.JPG',
    text: 'Morning Gallery',
  },
  {
    img: '/pictures/img_1033.JPG',
    text: 'Morning Gallery',
  },
  {
    img: '/pictures/img_1033.JPG',
    text: 'Morning Gallery',
  },
  {
    img: '/pictures/img_1033.JPG',
    text: 'Morning Gallery',
  },
  {
    img: '/pictures/header-bg.jpg',
    text: 'Morning Gallery',
  },
];

export const GridContainer: FC = () => {
  return (
    <div className={styles.container}>
      {data.map((img: any, idx) => {
        return <GridElement key={idx} img={img} />;
      })}
    </div>
  );
};
