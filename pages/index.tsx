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
