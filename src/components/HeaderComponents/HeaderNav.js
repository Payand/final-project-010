import HeaderLogo from "./HeaderLogo";
import HeaderLinks from "./HeaderLinks";

const HeaderNav = ({ nav }) => {
  return (
    <nav>
      <div className="container">
        <div className="nav-container">
          <HeaderLogo />
          <HeaderLinks links={nav} />
        </div>
      </div>
    </nav>
  );
};
export default HeaderNav;
