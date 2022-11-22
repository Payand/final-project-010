import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Spin } from "antd";
import { Button } from "antd";
const MovieSingle = ({ type }) => {
  const [movie, setMovie] = useState([]);

  const params = useParams();

  const getMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${type}/${params.id}?api_key=b39a6d50962ff85858b03b950b6d3958&append_to_response=videos`
    );

    setMovie(data);
  };
  useEffect(() => {
    getMovie();
    window.scroll(0, 0);
  }, [params]);

  return (
    <>
      {!movie.id ? (
        <Spin size="large" />
      ) : (
        <div className="container">
          <div className="single-page">
            {type === "movie" ? (
              <NavLink to={"/all/movies"}>
                <div className="button-header">
                  <Button type="primary">
                    <i className="fa-solid fa-arrow-left"></i>
                    All movies
                  </Button>
                </div>
              </NavLink>
            ) : (
              <NavLink to={"/all/tvs"}>
                <div className="button-header">
                  <Button type="primary">
                    <i className="fa-solid fa-arrow-left"></i>
                    All shows
                  </Button>
                </div>
              </NavLink>
            )}

            <div className="iframe-box">
              {movie.videos.results.length ? (
                movie.videos.results
                  .map((video) => {
                    return (
                      <iframe
                        key={video.id}
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
                <iframe
                  title={movie.title || movie.name}
                  width="420"
                  height="315"
                  src={`https://www.youtube.com/embed/9yOTlrxvpajgFHhv`}
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <div className="single-content">
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" />
              )}

              <div>
                <h1 style={{ color: "white" }}>
                  {movie.title ? (
                    movie.title
                  ) : !movie.title ? (
                    movie.name
                  ) : !movie.name && !movie.title ? (
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
                    <span> {String(movie.vote_average).slice(0, 3)} / 10</span>
                  </li>
                  <li className="genra">
                    <strong>Genres:</strong>
                    {movie.genres.map((gen) => {
                      return <span key={gen.id}>{gen.name}/</span>;
                    })}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieSingle;
