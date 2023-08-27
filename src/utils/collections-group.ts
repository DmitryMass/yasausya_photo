import styles from '@/src/components/collections/collections.module.css';

export type CollectionsGroup = {
  top: Collection[];
  bottom: Collection[];
};

export type Collection = {
  img: string;
  style: string;
};
export type CollectionList = {
  img: string;
  name: string;
};

export const collectionsList: CollectionList[] = [
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

export const morningCollection: CollectionsGroup = {
  top: [
    { img: '/pictures/IMG_1033.JPG', style: styles.div1 },
    { img: '/pictures/IMG_1033.JPG', style: styles.div2 },
    { img: '/pictures/IMG_1033.JPG', style: styles.div4 },
    { img: '/pictures/IMG_1033.JPG', style: styles.div6 },
  ],
  bottom: [
    { img: '/pictures/IMG_1033.JPG', style: styles.div7 },
    { img: '/pictures/IMG_1033.JPG', style: styles.div8 },
    { img: '/pictures/IMG_1033.JPG', style: styles.div9 },
  ],
};
