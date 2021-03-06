import * as React from "react";
import Image from "next/image";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative h-fit bg-[url('/images/mobile/coffee.png')] lg:h-[850px] lg:bg-darkblue lg:bg-[url('/images/coffee.png')] bg-cover bg-no-repeat bg-center lg:bg-top"
    >
      {/* <Image
        className="z-0"
        layout="fill"
        alt="coffee background"
        src="/images/coffee.png"
      /> */}

      <div className="flex h-full w-4/5 max-w-default flex-col justify-center lg:mx-12 ground:mx-auto">
        <h1 className="z-10 pt-12 pb-12 font-minion text-4xl font-bold text-white lg:text-title">
          About us
        </h1>
        <p className="z-10 w-full font-nexa text-lg text-white lg:w-8/12 mb-6">
          Welcome to the Wind West Cafe!
        </p>
        <p className="z-10 w-full font-nexa text-lg text-white lg:w-8/12 mb-6">
          The west wind has brought real inspiration from those lands where the long-lasting coffee culture soars, saturated with history, 
          heritage and inspiration. From where it all began and what we want to convey to the city dwellers.
        </p>
        <p className="z-10 w-full font-nexa text-lg text-white lg:w-8/12 mb-6 chidden">
          We have created a clear space for your imagination and inspiration in pure minimalistic design, with secret details that distinguish 
          our brand. Our coffee made the astonishing trip to satisfy you and make your life better because you are worthy to drink the delicious coffee.
        </p>
        <p className="z-10 w-full font-nexa text-lg text-white lg:w-8/12 mb-6 chidden">
          In your cup -  first-class quality coffee beans — Dersut, originally from the picturesque city of Conegliano, Treviso, Italy. Many varieties 
          are even Espresso Italiano certified and have won at least one Gold Medal at the International Coffee Tasting, Dersut also became a member of 
          SCA (Speciality Coffee Association), a world association that promotes quality coffee culture and specialty coffees. The pleasure of excellent 
          Italian coffee is guaranteed by Dersut quality.
        </p>
        <p className="z-10 w-full font-nexa text-lg text-white lg:w-8/12 mb-6 chidden">
          We are the first coffee shop in Dubai where you can try Dersut espresso and other traditional Italian coffee drinks in company with your 
          favorite desserts and handmade chocolate. Moreover we are official distributor of Dersut in UAE, the selection of products you can find 
          in our <a href="https://www.dersut.ae/collections" target="_blank" rel="noreferrer" className="underline">Shop</a>.
        </p>
        <button className="bg-white rounded-lg py-2 px-8 font-nexa lg:w-8/12 mb-12 read_more hidden_text">Read More</button>
      </div>
      <script type="text/javascript" src="/scripts/custom_scripts.js"></script>
    </section>
  );
};
