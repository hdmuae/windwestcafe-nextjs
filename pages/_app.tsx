import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import "../src/components/Card/index";
import Layout from "../src/components/layout";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
