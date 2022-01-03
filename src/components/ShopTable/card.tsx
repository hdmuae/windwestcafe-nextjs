import * as React from "react";
import Image from "next/image";
import CoffeeBean from "../../../public/images/Coffeebean.svg";
import FilledCoffeeBean from "../../../public/images/FilledCoffeeBean.svg";

interface myProps {
  title: string;
  description: string;
}

const Card: React.FC<myProps> = ({ title, description }) => {
  return (
    <div className="h-card w-1/2 py-12 bg-secondary flex flex-col items-center justify-between">
      <h2 className="text-white text-xl font-berlin font-bold pb-4">{title}</h2>
      <p className="text-white pb-4 w-7/12">{description}</p>
      <p className="text-white pb-2">Aroma</p>
      <div className="w-5/12 flex justify-between pb-4">
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={CoffeeBean} alt="Coffee bean" />
      </div>

      <p className="text-white pb-2">Intensity</p>
      <div className="w-5/12 flex justify-between">
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={FilledCoffeeBean} alt="Coffee bean" />
        <Image src={CoffeeBean} alt="Coffee bean" />
      </div>
      <button className="text-primary font-berlin font-bold bg-white rounded-md shadow-md mt-6 p-2">
        SHOP NOW
      </button>
    </div>
  );
};

export default Card;
