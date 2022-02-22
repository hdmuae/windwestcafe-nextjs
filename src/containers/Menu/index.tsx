import * as React from "react";
import MenuTable from "../../components/MenuTable";

const Menu: React.FC = () => {
  return (
    <section
      id="menu"
      className="bg-gradient-to-b from-darkblue to-primary py-32"
    >
      <div className="max-w-default m-auto">
        <h1 className="lg:text-title text-3xl text-center text-white mb-12">
          Our Menu
        </h1>
        <p className="w-4/5 m-auto font-light text-center text-white mb-12">
          Wind West Cafe delivers way beyond the traditional coffee shop
          favorites. Full selection of classic coffee drinks and as well
          absolutely unique Dersut special coffee cocktails. Filter coffee
          appreciators we are ready to surprise you with our impeccable fine
          taste and innovations in the coffee world. You will also find your
          favorite teas, fresh juices and healthy smoothies. Our delicious
          dessert and handmade chocolate can make a blast of your taste buds
          together with your favorite drinks.
        </p>
        <MenuTable />
      </div>
    </section>
  );
};

export default Menu;
