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
        <h1 className="text-center text-title text-white  mb-8">Gallery</h1>
        <div>
          <Swiper
            // effect={"coverflow"}
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
          >
            <SwiperSlide>
              <img
                className="rounded-full"
                src="https://swiperjs.com/demos/images/nature-2.jpg"
                alt="img"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-full w-400 z-10 absolute"
                src="https://swiperjs.com/demos/images/nature-3.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-full"
                src="https://swiperjs.com/demos/images/nature-4.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-full"
                src="https://swiperjs.com/demos/images/nature-5.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-full"
                src="https://swiperjs.com/demos/images/nature-6.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-full"
                src="https://swiperjs.com/demos/images/nature-7.jpg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-full"
                src="https://swiperjs.com/demos/images/nature-8.jpg"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
