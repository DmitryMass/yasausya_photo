import { data } from '@/src/pages/posters';
import type { FC } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export type PosterModalProps = {
  onRequestClose: () => void;
  selectedPosterIndex: number;
};

export const PosterModal: FC<PosterModalProps> = ({
  onRequestClose,
  selectedPosterIndex,
}) => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: selectedPosterIndex,
  };
  return (
    <div className="w-full h-full fixed z-20 bg-mainBg inset-0 flex justify-center items-center">
      <div className="max-w-[992px] w-full mx-auto relative max-h-screen overflow-y-auto overflow-x-hidden sm:overflow-visible">
        <button
          onClick={onRequestClose}
          className="absolute top-4 right-4 text-sand font-medium z-10"
        >
          CLOSE
        </button>
        <Slider {...settings}>
          {data.map(({ img, text }: any, idx: number) => (
            <div key={idx} className="relative">
              <div className="block gap-4 md:flex px-5 my-16">
                <div className="w-full p-4 border h-[400px] mb-4 md:ml-5">
                  <img
                    className="w-full h-full object-contain object-center mx-auto"
                    src={img}
                    alt="photo"
                  />
                </div>
                <div className="max-w-[500px] w-full flex flex-col justify-center items-start">
                  <h3 className="text-sand font-medium text-xl mb-3">
                    Morning picture photo jpg
                  </h3>
                  <p className="text-sand text-sm mb-10 w-11/12">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Suscipit provident eveniet non aspernatur, consectetur
                    cupiditate laborum asperiores, nulla culpa odio, praesentium
                    doloribus velit. Facere voluptatem aperiam illum, quam earum
                    perferendis?
                  </p>
                  <button className="text-sand">CONTACT ME</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
