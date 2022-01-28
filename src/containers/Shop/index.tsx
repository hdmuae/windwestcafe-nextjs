import * as React from "react";
import Card from "../../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
const Shop: React.FC = () => {
  const [active, setActive] = React.useState(1);

  // install Swiper modules
  SwiperCore.use([Pagination]);
  return (
    <section id="shop" className="bg-primary py-32">
      <div className="max-w-default m-auto overflow-x-hidden">
        <h1 className="font-medium text-center text-white lg:text-title text-3xl lg:mb-12 mb-4">
          Shop Dersut
        </h1>
        <p className="m-auto w-4/5 md:w-3/5 lg:w-1/2 text-white text-center text-base mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          dignissim vel turpis a efficitur. Nam egestas at tellus eget auctor.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Praesent ultrices, odio sed tincidunt elementum,
          nisi arcu suscipit velit, at vehicula metus
        </p>

        <div className="flex justify-center mb-32">
          <button className="m-auto bg-white text-primary font-bold rounded p-2">
            SHOP NOW
          </button>
        </div>

        <Swiper
          style={{ overflow: "visible" }}
          initialSlide={1}
          slidesPerView={3}
          spaceBetween={20}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
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
              img="/images/product1.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              id={1}
              active={active}
              setActive={setActive}
              img="/images/product3.png"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              id={2}
              active={active}
              setActive={setActive}
              img="/images/product3.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              id={3}
              active={active}
              setActive={setActive}
              img="/images/product3.png"
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card
              id={4}
              active={active}
              setActive={setActive}
              img="/images/product3.png"
            />
          </SwiperSlide>
        </Swiper>

        <div className="flex justify-around">
          {/* 
          <Card
            id={0}
            active={active}
            setActive={setActive}
            img="/images/product1.png"
          />
          
          <Card
            id={1}
            active={active}
            setActive={setActive}
            img="/images/product2.png"
          />

          <Card
            id={2}
            active={active}
            setActive={setActive}
            img="/images/product3.png"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Shop;
