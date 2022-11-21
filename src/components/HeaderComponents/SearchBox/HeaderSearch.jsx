import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { theMoviedb } from "../../../config";
import Movie from "./items/Movie";
import Person from "./items/Person";
import TV from "./items/TV";
const HeaderSearch = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);
  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (query) {
        const { data } = await theMoviedb.get("search/multi/", {
          params: { query },
        });

        setSearchResults(data.results);
      }
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  function showItem(item) {
    switch (item.media_type) {
      case "movie":
        return <Movie item={item} />;
      case "tv":
        return <TV item={item} />;
      case "person":
        return <Person item={item} />;
    }
  }

  return (
    <>
      <div className="container">
        <div className="search-flex">
          <NavLink to={"/"}>
            <label className="nav-link">X</label>
          </NavLink>

          <input
            className="search-input"
            type="text"
            name="serach"
            id="search"
            placeholder="Enter your movie or tv or actor"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {searchResults.length && query ? (
          <div className="search-results-ex">
            <div className="container">
              <div className="result-design">
                {searchResults.map((item) => showItem(item))}
              </div>
            </div>
          </div>
        ) : (
          <div>no search</div>
        )}
      </div>
    </>
  );
};
export default HeaderSearch;
