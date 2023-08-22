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
    img: 'https://images.unsplash.com/photo-1692396469311-d896fa89b8b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
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
