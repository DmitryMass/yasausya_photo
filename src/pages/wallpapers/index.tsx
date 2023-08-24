import { ContactMe } from '@/src/components/ui/ContactMe';
import { PageTitle } from '@/src/components/ui/PageTitle';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Wallpapers: FC = () => {
  const [isOpenInfo, setOpenInfo] = useState(false);
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
              <div className="relative">
                <button
                  className="bg-mainBgOpacity flex gap-1 items-center justify-center w-9 h-9 rounded-full absolute top-2 right-2 z-20 border border-slate-900"
                  onClick={() => setOpenInfo(!isOpenInfo)}
                >
                  {isOpenInfo ? (
                    <>
                      <img
                        className="custom-image animate-pulse"
                        src="/icons/close.svg"
                        alt="logo"
                      />
                    </>
                  ) : (
                    <>
                      <div className="w-1.5 max-w-[6px] min-w-[6px] h-1.5 rounded-full bg-sand animate-pulse"></div>
                      <div className="w-1.5 max-w-[6px] min-w-[6px] h-1.5 rounded-full bg-sand animate-pulse"></div>
                      <div className="w-1.5 max-w-[6px] min-w-[6px] h-1.5 rounded-full bg-sand animate-pulse"></div>
                    </>
                  )}
                </button>
                <img
                  className="object-contain"
                  src="/pictures/posters/long-1.JPG"
                />
                <div
                  className={clsx(
                    'bg-mainBgOpacity w-full flex flex-col justify-center gap-5 px-3 visible absolute top-0 left-0 h-full transition-all duration-700 ease-[cubic-bezier(0.68,-0.35,0.265,1.35)]',
                    !isOpenInfo
                      ? 'invisible opacity-0 h-0 -translate-y-full'
                      : null,
                  )}
                >
                  <p className="text-sm text-sand">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Harum alias sequi velit ratione.
                  </p>
                  <ContactMe />
                </div>
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
