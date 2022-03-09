import * as React from "react";
import Image from "next/image";

export const About: React.FC = () => {
  return (
    <section className="relative h-[700px] bg-darkblue bg-[url('/images/Subtract.png')] bg-cover">
      {/* <Image
        className="-z-10"
        layout="fill"
        objectFit="cover"
        alt="coffee background"
        src="/images/Subtract.png"
      /> */}

      <div className="flex h-full w-4/5 max-w-default flex-col justify-center lg:mx-12 ground:mx-auto">
        <h1 className="pt-12 pb-12 font-minion text-4xl font-bold text-white lg:text-title">
          About us
        </h1>
        <p className="w-full font-nexa text-lg text-white lg:w-8/12">
          The west wind has brought real inspiration from those lands where the
          long-lasting coffee culture soars, saturated with history, heritage
          and inspiration. From where it all began and what we want to convey to
          the city dwellers. We have created a clear space for your imagination
          and inspiration in pure minimalistic design, with secret details that
          distinguish our brand. Our coffee made the astonishing trip to satisfy
          you and make your life better because you are worthy to drink the
          delicious coffee.
        </p>
      </div>
    </section>
  );
};
