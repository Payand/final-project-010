import HeaderSearch from "./HeaderSearch";
import HeaderLogin from "./HeaderLogin";
const HeaderLinks = ({ links }) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          <a href={"#" + link.title}>{link.title}</a>
        </li>
      ))}
      <HeaderSearch />
      <HeaderLogin />
    </ul>
  );
};

export default HeaderLinks;
