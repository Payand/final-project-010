import { useEffect } from "react";
import { useState } from "react";
import { theMoviedb } from "../../config";

const HeaderSearch = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(query);
  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (query) {
        const { data } = await theMoviedb.get("search/multi", {
          params: { query },
        });
        console.log(data);
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  return (
    <li className="search-flex">
      <form method="get" id="form-1">
        <label htmlFor="search"></label>
        <input
          type="text"
          name="serach"
          id="search"
          placeholder="Enter your keywords"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <button type="submit" form="form-1">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </li>
  );
};
export default HeaderSearch;
