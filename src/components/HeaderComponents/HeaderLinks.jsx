import HeaderLogin from "./HeaderLogin";
import { NavLink } from "react-router-dom";
const HeaderLinks = ({ links }) => {
  return (
    <>
      <ul>
        <NavLink to={"/"}>
          <li>home</li>
        </NavLink>
        <li>movies</li>
        <li>tv-series</li>
        <li>About us</li>
        <NavLink to={"/search"}>
          <li>Search</li>
        </NavLink>
        <HeaderLogin />
      </ul>
    </>
  );
};

export default HeaderLinks;
