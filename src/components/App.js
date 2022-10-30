import Header from "./HeaderComponents/Header";
import MovieMain from "./MovieComponent/MovieMain";
import TvMain from "./TvComponents/TvMain";
import { api } from "../config";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  console.log(movies);
  const getMovies = async (termOne, termTwo) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${termOne}/${termTwo}?api_key=b39a6d50962ff85858b03b950b6d3958`
    );
    setMovies(data.results);
  };
  const getTV = async (termOne, termTwo) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${termOne}/${termTwo}?api_key=b39a6d50962ff85858b03b950b6d3958`
    );
    setShows(data.results);
  };

  useEffect(() => {
    getMovies("movie", "popular");
    getTV("tv", "popular");
  }, []);

  return (
    <>
      <header>
        <Header header={api.Header} />
      </header>

      <main>
        <MovieMain movies={movies} />
        <TvMain shows={shows} />
      </main>
    </>
  );
};
export default App;
