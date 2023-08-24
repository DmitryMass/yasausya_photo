import { FC } from 'react';
import GridElement from './GridElement';
import styles from './grid-container.module.css';

const data = [
  {
    img: '/pictures/img_1033.JPG',
    name: 'Morning Collection',
  },
  {
    img: '/pictures/img_1033.JPG',
    name: 'Summer Collection',
  },
  {
    img: '/pictures/img_1033.JPG',
    name: 'Winter Collection',
  },
  {
    img: '/pictures/img_1033.JPG',
    name: 'Autumn Collection',
  },
  {
    img: '/pictures/img_1033.JPG',
    name: 'Spring Collection',
  },
  {
    img: '/pictures/header-bg.jpg',
    name: 'Pornhub Collection',
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
