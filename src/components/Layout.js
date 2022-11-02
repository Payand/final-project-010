import React from "react";
import Header from "./HeaderComponents/Header";
import Footer from "./FooterComponents/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
