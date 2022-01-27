import * as React from "react";
import Image from "next/image";

const Menu: React.FC = () => {
  const [idx, setIdx] = React.useState(0);
  const [filter, setFilter] = React.useState(0);

  const Button: React.FC<{ name: string; id: number }> = ({ id, name }) => (
    <button
      className={`w-36 border border-white rounded py-2 ${
        filter === id ? "font-bold bg-white text-primary" : "text-white"
      }`}
      onClick={() => setFilter(id)}
    >
      {name}
    </button>
  );

  const MenuRecord: React.FC<{
    name: string;
    description: string;
    price: number;
  }> = ({ name, description, price }) => (
    <div className="flex-col md:flex-row flex justify-center border-black pt-8 pb-6">
      <p className="md:w-1/4 font-bold text-white">{name}</p>
      <p className="md:w-1/2 order-3 md:order-2 text-white opacity-50">
        {description}
      </p>
      <p className="mb-4 md:w-1/4 order-2 md:order-3 md:text-right font-bold text-white">
        {price} AED
      </p>
    </div>
  );

  return (
    <div>
      <div className="bg-white text-center text-primary text-3xl font-bold md:hidden block">
        <div className="w-1/2 m-auto flex justify-between">
          <Image
            className="cursor-pointer"
            width="10px"
            height="20px"
            src="/svg/left-arrow.svg"
            alt="left arrow"
          />
          <p>Coffee</p>
          <Image
            className="cursor-pointer"
            width="10px"
            height="20px"
            src="/svg/right-arrow.svg"
            alt="right arrow"
          />
        </div>
      </div>

      <div className="hidden md:flex w-3/4 m-auto justify-around my-4">
        <Button id={0} name="BREAKFAST" />
        <Button id={1} name="HOT DRINKS" />
        <Button id={2} name="COLD DRINKS" />
        <Button id={3} name="DESSERT" />
      </div>

      <div className="w-10/12 m-auto">
        <MenuRecord
          name="Cappuchino"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price={25}
        />
        <MenuRecord
          name="Hot Chocolate"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price={35}
        />
        <MenuRecord
          name="Latte"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor"
          price={19}
        />
        <MenuRecord
          name="Espresso"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price={15}
        />
        <MenuRecord
          name="Fappuchino"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor"
          price={25}
        />
      </div>

      <div className="flex justify-center">
        <button
          className={`h-3 w-3 rounded-full border border-white mt-6 mx-2 ${
            idx === 0 ? "bg-white" : ""
          }`}
          onClick={() => setIdx(0)}
        />
        <button
          className={`h-3 w-3 rounded-full border border-white mt-6 mx-2 ${
            idx === 1 ? "bg-white" : ""
          }`}
          onClick={() => setIdx(1)}
        />
        <button
          className={`h-3 w-3 rounded-full border border-white mt-6 mx-2 ${
            idx === 2 ? "bg-white" : ""
          }`}
          onClick={() => setIdx(2)}
        />
      </div>
    </div>
  );
};

export default Menu;
