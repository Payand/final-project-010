import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderCarousel from "./HeaderCarousel";
import { api } from "../../config";
import HeaderNavMobile from "./HeaderNavMobile";

const Header = () => {
  return (
    <>
      <HeaderNav />
      <HeaderNavMobile />

      <HeaderCarousel carousel={api.Header.navDisplay} />
    </>
  );
};

export default Header;
