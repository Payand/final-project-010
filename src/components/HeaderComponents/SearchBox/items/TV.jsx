import React from "react";
import { NavLink } from "react-router-dom";
const TV = ({ item }) => {
  return (
    <div>
      <NavLink className="nav-link" to={`/${item.media_type}/${item.id}`}>
        <div className="search-results-container">
          <img
            src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
            alt={item.name}
            width="50"
          />
          <div className="search-results">
            <div className="title-result">{item.name}</div>
            {item.media_type}
            <div>
              <i className="fa-solid fa-star"></i>
              {item.vote_average}
            </div>

            {parseInt(item.first_air_date)}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default TV;
