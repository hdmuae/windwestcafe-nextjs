import * as React from "react";
import Image from "next/image";

const Menu: React.FC = () => {
  const MenuRecord: React.FC<{
    name: string;
    description: string;
    price: number;
  }> = ({ name, description, price }) => (
    <div className="mb-4 border-b-2 border-gray-300 pb-2">
      <div className="flex justify-between">
        <p className="mb-2 font-minion text-2xl font-bold">{name}</p>
        <p className="font-minion text-2xl font-bold md:w-1/4 md:text-right">
          {price} AED
        </p>
      </div>
      <p className="font-nexa text-sm font-light text-primary opacity-50">
        {description}
      </p>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="mr-12 hidden h-[400px] w-1/4 flex-col justify-around rounded-3xl bg-primary py-16 px-12 md:flex">
        <h1 className="mb-0 cursor-pointer font-minion text-xl font-bold text-white decoration-1 hover:underline lg:mb-8 lg:text-[32px]">
          BREAKFAST
        </h1>
        <h1 className="text-underline mb-0 cursor-pointer font-minion text-xl font-bold text-white decoration-1 hover:underline lg:mb-8 lg:text-[32px]">
          HOT DRINKS
        </h1>
        <h1 className="hover:text-underline mb-0 cursor-pointer font-minion text-xl font-bold text-white decoration-1 hover:underline lg:mb-8 lg:text-[32px]">
          DESSERT
        </h1>
        <h1 className="hover:text-underline cursor-pointer font-minion text-xl font-bold text-white decoration-1 hover:underline lg:text-[32px]">
          COLD DRINKS
        </h1>
      </div>

      <div className="mb-6 flex items-center justify-between rounded-3xl bg-primary py-4 px-6 md:hidden">
        <div>
          <Image
            src="/svg/left-arrow.svg"
            width={20}
            height={20}
            alt="left arrow"
          />
        </div>

        <div>
          <Image
            src="/svg/right-arrow.svg"
            width={20}
            height={20}
            alt="right arrow"
          />
        </div>
      </div>

      <div className="m-auto w-10/12">
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
    </div>
  );
};

export default Menu;
