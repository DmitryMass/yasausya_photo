import { Logo } from '@/src/components/logo/Logo';
import { PosterItem } from '@/src/components/posters/PosterItem';
import { PosterModal } from '@/src/components/posters/PosterModal';
import { PostersContainer } from '@/src/components/posters/PostersContainer';
import { usePlaySound } from '@/src/hooks/usePlaySound';
import { FC, useState } from 'react';

const Posters: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPosterIndex, setSelectedPosterIndex] = useState(0);
  const { playSound } = usePlaySound();

  const openModal = (index: number) => {
    setSelectedPosterIndex(index);
    setModalIsOpen(true);
    playSound();
  };

  const closeModal = () => {
    setModalIsOpen(false);
    playSound();
  };

  return (
    <div>
      <Logo />
      <div className="max-w-[800px] w-full mx-auto px-2.5 pt-40 text-center mb-28">
        <p className="text-sand mb-24 text-lg">
          All posters are shipped through UPS or USPS. Customers are responsible
          for paying any additional customs/duties fees.{' '}
        </p>
        <h1 className="text-sand font-medium text-4xl tracking-wide">
          Posters
        </h1>
      </div>
      <PostersContainer>
        {data.map(({ img, text }, idx) => (
          <PosterItem
            onClick={() => openModal(idx)}
            key={idx}
            img={img}
            text={text}
          />
        ))}
      </PostersContainer>
      {modalIsOpen ? (
        <PosterModal
          onRequestClose={() => closeModal()}
          selectedPosterIndex={selectedPosterIndex}
        />
      ) : null}
    </div>
  );
};

export const data = [
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
