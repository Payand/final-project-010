import React from "react";
import Header from "./HeaderComponents/Header";
import Footer from "./FooterComponents/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
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
        <Toaster
          toastOptions={{
            className: "toaster",
            duration: 5000,
            success: {
              style: { background: "blue", color: "white", fontWeight: "600" },
            },
            error: {
              style: { background: "red", color: "black", fontWeight: "900" },
            },
          }}
        />
      </footer>
    </>
  );
};

export default Layout;
