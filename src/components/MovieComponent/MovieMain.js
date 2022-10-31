import ContentDisplay from "./ContentDisplay";
import MoviesHeader from "./MovieHeader";

const MovieMain = ({ movies }) => {
  return (
    <>
      <MoviesHeader />
      <ContentDisplay movies={movies} />
    </>
  );
};

export default MovieMain;
