import * as React from "react";
import MenuTable from "../../components/MenuTable";

export const Menu: React.FC = () => {
  return (
    <section id="menu" className="bg-secondary">
      <div className="m-auto w-11/12 max-w-default pt-20 lg:w-4/5">
        <h1 className="mb-12 font-minion text-5xl font-bold lg:mb-24 lg:text-title">
          Menu
        </h1>

        <MenuTable />
      </div>
    </section>
  );
};
