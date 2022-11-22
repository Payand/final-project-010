import HeaderLogo from "./HeaderLogo";
import HeaderLinks from "./HeaderLinks";

const HeaderNav = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-container">
            <div className="screen-nav">
              <HeaderLogo />
            </div>
            <div className="screen-link">
              <HeaderLinks />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default HeaderNav;
