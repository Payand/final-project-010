import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Button, Space, Spin } from "antd";

const MovieSingle = ({ type }) => {
  console.log(type);
  const [movie, setMovie] = useState({});
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
  }, []);

  return (
    <>
      {!movie ? (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      ) : (
        <div className="container">
          <div className="single-page">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
                {/* <li className="genra">
                <strong>Genres:</strong>
                <span>{movie.genres[0].name}/</span>
                <span>{movie.genres[1].name}</span>
              </li> */}
              </ul>
            </div>
            <NavLink to={"/"}>
              <div className="button-header">
                <Button type="primary">
                  <i className="fa-solid fa-arrow-left"></i>
                  Back
                </Button>
              </div>
            </NavLink>
          </div>
        </div>
      )}

      {/* <div className="iframe-box">
          <iframe
            width="400"
            height="315"
            src={`https://www.youtube.com/embed/`}
          ></iframe>
          <iframe
            width="400"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
          <iframe
            width="400"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div> */}
    </>
  );
};

export default MovieSingle;
