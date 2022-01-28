import type { NextPage } from "next";
import Head from "next/head";
import Menu from "../src/containers/Menu";
import Shop from "../src/containers/Shop";
import Header from "../src/containers/Header";
import Gallery from "../src/containers/Gallery";
import ContactUs from "../src/containers/ContactUs";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wind West Cafe</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Wind West Cafe profile, About, Menu, Shop, Contact"
        />
      </Head>
      <Header />
      <Menu />
      <Shop />
      <Gallery />
      <ContactUs />
    </>
  );
};

export default Home;
