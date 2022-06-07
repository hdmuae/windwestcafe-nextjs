import * as React from "react";
import Image from "next/image";

interface myProps {
  id: number;
  img: string;
  active: number;
  name: string;
  link: string;
  aroma: string;
  intensity: string;
  description: string;
}

const Card: React.FC<myProps> = ({ id, active, img, name, link, aroma, intensity, description }) => {
  return (
    <div
      className={`${
        active === id
          ? "h-[580px] w-full bg-primary md:h-[550px]"
          : "m-auto h-[570px] w-11/12 bg-white md:h-[500px]"
      } relative flex cursor-pointer flex-col items-center justify-center rounded-full transition-all duration-1000`}
    >
      <div className="translate-y-4 duration-500">
        <Image
          width={active === id ? 350 : 250}
          height={active === id ? 350 : 250}
          alt="Product img"
          src={img}
        />
      </div>

      <div
        className={`${
          active === id ? "translate-y-4" : ""
        } flex flex-col items-center px-5 justify-center`}
      >
        <h2
          className={` ${
            active === id ? "text-white" : "text-primary"
          } mb-3 font-minion text-xl text-center md:text-2xl font-bold`}
        >
          {name}
        </h2>

        <div className="mb-2 flex flex-col md:flex-row">
          <div className="mr-2 flex">
            <Image
              width={20}
              height={20}
              src="/svg/coffee-bean.svg"
              alt="coffee bean icon"
            />
            <p
              className={` ${
                active === id ? "text-white" : "text-primary"
              } ml-2 font-light`}
            >
              AROMA {aroma}%
            </p>
          </div>

          <div className="flex">
            <Image
              width={20}
              height={20}
              src="/svg/coffee-bean.svg"
              alt="coffee bean icon"
            />
            <p
              className={` ${
                active === id ? "text-white" : "text-primary"
              } ml-2 font-light`}
            >
              INTENSITY {intensity}%
            </p>
          </div>
        </div>

        <p
          className={` ${
            active === id ? "text-white" : "text-primary"
          } mb-8 w-full text-center md:w-3/4 font-light`}
        >
          {description}
        </p>
        <a href={link} target="_blank" rel="noreferrer">
        <button
          className={`${
            active === id ? "bg-white" : "bg-primary text-white"
          } rounded-lg py-2 px-8 font-nexa`}
        >
          Shop now
        </button>
        </a>
      </div>
    </div>
  );
};

export default Card;
