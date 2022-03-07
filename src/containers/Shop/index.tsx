import * as React from "react";
import Card from "../../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

export const Shop: React.FC = () => {
  const [active, setActive] = React.useState(1);

  // install Swiper modules
  SwiperCore.use([Navigation]);
  return (
    <section id="shop" className="m-auto mt-20 w-4/5 max-w-default">
      <div className="overflow-x-hidden pt-8">
        <h1 className="pb-28 font-minion text-5xl font-bold lg:text-title">
          Shop Dersut
        </h1>

        <Swiper
          style={{ overflow: "visible" }}
          initialSlide={2}
          slidesPerView={3}
          centeredSlides={true}
          navigation={true}
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
          <SwiperSlide>
            <Card
              id={0}
              active={active}
              setActive={setActive}
              img="/images/image_coffee.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              id={1}
              active={active}
              setActive={setActive}
              img="/images/image_coffee.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              id={2}
              active={active}
              setActive={setActive}
              img="/images/image_coffee.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              id={3}
              active={active}
              setActive={setActive}
              img="/images/image_coffee.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              id={4}
              active={active}
              setActive={setActive}
              img="/images/image_coffee.png"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
