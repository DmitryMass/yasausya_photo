import Link from 'next/link';
import { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs } from 'swiper/modules';

const Wallpapers: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState<any>(null);
  return (
    <div className="pb-10">
      <Link
        className="absolute text-center uppercase font-medium text-sand top-1 w-full mx-auto"
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
      <div className="grid grid-cols-2 gap-4 max-w-[992px] w-full mx-auto px-5 place-items-center pt-16 border-t border-sand">
        <div className="flex justify-center items-center flex-col max-w-[300px]">
          <Swiper
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div className="relative hover:before:w-full hover:before:h-full hover:before:bg-mainBg hover:before:bg-opacity-90 hover:before:absolute hover:before:inset-0 hover:before:opacity-100 before:opacity-0 before:transition-all before:duration-300 hover:before:transition-all hover:before:duration-300 before:translate-y-full hover:before:translate-y-0">
                <img
                  className="object-contain"
                  src="/pictures/posters/long-1.JPG"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="object-contain"
                  src="/pictures/posters/long-2.JPG"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="object-contain"
                  src="/pictures/posters/long-3.JPG"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="object-contain"
                  src="/pictures/posters/long-4.JPG"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="object-contain"
                src="/pictures/posters/long-1.JPG"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-contain"
                src="/pictures/posters/long-2.JPG"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-contain"
                src="/pictures/posters/long-3.JPG"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-contain"
                src="/pictures/posters/long-4.JPG"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex justify-center items-center flex-col max-w-[300px]">
          <Swiper
            spaceBetween={10}
            thumbs={{
              swiper:
                thumbsSwiper2 && !thumbsSwiper2.destroyed
                  ? thumbsSwiper2
                  : null,
            }}
            modules={[FreeMode, Thumbs]}
            className="mySwiper4"
          >
            <SwiperSlide>
              <div>
                <img
                  className="object-contain"
                  src="/pictures/posters/long-1.JPG"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="object-contain"
                  src="/pictures/posters/long-2.JPG"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="object-contain"
                  src="/pictures/posters/long-3.JPG"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="object-contain"
                  src="/pictures/posters/long-4.JPG"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper2}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className="mySwiper3"
          >
            <SwiperSlide>
              <img
                className="object-contain"
                src="/pictures/posters/long-1.JPG"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-contain"
                src="/pictures/posters/long-2.JPG"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-contain"
                src="/pictures/posters/long-3.JPG"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="object-contain"
                src="/pictures/posters/long-4.JPG"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Wallpapers;

// const settings = {
//     customPaging: function (i: number) {
//       return (
//         <a>
//           <img
//             className="w-full"
//             src={`/pictures/posters/long-${i + 1}.JPG`}
//             alt={`Thumbnail ${i + 1}`}
//           />
//         </a>
//       );
//     },
//     dots: true,
//     arrows: false,
//     dotsClass: 'slick-dots slick-thumb',
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

{
  /* <div className="slick-container2">
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
          <Slider {...settings2}>
            <div>
              <div>
                <img
                  className="object-contain w-full h-full"
                  src={'/pictures/posters/weight-1.JPG'}
                  alt="Slide 1"
                />
              </div>
            </div>
            <div>
              <div>
                <img
                  className="object-contain w-full h-full"
                  src={'/pictures/posters/weight-2.JPG'}
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
        </div> */
}
