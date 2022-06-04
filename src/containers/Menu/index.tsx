import * as React from "react";
import MenuTable from "../../components/MenuTable";

export const Menu: React.FC = () => {
  return (
    <section id="menu" className="bg-secondary">
      <div className="m-auto w-11/12 max-w-default pt-20 lg:w-4/5">
        <h1 className="mb-12 font-minion text-5xl font-bold lg:text-title">
          Menu
        </h1>
          <p className="z-10 w-full font-nexa text-lg lg:w-8/12 mb-12">The west wind has brought real
              inspiration from those lands where the long-lasting coffee culture soars, saturated with history, heritage
              and inspiration. From where it all began and what we want to convey to the city dwellers.</p>

        <MenuTable />
      </div>
    </section>
  );
};
