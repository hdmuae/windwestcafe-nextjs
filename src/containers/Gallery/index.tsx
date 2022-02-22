import * as React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import Card from "../../components/Card";

const Gallery: React.FC = () => {
  const [active, setActive] = React.useState(0);
  SwiperCore.use([EffectCoverflow, Pagination]);

  return (
    <section id="gallery" className="bg-primary py-32">
      <div className="max-w-default m-auto">
        <h1 className="text-center text-title text-white lg:mb-12 mb-8">
          Gallery
        </h1>
        <div>
          <Swiper
            // effect={"coverflow"}
            initialSlide={1}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={20}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <Image
                width="400px"
                height="400px"
                className="h-60 w-full rounded-full"
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width="400px"
                height="400px"
                className="h-60 w-full rounded-full"
                src="https://swiperjs.com/demos/images/nature-3.jpg"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width="400px"
                height="400px"
                className="h-60 w-full rounded-full"
                src="https://swiperjs.com/demos/images/nature-4.jpg"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width="400px"
                height="400px"
                className="h-60 w-full rounded-full"
                src="https://swiperjs.com/demos/images/nature-5.jpg"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width="400px"
                height="400px"
                className="h-60 w-full rounded-full"
                src="https://swiperjs.com/demos/images/nature-6.jpg"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width="400px"
                height="400px"
                className="h-60 w-full rounded-full"
                src="https://swiperjs.com/demos/images/nature-7.jpg"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width="400px"
                height="400px"
                className="h-60 w-full rounded-full"
                src="https://swiperjs.com/demos/images/nature-8.jpg"
                alt="img"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
