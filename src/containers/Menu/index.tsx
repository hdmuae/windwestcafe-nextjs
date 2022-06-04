import * as React from "react";
import MenuTable from "../../components/MenuTable";

export const Menu: React.FC = () => {
  return (
    <section id="menu" className="bg-secondary">
      <div className="m-auto w-11/12 max-w-default pt-20 lg:w-4/5">
        <h1 className="mb-12 font-minion text-5xl font-bold lg:text-title">
          Menu
        </h1>
          <p className="z-10 w-full font-nexa text-lg lg:w-8/12 mb-12">Wind West Cafe delivers way beyond the traditional
              coffee shop favorites. Full selection of classic coffee drinks and as well absolutely unique Dersut special
              coffee cocktails. Filter coffee appreciators we are ready to surprise you with our impeccable fine taste and
              innovations in the coffee world. You will also find your favorite teas, fresh juices and healthy smoothies.
              Our delicious dessert and handmade chocolate can make a blast of your taste buds together with your favorite
              drinks.
          </p>

        <MenuTable />
      </div>
    </section>
  );
};
