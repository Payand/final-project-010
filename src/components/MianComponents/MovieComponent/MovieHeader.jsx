import React from "react";
import { NavLink } from "react-router-dom";
const MoviesHeader = () => {
  return (
    <section>
      <div className="container">
        <div className="flex-container-title">
          <h2>Movies</h2>
          <NavLink to={"/all/movies"}>
            <span>
              Show All<i className="fa-solid fa-circle-play"></i>
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default MoviesHeader;
