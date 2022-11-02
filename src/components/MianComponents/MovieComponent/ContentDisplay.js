import React from "react";
import { NavLink } from "react-router-dom";

const ContentDisplay = ({ movies }) => {
  return (
    <>
      <section>
        <div id="movies" className="container-movies">
          {movies.map((movie) => {
            return (
              <div key={movie.id} className="flex-movies-container">
                <NavLink className="nav-link" to={`/movie/${movie.id}`}>
                  <img
                    className="img-card"
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.title}
                    title={movie.title}
                  />

                  <div className="quality">HD</div>
                  <div className="flex-card-box">
                    <p>
                      {movie.title.length > 20
                        ? movie.title.substring(0, 10) + "..."
                        : movie.title}
                    </p>
                    <div className="flex-card-box-details">
                      <span>
                        {parseInt(movie.release_date)}
                        <i className="fa-solid fa-circle"></i>
                        <i className="fa-solid fa-star"></i>
                        {movie.vote_average}
                      </span>
                      <span>Movie</span>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ContentDisplay;
