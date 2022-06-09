import type { NextPage } from "next";
import Head from "next/head";
import dynamic from 'next/dynamic'

const Shop = dynamic(() => import('../src/containers/Shop'), { ssr: false });
import {
  Menu,
  //Shop,
  Header,
  Gallery,
  About,
  ContactUs,
} from "../src/containers";
import Footer from "../src/components/Footer";
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
      <div className="block lg:hidden">
        <Footer dark={true} />
      </div>
    </>
  );
};

export default Home;
