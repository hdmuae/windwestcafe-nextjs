import * as React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.svg";
import Card from "./card";

const LogoCard: React.FC = () => (
  <div className="w-1/2 bg-darkbrown flex justify-center items-center">
    <Image src={Logo} alt="Wind West Cafe Logo" />
  </div>
);

const ShopTable: React.FC = () => {
  return (
    <div className="flex flex-wrap my-8">
      <LogoCard />
      <Card
        title="ORO"
        description="A perfect morning blend, harmonious yet rich in body and flavour. Its
          aroma brings floral, fruity notes. Quality Certified Italian Espresso
          and Gold Medal International Coffee Tasting 2014 – 2018. 1000 g and
          3000 g packs of beans."
      />

      <Card
        title="SUBLIME"
        description="A blend of Quality Certified Italian Espresso beans with lots of body
        and floral, fruity notes. 1000 g pack of beans."
      />

      <LogoCard />
      <LogoCard />

      <Card
        title="NON PLUS ULTRA"
        description="A blend of the most precious, select single varietals of 100% natural
        washed Arabica coffee, with a chocolate and toasted bread aftertaste,
        and floral and citrus notes. 1000 g pack of beans. Vincitore del
        premio GOLD MEDAL 2016"
      />
    </div>
  );
};
export default ShopTable;
