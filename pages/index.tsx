import type { NextPage } from "next";
import Menu from "../src/containers/Menu";
import Shop from "../src/containers/Shop";
import Header from "../src/containers/Header";
import Gallery from "../src/containers/Gallery";
import ContactUs from "../src/containers/ContactUs";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Menu />
      <Shop />
      <Gallery />
      <ContactUs />
    </>
  );
};

export default Home;
