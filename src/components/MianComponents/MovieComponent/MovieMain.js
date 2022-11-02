import ContentDisplay from "./ContentDisplay";
import MoviesHeader from "./MovieHeader";
import axios from "axios";
import { useEffect, useState } from "react";

const MovieMain = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async (termOne, termTwo) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${termOne}/${termTwo}?api_key=b39a6d50962ff85858b03b950b6d3958`
    );
    setMovies(data.results);
  };
  useEffect(() => {
    getMovies("movie", "popular");
  }, []);

  return (
    <>
      <MoviesHeader />
      <ContentDisplay movies={movies} />
    </>
  );
};

export default MovieMain;
