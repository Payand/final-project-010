import ContentDisplay from "./ContentDisplay";
import MoviesHeader from "./MovieHeader";
import { useEffect, useState } from "react";
import { theMoviedb } from "../../../config";

const MovieMain = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async (termOne, termTwo) => {
    const { data } = await theMoviedb.get(`${termOne}/${termTwo}`);
    setMovies(data.results);
  };

  useEffect(() => {
    getMovies("movie", "popular");
  }, []);

  return (
    <>
      <MoviesHeader />
      <ContentDisplay movies={movies} type="movie" quantity={12} />
    </>
  );
};

export default MovieMain;
