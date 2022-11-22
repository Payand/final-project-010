import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderLogo from "./HeaderLogo";
import { AiOutlineMenu } from "react-icons/ai";
const HeaderNavMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="nav-container">
          <div className="mob-logo">
            <HeaderLogo />
          </div>

          <div className="mag">
            <div className="flex-mag">
              <NavLink className="nav-link-mobile" to={"/search"}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </NavLink>

              <AiOutlineMenu onClick={() => setOpen(!open)} className="menu" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNavMobile;
