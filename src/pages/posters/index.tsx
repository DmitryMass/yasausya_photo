import { PosterItem } from '@/src/components/posters/PosterItem';
import { PostersContainer } from '@/src/components/posters/PostersContainer';
import Link from 'next/link';
import { FC } from 'react';

const Posters: FC = () => {
  return (
    <div>
      <Link
        className='absolute w-full text-center top-[30px] uppercase font-medium text-sand'
        href={'/'}
      >
        {/* <img src='/pictures/logo.jpg' alt='' /> */}
      </Link>
      <div className='max-w-[800px] w-full mx-auto px-2.5 pt-14 text-center mb-28'>
        <p className='text-sand mb-24 text-lg'>
          All posters are shipped through UPS or USPS. Customers are responsible
          for paying any additional customs/duties fees.{' '}
        </p>
        <h1 className='text-sand font-medium text-4xl tracking-wide'>
          Posters
        </h1>
      </div>
      <PostersContainer>
        {data.map(({ img, text }, idx) => (
          <PosterItem key={idx} img={img} text={text} />
        ))}
      </PostersContainer>
    </div>
  );
};

const data = [
  {
    img: '/pictures/posters/long-1.JPG',
    text: 'Some Data Text',
  },
  {
    img: '/pictures/posters/weight-1.JPG',
    text: 'Some Data Text',
  },
  {
    img: '/pictures/posters/long-2.JPG',
    text: 'Some Data Text',
  },

  {
    img: '/pictures/posters/long-3.JPG',
    text: 'Some Data Text',
  },
  {
    img: '/pictures/posters/weight-2.JPG',
    text: 'Some Data Text',
  },
  {
    img: '/pictures/posters/long-4.JPG',
    text: 'Some Data Text',
  },
];

export default Posters;
