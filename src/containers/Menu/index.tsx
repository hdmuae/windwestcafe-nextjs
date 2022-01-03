import * as React from "react";
import MenuTable from "../../components/MenuTable";

const Menu: React.FC = () => {
  return (
    <section className="bg-lightbrown py-24">
      <div className="max-w-default m-auto">
        <h1 className="text-center text-4xl text-primary font-berlin mb-8">
          Our Menu
        </h1>
        <MenuTable />
      </div>
    </section>
  );
};

export default Menu;
