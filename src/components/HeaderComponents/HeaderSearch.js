const HeaderSearch = () => {
  return (
    <li className="search-flex">
      <form action="mydata.php" method="get" id="form-1">
        <label htmlFor="search"></label>
        <input
          type="text"
          name="serach"
          id="search"
          placeholder="Enter your keywords"
        />
      </form>
      <button type="submit" form="form-1">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </li>
  );
};
export default HeaderSearch;
