import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}
