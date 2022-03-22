import * as React from "react";
import Image from "next/image";

export const Gallery: React.FC = () => {
  const data = [
    {
      id: 1,
      rounded: "rounded-3xl lg:rounded-none lg:rounded-tl-3xl",
    },
    {
      id: 3,
      rounded: "rounded-3xl lg:rounded-none",
    },
    {
      id: 5,
      rounded: "rounded-3xl lg:rounded-none lg:rounded-tr-3xl",
    },
    {
      id: 7,
      rounded: "rounded-3xl lg:rounded-none lg:rounded-bl-3xl",
    },
    {
      id: 9,
      rounded: "rounded-3xl lg:rounded-none",
    },
    {
      id: 13,
      rounded: "rounded-3xl lg:rounded-none lg:rounded-br-3xl",
    },
  ];

  return (
    <section
      id="gallery"
      className="m-auto w-11/12 max-w-default py-32 lg:w-4/5"
    >
      <h1 className="mb-8 font-minion text-5xl font-bold lg:mb-12 lg:text-title">
        Gallery
      </h1>

      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3 ">
        {data.map(({ id, rounded }, key) => (
          <div key={key} className="group overflow-hidden">
            <Image
              width="790"
              height="450"
              className={rounded}
              src={`/images/${id}.png`}
              alt="Coffee"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
