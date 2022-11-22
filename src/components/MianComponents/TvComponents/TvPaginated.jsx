import React from "react";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { theMoviedb } from "../../../config";
import ContentDisplay from "../MovieComponent/ContentDisplay";
const TvPaginated = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState();

  const getMovies = async (termOne, termTwo) => {
    const { data } = await theMoviedb.get(`${termOne}/${termTwo}`, {
      params: {
        page: page,
      },
    });
    setMovies(data.results);
  };
  const onChange = (pageNumber) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    getMovies("tv", "popular");
    window.scroll(0, 500);
  }, [page]);

  return (
    <>
      <section>
        <div className="container">
          <div className="flex-container-title">
            <h2>Tvs</h2>
          </div>
        </div>
      </section>
      <ContentDisplay movies={movies} type={"tv"} quantity={20} />
      <div className="container">
        <div className="pagination-content">
          <Pagination defaultCurrent={page} total={500} onChange={onChange} />
        </div>
      </div>
    </>
  );
};

export default TvPaginated;
