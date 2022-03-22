import * as React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

const Menu: React.FC = () => {
  SwiperCore.use([Navigation, Pagination]);

  const [category, setCategory] = React.useState(0);

  const categories = ["BREAKFAST", "HOT DRINKS", "DESSERT", "COLD DRINKS"];
  const editCategory = (change: boolean) => {
    if (change) {
      category === 3 ? setCategory(0) : setCategory(category + 1);
    } else {
      category === 0 ? setCategory(3) : setCategory(category - 1);
    }
  };

  const MenuRecord: React.FC<{
    name: string;
    description: string;
    price: number;
  }> = ({ name, description, price }) => (
    <div className="mb-4 flex items-center justify-between border-b-2 border-gray-300 pb-2">
      <div className="flex w-3/4 flex-col justify-between">
        <p className="mb-2 font-minion text-2xl font-bold">{name}</p>
        <p className="w-3/4 font-nexa text-sm font-light text-primary opacity-50 lg:w-full">
          {description}
        </p>
      </div>
      <div className="w-1/4">
        <p className="font-minion text-2xl font-bold md:text-right">
          {price} AED
        </p>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="mr-12 hidden h-[400px] w-1/4 flex-col justify-around rounded-3xl bg-primary py-16 px-12 md:flex">
        <h1 className="mb-0 cursor-pointer font-minion text-xl font-bold text-white decoration-1 hover:underline lg:mb-8 lg:text-[32px]">
          BREAKFAST
        </h1>
        <h1 className="text-underline mb-0 cursor-pointer font-minion text-xl font-bold text-white decoration-1 hover:underline lg:mb-8 lg:text-[32px]">
          HOT DRINKS
        </h1>
        <h1 className="hover:text-underline mb-0 cursor-pointer font-minion text-xl font-bold text-white decoration-1 hover:underline lg:mb-8 lg:text-[32px]">
          DESSERT
        </h1>
        <h1 className="hover:text-underline cursor-pointer font-minion text-xl font-bold text-white decoration-1 hover:underline lg:text-[32px]">
          COLD DRINKS
        </h1>
      </div>

      <div className="mb-6 flex items-center justify-between rounded-3xl bg-primary py-4 px-6 md:hidden">
        <div>
          <Image
            src="/svg/left-arrow.svg"
            width={20}
            height={20}
            alt="left arrow"
            onClick={() => editCategory(false)}
          />
        </div>

        <h1 className="font-minion text-xl font-bold text-white">
          {categories[category]}
        </h1>
        <div>
          <Image
            src="/svg/right-arrow.svg"
            width={20}
            height={20}
            alt="right arrow"
            onClick={() => editCategory(true)}
          />
        </div>
      </div>

      {/* <div className="mb-6 md:hidden">
        <Swiper
          initialSlide={1}
          slidesPerView={2}
          className="mySwiper"
          slideToClickedSlide={true}
        >
          {categories.map((name, key) => (
            <SwiperSlide key={key}>
              {({ isActive }) => (
                <div
                  className={`mr-4 flex justify-center whitespace-nowrap rounded-3xl bg-primary py-4 font-minion font-bold text-white ${
                    isActive ? "" : "opacity-40"
                  }`}
                >
                  <p>{name}</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div> */}

      <div className="m-auto w-11/12">
        <MenuRecord
          name="Cappuchino"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price={25}
        />
        <MenuRecord
          name="Hot Chocolate"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price={35}
        />
        <MenuRecord
          name="Latte"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor"
          price={19}
        />
        <MenuRecord
          name="Espresso"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price={15}
        />
        <MenuRecord
          name="Fappuchino"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor"
          price={25}
        />
      </div>
    </div>
  );
};

export default Menu;
