import * as React from "react";
import Card from "../../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

export const Shop: React.FC = () => {
  // install Swiper modules
  SwiperCore.use([Navigation, Pagination]);

  return (
    <section id="shop" className="m-auto mt-20 w-11/12 max-w-default lg:w-4/5">
      <div className="overflow-x-hidden pt-8">
        <h1 className="pb-28 font-minion text-5xl font-bold lg:text-title">
          Shop Dersut
        </h1>

        {/* <button
          className="mb-40 border border-blue-400 py-3 px-12"
          // @ts-ignore
          onClick={() => mySwiper.slideNext()}
        >
          Slide to the next slide
        </button>
        <button
          className="border border-blue-400 py-3 px-12"
          // @ts-ignore
          onClick={() => mySwiper.slidePrev()}
        >
          Slide to the next slide
        </button> */}
        <Swiper
          style={{ overflow: "visible" }}
          initialSlide={2}
          slidesPerView={3}
          centeredSlides={true}
          navigation={true}
          pagination={true}
          slideToClickedSlide={true}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="mySwiper mb-20"
        >
          {[0, 1, 2, 3, 4].map((idx, key) => (
            <SwiperSlide key={key}>
              {({ isActive }) => (
                <Card
                  id={idx}
                  active={isActive ? idx : -1}
                  img="/images/image_coffee.png"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
