import * as React from "react";

const Menu: React.FC = () => {
  const [idx, setIdx] = React.useState(0);
  const [filter, setFilter] = React.useState(0);

  return (
    <div>
      <div className="w-3/4 m-auto flex justify-around my-4">
        <button
          className={`bg-lightbrown font-bold border-2 border-primary text-primary rounded-md py-1 px-4 ${
            filter === 0 ? "bg-primary text-lightbrown" : ""
          }`}
          onClick={() => setFilter(0)}
        >
          BREAKFAST
        </button>
        <button
          className={`bg-lightbrown font-bold border-2 border-primary text-primary rounded-md py-1 px-4 ${
            filter === 1 ? "bg-primary text-lightbrown" : ""
          }`}
          onClick={() => setFilter(1)}
        >
          HOT DRINKS
        </button>
        <button
          className={`bg-lightbrown font-bold border-2 border-primary text-primary rounded-md py-1 px-4 ${
            filter === 2 ? "bg-primary text-lightbrown" : ""
          }`}
          onClick={() => setFilter(2)}
        >
          COLD DRINKS
        </button>
        <button
          className={`bg-lightbrown font-bold border-2 border-primary text-primary rounded-md py-1 px-4 ${
            filter === 3 ? "bg-primary text-lightbrown" : ""
          }`}
          onClick={() => setFilter(3)}
        >
          DESSERT
        </button>
      </div>

      <div className="w-10/12 m-auto">
        <div className="flex justify-around border-black border-b-2 py-4">
          <p className="font-bold text-primary">Cappuchino</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="font-bold text-primary">25 AED</p>
        </div>

        <div className="flex justify-around border-black border-b-2 py-4">
          <p className="font-bold text-primary">Cappuchino</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="font-bold text-primary">25 AED</p>
        </div>

        <div className="flex justify-around border-black border-b-2 py-4">
          <p className="font-bold text-primary">Cappuchino</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="font-bold text-primary">25 AED</p>
        </div>

        <div className="flex justify-around border-black border-b-2 py-4">
          <p className="font-bold text-primary">Cappuchino</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="font-bold text-primary">25 AED</p>
        </div>

        <div className="flex justify-around border-black border-b-2 py-4">
          <p className="font-bold text-primary">Cappuchino</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="font-bold text-primary">25 AED</p>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className={`h-3 w-3 rounded-full border border-primary mt-6 mx-2 ${
            idx === 0 ? "bg-primary" : ""
          }`}
          onClick={() => setIdx(0)}
        />
        <button
          className={`h-3 w-3 rounded-full border border-primary mt-6 mx-2 ${
            idx === 1 ? "bg-primary" : ""
          }`}
          onClick={() => setIdx(1)}
        />
        <button
          className={`h-3 w-3 rounded-full border border-primary mt-6 mx-2 ${
            idx === 2 ? "bg-primary" : ""
          }`}
          onClick={() => setIdx(2)}
        />
      </div>
    </div>
  );
};

export default Menu;
