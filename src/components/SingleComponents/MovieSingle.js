import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

const MovieSingle = () => {
  const [movie, setMovie] = useState({});

  const params = useParams();

  const getMovie = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=b39a6d50962ff85858b03b950b6d3958&append_to_response=videos`
    );
    setMovie(data);
  };
  useEffect(() => {
    getMovie();
  }, [params]);

  return (
    <>
      <div className="container">
        <div className="single-page">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
          <h1 style={{ color: "white" }}>
            {!movie.title ? <h1>Loading...</h1> : movie.title}
          </h1>

          <NavLink to={"/"}>
            <button style={{ color: "black" }}>Back</button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MovieSingle;
