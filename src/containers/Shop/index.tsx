import * as React from "react";
import ShopTable from "../../components/ShopTable";

const Shop: React.FC = () => {
  return (
    <section className="bg-lightbrown py-12">
      <div className="max-w-default m-auto">
        <h1 className="text-center text-4xl text-primary font-berlin mb-8">
          Shop Dersut
        </h1>
        <p className="w-1/2 m-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          dignissim vel turpis a efficitur. Nam egestas at tellus eget auctor.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Praesent ultrices, odio sed tincidunt elementum,
          nisi arcu suscipit velit, at vehicula metus
        </p>
        <ShopTable />
      </div>
    </section>
  );
};

export default Shop;
