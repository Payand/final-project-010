import React from "react";
import { NavLink } from "react-router-dom";
const TvHeader = () => {
  return (
    <section>
      <div className="container-movies">
        <div className="flex-container-tv">
          <h2 id="tv-series">TV-Shows</h2>
          <NavLink to={"/all/tvs"}>
            <span>
              Show All<i className="fa-solid fa-circle-play"></i>
            </span>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default TvHeader;
