import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
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
