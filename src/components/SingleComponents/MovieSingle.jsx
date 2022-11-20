import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const MovieSingle = ({ type }) => {
  const [movie, setMovie] = useState([]);
  console.log(movie);
  const params = useParams();

  const getMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${params.id}?api_key=b39a6d50962ff85858b03b950b6d3958&append_to_response=videos`
    );

    setMovie(data);
  };
  useEffect(() => {
    getMovie();
  }, [params]);

  return (
    <>
      {!movie.poster_path ? (
        <h1 style={{ color: "white" }}>Loading ...</h1>
      ) : (
        <div className="container">
          <div className="single-page">
            <div className="iframe-box">
              {movie.videos ? (
                movie.videos.results
                  .map((video) => {
                    return (
                      <iframe
                        title={movie.title || movie.name}
                        width="420"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        allowFullScreen
                      ></iframe>
                    );
                  })
                  .splice(0, 1)
              ) : (
                <h3 style={{ color: "red" }}>Slow Internet</h3>
              )}
            </div>
            <div className="single-content">
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
              />
              <div>
                <h1 style={{ color: "white" }}>
                  {movie.title ? (
                    movie.title
                  ) : !movie.title ? (
                    movie.name
                  ) : !movie.name || !movie.title ? (
                    <p>loading...</p>
                  ) : (
                    <p>not given</p>
                  )}
                </h1>
                <ul>
                  {!movie.first_air_date ? (
                    <li>
                      <strong>Duration : </strong> <span>{movie.runtime}</span>{" "}
                      min
                    </li>
                  ) : (
                    <li>
                      <strong>Release Date : </strong>{" "}
                      <span>{movie.first_air_date}</span>
                    </li>
                  )}

                  <li>
                    <p>
                      <strong>Description : </strong> {movie.overview}
                    </p>
                  </li>
                  <li>
                    <strong>Rate : </strong>
                    <span> {movie.vote_average} / 10</span>
                  </li>
                  <li className="genra">
                    <strong>Genres:</strong>
                    <span>{movie.genres[0].name}/</span>
                    <span>{movie.genres[1].name}</span>
                  </li>
                </ul>
                {/* <div className="companies">
                {movie.production_companies.map((comp) => {
                  return (
                    <img
                      className="logo-img"
                      src={`https://image.tmdb.org/t/p/w200/${comp.logo_path}`}
                    />
                  );
                })}
              </div> */}
              </div>
            </div>

            {/* <NavLink to={"/"}>
              <div className="button-header">
                <Button type="primary">
                  <i className="fa-solid fa-arrow-left"></i>
                  Back
                </Button>
              </div>
            </NavLink> */}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieSingle;
