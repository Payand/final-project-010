import ContentDisplay from "./ContentDisplay";
import MoviesHeader from "./MovieHeader";

const MovieMain = ({ movies }) => {
  console.log(movies);
  return (
    <>
      <MoviesHeader />
      <ContentDisplay movies={movies} />
    </>
  );
};

export default MovieMain;
