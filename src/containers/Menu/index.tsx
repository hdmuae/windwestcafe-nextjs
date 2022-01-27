import * as React from "react";
import MenuTable from "../../components/MenuTable";

const Menu: React.FC = () => {
  return (
    <section
      id="menu"
      className="bg-gradient-to-b from-darkblue to-primary py-32"
    >
      <div className="max-w-default m-auto">
        <h1 className="lg:text-title text-3xl text-center text-white mb-8">
          Our Menu
        </h1>
        <MenuTable />
      </div>
    </section>
  );
};

export default Menu;
