import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderCarousel from "./HeaderCarousel";
const Header = ({ header }) => {
  return (
    <>
      <HeaderNav nav={header.nav} />
      <HeaderCarousel carousel={header.navDisplay} />
    </>
  );
};

export default Header;
