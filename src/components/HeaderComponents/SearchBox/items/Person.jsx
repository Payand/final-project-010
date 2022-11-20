import React from "react";
import { NavLink } from "react-router-dom";
const Person = ({ item }) => {
  console.log(item);
  return (
    <div>
      <NavLink className="nav-link" to={`/${item.media_type}/${item.id}`}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w300/${item.profile_path}`}
            alt={item.name}
            width="50"
          />
          {item.name}
          <div>
            <i className="fa-solid fa-star"></i>
            {item.popularity}
            {item.media_type}
          </div>

          {item.release_date}
        </div>
      </NavLink>
    </div>
  );
};

export default Person;
