import * as React from "react";
import Image from "next/image";

interface myProps {
  id: number;
  img: string;
  active: number;
}

const Card: React.FC<myProps> = ({ id, active, img }) => {
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
          width={active === id ? 210 : 150}
          height={active === id ? 350 : 240}
          alt="Product img"
          src={img}
        />
      </div>

      <div
        className={`${
          active === id ? "translate-y-4" : ""
        } flex flex-col items-center justify-center`}
      >
        <h2
          className={` ${
            active === id ? "text-white" : "text-primary"
          } mb-3 font-minion text-3xl font-bold`}
        >
          Cafe Milo
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
              AROMA 90%
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
              INTENSITY 80%
            </p>
          </div>
        </div>

        <p
          className={` ${
            active === id ? "text-white" : "text-primary"
          } mb-8 w-3/4 text-center font-light`}
        >
          100% Arabica with a light, delicate taste. 1000 g pack of beans.
        </p>

        <button
          className={`${
            active === id ? "bg-white" : "bg-primary text-white"
          } rounded-lg py-2 px-8 font-nexa`}
        >
          Shop now
        </button>
      </div>
    </div>
  );
};

export default Card;
