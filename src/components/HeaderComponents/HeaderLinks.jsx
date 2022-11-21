import HeaderLogin from "./HeaderLogin";
import { NavLink } from "react-router-dom";
const HeaderLinks = ({ links }) => {
  return (
    <>
      <ul>
        <NavLink to={"/"}>
          <li>home</li>
        </NavLink>
        <NavLink to={"/all/movies"}>
          <li>movies</li>
        </NavLink>
        <NavLink to={"/all/tvs"}>
          <li>tv-series</li>
        </NavLink>
        <li>About us</li>
        <NavLink to={"/search"}>
          <li>
            <i className="fa-solid fa-magnifying-glass"></i>
          </li>
        </NavLink>
        <HeaderLogin />
      </ul>
    </>
  );
};

export default HeaderLinks;
