import * as React from "react";
import Image from "next/image";

interface myProps {
  id: number;
  img: string;
  active: number;
  setActive: (x: number) => void;
}

const Card: React.FC<myProps> = ({ id, active, setActive, img }) => {
  return (
    <div
      onClick={() => setActive(active === id ? -1 : id)}
      className={`${
        active === id ? "h-cardfull w-full" : "w-4/5 m-auto h-card opacity-50"
      } relative flex flex-col justify-center items-center bg-white rounded-full cursor-pointer transition-all duration-1000`}
    >
      <div className={`${active === id ? "translate-y-4" : ""} duration-500`}>
        <Image
          width={active === id ? 145 : 84}
          height={active === id ? 314 : 144}
          alt="Product img"
          src={img}
        />
      </div>

      <div
        className={`${
          active === id ? "translate-y-4" : ""
        } flex flex-col justify-center items-center`}
      >
        <h2 className="text-primary text-3xl mb-3">VERDE</h2>
        <p
          className={` ${
            active === id ? "order-2" : "hidden"
          } w-3/4 font-light text-center text-primary mb-8`}
        >
          100% Arabica with a light, delicate taste. 1000 g pack of beans.
        </p>

        <p className="font-light text-primary pb-2">
          AROMA <span className={` ${active === id ? "hidden" : ""}`}>90%</span>
        </p>
        <div
          className={` ${
            active === id ? "" : "hidden"
          } w-1/2 flex justify-between pb-2`}
        >
          {[1, 2, 3, 4, 5].map((ele, key) => (
            <Image
              key={key}
              width={30}
              height={30}
              src="/svg/coffee-full.svg"
              alt="coffee bean icon"
            />
          ))}
        </div>
        <p className="font-light text-primary py-2">
          INTENSITY
          <span className={` ${active === id ? "hidden" : ""}`}> 80%</span>
        </p>
        <div
          className={` ${
            active === id ? "" : "hidden"
          } w-1/2 flex justify-between`}
        >
          {[1, 2, 3, 4, 5].map((ele, key) => (
            <Image
              key={key}
              width={30}
              height={30}
              src="/svg/coffee-full.svg"
              alt="coffee bean icon"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
