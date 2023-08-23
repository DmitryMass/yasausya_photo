import Link from 'next/link';
import { FC } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Wallpapers: FC = () => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img
            className="w-full"
            src={`/pictures/posters/long-${i + 1}.JPG`}
            alt={`Thumbnail ${i + 1}`}
          />
        </a>
      );
    },
    dots: true,
    arrows: false,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="pb-10">
      <Link
        className="absolute text-center  uppercase font-medium text-sand top-1 w-full mx-auto"
        href={'/'}
      >
        <img
          className="w-[100px] mx-auto"
          src="/pictures/logo.png"
          alt="logo"
        />
      </Link>
      <h1 className="text-sand font-medium text-4xl tracking-wide mt-40 mb-16 text-center">
        Wallpapers
      </h1>
      <div className="grid grid-cols-3 gap-4 max-w-[992px] w-full mx-auto px-5 min-h-[80vh]">
        <div className="slick-container2">
          <Slider {...settings}>
            <div>
              <div>
                <img
                  className="object-contain w-full h-full"
                  src={'/pictures/posters/long-1.JPG'}
                  alt="Slide 1"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  className="object-contain w-full h-full"
                  src={'/pictures/posters/long-2.JPG'}
                  alt="Slide 1"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  className="object-contain w-full h-full"
                  src={'/pictures/posters/long-3.JPG'}
                  alt="Slide 1"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  className="object-contain w-full h-full"
                  src={'/pictures/posters/long-4.JPG'}
                  alt="Slide 1"
                />
              </div>
            </div>
          </Slider>
        </div>
        <div className="slick-container2">
          <Slider {...settings}>
            <div>
              <div>
                <img
                  className="object-contain w-full h-full"
                  src={'/pictures/posters/long-1.JPG'}
                  alt="Slide 1"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  className="object-contain w-full h-full"
                  src={'/pictures/posters/long-2.JPG'}
                  alt="Slide 1"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  className="object-contain w-full h-full"
                  src={'/pictures/posters/long-3.JPG'}
                  alt="Slide 1"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  className="object-contain w-full h-full"
                  src={'/pictures/posters/long-4.JPG'}
                  alt="Slide 1"
                />
              </div>
            </div>
          </Slider>
        </div>
        <div className="slick-container2">
          <Slider {...settings}>
            <div>
              <div>
                <img
                  className="object-contain w-full h-full"
                  src={'/pictures/posters/long-1.JPG'}
                  alt="Slide 1"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  className="object-contain w-full h-full"
                  src={'/pictures/posters/long-2.JPG'}
                  alt="Slide 1"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  className="object-contain w-full h-full"
                  src={'/pictures/posters/long-3.JPG'}
                  alt="Slide 1"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  className="object-contain w-full h-full"
                  src={'/pictures/posters/long-4.JPG'}
                  alt="Slide 1"
                />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Wallpapers;
