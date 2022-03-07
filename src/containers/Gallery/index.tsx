import * as React from "react";
import Image from "next/image";

export const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="m-auto w-4/5 max-w-default py-32">
      <h1 className="mb-8 font-minion text-5xl font-bold lg:mb-12 lg:text-title">
        Gallery
      </h1>

      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3 ">
        <div className="group overflow-hidden">
          <Image
            width="790"
            height="450"
            className="object-fit transition-transform duration-500 ease-in-out group-hover:scale-150 md:rounded-tl-3xl"
            src="/images/1.png"
            alt="Coffee"
          />
        </div>

        <div className="group overflow-hidden">
          <Image
            width="790"
            height="450"
            className="object-fit transition-transform duration-500 ease-in-out group-hover:scale-150"
            src="/images/3.png"
            alt="Coffee"
          />
        </div>

        <div className="group overflow-hidden">
          <Image
            width="790"
            height="450"
            className="object-fit transition-transform duration-500 ease-in-out group-hover:scale-150 md:rounded-tr-3xl"
            src="/images/5.png"
            alt="Coffee"
          />
        </div>

        <div className="group overflow-hidden">
          <Image
            width="790"
            height="450"
            className="object-fit transition-transform duration-500 ease-in-out group-hover:scale-150 md:rounded-bl-3xl"
            src="/images/7.png"
            alt="Coffee"
          />
        </div>

        <div className="group overflow-hidden">
          <Image
            width="790"
            height="450"
            className="object-fit transition-transform duration-500 ease-in-out group-hover:scale-150"
            src="/images/9.png"
            alt="Coffee"
          />
        </div>

        <div className="group overflow-hidden">
          <Image
            width="790"
            height="450"
            className="object-fit transition-transform duration-500 ease-in-out group-hover:scale-150 md:rounded-br-3xl"
            src="/images/13.png"
            alt="Coffee"
          />
        </div>
      </div>
    </section>
  );
};
