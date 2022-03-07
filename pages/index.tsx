import type { NextPage } from "next";
import Head from "next/head";
import {
  Menu,
  Shop,
  Header,
  Gallery,
  About,
  ContactUs,
} from "../src/containers";

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
      <About />
      <Menu />
      <Shop />
      <Gallery />
      <ContactUs />
    </>
  );
};

export default Home;
