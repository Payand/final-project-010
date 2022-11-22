import React from "react";
import { NavLink } from "react-router-dom";

const Person = ({ item }) => {
  console.log(item);
  return (
    <div>
      <NavLink className="nav-link" to={`/${item.media_type}/${item.id}`}>
        <div className="search-results-container">
          {item.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300/${item.profile_path}`}
              alt={item.name}
            />
          ) : (
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
              width="50"
              alt={item.name}
            />
          )}

          <div className="search-results">
            <div className="title-result">{item.name}</div>
            <div>{item.media_type}</div>
            <div>{item.known_for_department}</div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Person;
