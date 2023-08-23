import React, { FC } from 'react';
import styles from './collections.module.css';
import Link from 'next/link';

export const CollectionsContainer: FC = () => {
  return (
    <>
      <Link
        className='absolute text-center  uppercase font-medium text-sand top-1 w-full mx-auto'
        href={'/'}
      >
        <img
          className='w-[100px] mx-auto'
          src='/pictures/logo.png'
          alt='logo'
        />
      </Link>
      <div className='my-24 text-center'>
        <h1 className='text-sand font-medium text-4xl tracking-wide'>
          Summer COllection
        </h1>
      </div>
      <div className={styles.container}>
        <div className={styles.div1}>
          <img
            className='w-full h-full object-cover'
            src='/pictures/posters/long-1.JPG'
            alt=''
          />
        </div>
        <div className={styles.div2}>
          <img
            className='w-full h-full object-cover'
            src='/pictures/posters/weight-1.JPG'
            alt=''
          />
        </div>
        <div className={styles.div4}>
          <img
            className='w-full h-full object-cover'
            src='/pictures/posters/weight-1.JPG'
            alt=''
          />
        </div>
        <div className={styles.div6}>
          <img
            className='w-full h-full object-cover'
            src='/pictures/posters/long-3.JPG'
            alt=''
          />
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.div7}>
          <img
            className='w-full h-full object-cover'
            src='/pictures/posters/weight-2.JPG'
            alt=''
          />
        </div>
        <div className={styles.div8}>
          <img
            className='w-full h-full object-cover'
            src='/pictures/posters/long-4.JPG'
            alt=''
          />
        </div>
        <div className={styles.div9}>
          <img
            className='w-full h-full object-cover'
            src='/pictures/posters/weight-1.JPG'
            alt=''
          />
        </div>
      </div>
    </>
  );
};
