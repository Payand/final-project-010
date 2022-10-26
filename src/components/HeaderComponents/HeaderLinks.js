import HeaderSearch from "./HeaderSearch";
import HeaderLogin from "./HeaderLogin";
const HeaderLinks = ({ links }) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link}>
          <a href={"#" + link}>{link}</a>
        </li>
      ))}
      <HeaderSearch />
      <HeaderLogin />
    </ul>
  );
};

export default HeaderLinks;
