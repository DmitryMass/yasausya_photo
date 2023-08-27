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
    img: '/pictures/collections/line2hl/main.webp',
    name: 'firstCollection',
  },
  {
    img: '/pictures/collections/line2hr/main.webp',
    name: 'secondCollection',
  },
  {
    img: '/pictures/collections/line3hr/main.webp',
    name: 'thirdCollection',
  },
  {
    img: '/pictures/collections/line3w/main.webp',
    name: 'fourthCollection',
  },
  {
    img: '/pictures/collections/line1w/main.webp',
    name: 'fifthCollection',
  },
];

export const morningCollection: CollectionsGroup = {
  top: [
    { img: '/pictures/collections/line2hl/line2h-1.webp', style: styles.div1 },
    { img: '/pictures/collections/line2hl/line2h-2.webp', style: styles.div2 },
    { img: '/pictures/collections/line2hl/line2h-3.webp', style: styles.div4 },
    { img: '/pictures/collections/line2hl/line2h-4.webp', style: styles.div6 },
  ],
  bottom: [
    { img: '/pictures/collections/line2hl/line2h-5.webp', style: styles.div7 },
    { img: '/pictures/collections/line2hl/main.webp', style: styles.div8 },
    { img: '/pictures/collections/line2hl/line2h-6.webp', style: styles.div9 },
  ],
};

export const secondCollection: CollectionsGroup = {
  top: [
    { img: '/pictures/collections/line2hr/main.webp', style: styles.div1 },
    { img: '/pictures/collections/line2hr/line2h-2.webp', style: styles.div2 },
    { img: '/pictures/collections/line2hr/line2h-3.webp', style: styles.div4 },
    { img: '/pictures/collections/line2hr/line2h-4.webp', style: styles.div6 },
  ],
  bottom: [
    { img: '/pictures/collections/line2hr/line2h-5.webp', style: styles.div7 },
    { img: '/pictures/collections/line2hr/line2h-6.webp', style: styles.div8 },
    { img: '/pictures/collections/line2hr/line2h-7.webp', style: styles.div9 },
  ],
};

export const thirdCollection: CollectionsGroup = {
  top: [
    { img: '/pictures/collections/line3hr/main.webp', style: styles.div1 },
    { img: '/pictures/collections/line3hr/line3h-2.webp', style: styles.div2 },
    { img: '/pictures/collections/line3hr/line3h-3.webp', style: styles.div4 },
    { img: '/pictures/collections/line3hr/line3h-4.webp', style: styles.div6 },
  ],
  bottom: [
    { img: '/pictures/collections/line3hr/line3h-5.webp', style: styles.div7 },
    { img: '/pictures/collections/line3hr/line3h-6.webp', style: styles.div8 },
    { img: '/pictures/collections/line3hr/line3h-7.webp', style: styles.div9 },
  ],
};
export const fourCollection: CollectionsGroup = {
  top: [
    { img: '/pictures/collections/line3w/line3w-1.webp', style: styles.div1 },
    { img: '/pictures/collections/line3w/line3w-2.webp', style: styles.div2 },
    { img: '/pictures/collections/line3w/line3w-3.webp', style: styles.div4 },
    { img: '/pictures/collections/line3w/line3w-4.webp', style: styles.div6 },
  ],
  bottom: [
    { img: '/pictures/collections/line3w/main.webp', style: styles.div7 },
    { img: '/pictures/collections/line3w/line3w-6.webp', style: styles.div8 },
    { img: '/pictures/collections/line3w/line3w-5.webp', style: styles.div9 },
  ],
};
export const fiveCollection: CollectionsGroup = {
  top: [
    { img: '/pictures/collections/line1w/line1w-1.webp', style: styles.div1 },
    { img: '/pictures/collections/line1w/line1w-2.webp', style: styles.div2 },
    { img: '/pictures/collections/line1w/line1w-3.webp', style: styles.div4 },
    { img: '/pictures/collections/line1w/line1w-4.webp', style: styles.div6 },
  ],
  bottom: [
    { img: '/pictures/collections/line1w/main.webp', style: styles.div7 },
    { img: '/pictures/collections/line1w/line1w-6.webp', style: styles.div8 },
    { img: '/pictures/collections/line1w/line1w-5.webp', style: styles.div9 },
  ],
};
