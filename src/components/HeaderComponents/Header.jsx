import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderCarousel from "./HeaderCarousel";
import { api } from "../../config";
const Header = () => {
  return (
    <>
      <HeaderNav nav={api.Header.nav} />

      <HeaderCarousel carousel={api.Header.navDisplay} />
    </>
  );
};

export default Header;
