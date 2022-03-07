// components/layout.js
import * as React from "react";
import Footer from "./Footer";

export default function Layout({ children }: any) {
  return (
    <React.Fragment>
      {children}
      {/* <Footer /> */}
    </React.Fragment>
  );
}
