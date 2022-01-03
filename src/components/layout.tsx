// components/layout.js
import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <>
      <div className="bg-darkbrown">
        <Navbar />
      </div>
      <main>{children}</main>
      <Footer />
    </>
  );
}
