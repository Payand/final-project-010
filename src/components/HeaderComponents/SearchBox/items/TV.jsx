import React from "react";
import { NavLink } from "react-router-dom";
const TV = ({ item }) => {
  return (
    <div>
      <NavLink className="nav-link" to={`/${item.media_type}/${item.id}`}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
            alt={item.title}
            width="50"
          />
          {item.title}
          <div>
            <i className="fa-solid fa-star"></i>
            {item.vote_average}
            {item.media_type}
          </div>

          {item.release_date}
        </div>
      </NavLink>
    </div>
  );
};

export default TV;
