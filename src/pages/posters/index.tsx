import { PosterItem } from '@/src/components/posters/PosterItem';
import { PosterModal } from '@/src/components/posters/PosterModal';
import { PostersContainer } from '@/src/components/posters/PostersContainer';
import { PageTitle } from '@/src/components/ui/PageTitle';
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
      <PageTitle
        title="Posters"
        text="All posters are shipped through UPS or USPS. Customers are responsible
          for paying any additional customs/duties fees."
      />
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
