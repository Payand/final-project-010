import React from "react";
import { NavLink } from "react-router-dom";

const ContentDisplay = ({ movies, type, quantity }) => {
  return (
    <>
      <section>
        <div id="movies" className="container-movies">
          {movies
            .map((movie) => {
              return (
                <div key={movie.id} className="flex-movies-container">
                  <NavLink className="nav-link" to={`/${type}/${movie.id}`}>
                    <img
                      className="img-card"
                      src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                      alt={movie.title || movie.name}
                      title={movie.title || movie.name}
                    />

                    <div className="quality">HD</div>
                    <div className="flex-card-box">
                      <p>
                        {movie.title && movie.title.length > 20
                          ? movie.title.substring(0, 9) + "..."
                          : movie.name && movie.name.length > 18
                          ? movie.name.substring(0, 9) + "..."
                          : movie.title
                          ? movie.title
                          : movie.name}
                      </p>

                      <div className="flex-card-box-details">
                        <span>
                          {parseInt(movie.release_date) ||
                            parseInt(movie.first_air_date)}
                          <i className="fa-solid fa-circle"></i>
                          <i className="fa-solid fa-star"></i>
                          {movie.vote_average}
                        </span>
                        <span>{type}</span>
                      </div>
                    </div>
                  </NavLink>
                </div>
              );
            })
            .splice(0, `${quantity}`)}
        </div>
      </section>
    </>
  );
};

export default ContentDisplay;
