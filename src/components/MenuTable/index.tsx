import * as React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Coffee from './coffee-menu';
import FilterCoffee from './filter-coffee-menu';
import SpecialCoctails from './special-coctails-menu';
import AvantchaTea from './avantcha-tea-menu';
import FreshJuices from './fresh-juices-menu';
import Smoothies from './smoothies-menu';
import Pastries from './pastries-menu';
import {useState} from "react";

const Menu: React.FC = () => {
  SwiperCore.use([Navigation, Pagination]);

  const [category, setCategory] = React.useState(0);

  const categories = ["FILTER COFFEE", "COFFEE", "COCKTAILS", "AVANTCHA TEA", "FRESH JUICES",
    "SMOOTHIES", "PASTRIES"];
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
  const SubMenuRecord: React.FC<{
    name: string;
    description: string;
    price: number;
  }> = ({ name, description, price }) => (
      <div className="mb-4 flex items-center justify-between border-b-2 border-gray-300 pb-2">
        <div className="flex w-3/4 flex-col justify-between">
          <p className="mb-2 font-minion text-lg font-bold pl-8">{name}</p>
          <p className="w-3/4 font-nexa text-sm font-light text-primary opacity-50 lg:w-full pl-8">
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
  const [active, setActive] = useState("COFFEE");
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="mr-12 hidden w-1/4 flex-col justify-around rounded-3xl bg-primary py-16 px-12 md:flex">
        <h1 onClick={() => setActive("COFFEE")} className="mb-0 cursor-pointer font-minion text-2xl font-bold text-white decoration-1 hover:underline lg:mb-8 lg:text-[32px]">
          COFFEE
        </h1>
        <h1 onClick={() => setActive("FILTER COFFEE")} className="text-underline mb-0 cursor-pointer font-minion text-2xl font-bold text-white decoration-1 hover:underline lg:mb-8 lg:text-[32px]">
          FILTER COFFEE
        </h1>
        <h1 onClick={() => setActive("COCKTAILS")} className="hover:text-underline mb-0 cursor-pointer font-minion text-2xl font-bold text-white decoration-1 hover:underline lg:mb-8 lg:text-[32px]">
          DERSUT SPECIAL COCKTAILS
        </h1>
        <h1 onClick={() => setActive("AVANtCHA TEA")} className="hover:text-underline mb-0 cursor-pointer font-minion text-2xl font-bold text-white decoration-1 hover:underline lg:mb-8 lg:text-[32px]">
          AVANTCHA TEA
        </h1>
        <h1 onClick={() => setActive("FRESH JUICES")} className="hover:text-underline mb-0 cursor-pointer font-minion text-2xl font-bold text-white decoration-1 hover:underline lg:mb-8 lg:text-[32px]">
          FRESH JUICES
        </h1>
        <h1 onClick={() => setActive("SMOOTHIES")} className="hover:text-underline mb-0 cursor-pointer font-minion text-2xl font-bold text-white decoration-1 hover:underline lg:mb-8 lg:text-[32px]">
          SMOOTHIES
        </h1>
        <h1 onClick={() => setActive("PASTRIES")} className="hover:text-underline mb-0 cursor-pointer font-minion text-2xl font-bold text-white decoration-1 hover:underline lg:mb-8 lg:text-[32px]">
          PASTRIES
        </h1>
        {/*<h1 className="hover:text-underline mb-0 cursor-pointer font-minion text-xl font-bold text-white decoration-1 hover:underline lg:mb-8 lg:text-[32px]">*/}
          {/*DESSERTS*/}
        {/*</h1>*/}
      </div>

      {/* <div className="mb-6 flex items-center justify-between rounded-3xl bg-primary py-4 px-6 md:hidden">
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
      </div> */}

      <div className="mb-6 md:hidden">
        <Swiper
          initialSlide={1}
          centeredSlides
          slidesPerView={2}
          className="mySwiper"
          slideToClickedSlide={true}
        >
          {categories.map((name, key) => (
            <SwiperSlide key={key}>
              {({ isActive }) => (
                <div
                  className={`mr-4 flex justify-center whitespace-nowrap rounded-2xl bg-primary py-4 font-minion font-bold text-white ${
                    isActive ? "bg-primary" : "bg-primary opacity-40"
                  }`}
                >
                  <p onClick={() => setActive(name)}>{name}</p>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

      </div>

      <div className="m-auto w-11/12 scrollable_menu">
        {active === "COFFEE" && <Coffee/>}
        {active === "FILTER COFFEE" && <FilterCoffee/>}
        {active === "COCKTAILS" && <SpecialCoctails/>}
        {active === "AVANTCHA TEA" && <AvantchaTea/>}
        {active === "FRESH JUICES" && <FreshJuices/>}
        {active === "SMOOTHIES" && <Smoothies/>}
        {active === "PASTRIES" && <Pastries/>}
      </div>
    </div>
  );
};
export default Menu;
