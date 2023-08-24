import { PageTitle } from '@/src/components/ui/PageTitle';
import { FC, useState } from 'react';
import { FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Wallpapers: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState<any>(null);
  return (
    <div className="pb-10">
      <PageTitle
        text="All posters are shipped through UPS or USPS. Customers are responsible
          for paying any additional customs/duties fees."
        title="Wallpapers"
      />
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
