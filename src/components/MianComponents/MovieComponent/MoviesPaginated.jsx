import React from "react";
import { Pagination } from "antd";
import { useEffect, useState } from "react";
import { theMoviedb } from "../../../config";
import ContentDisplay from "./ContentDisplay";
const Moviespaginated = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(() =>
    JSON.parse(localStorage.getItem("page"))
  );

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
    localStorage.setItem("page", JSON.stringify(pageNumber));
  };

  useEffect(() => {
    getMovies(`${type}`, "popular");
    window.scroll(0, 500);
  }, [page, type]);

  return (
    <>
      <section>
        <div className="container">
          <div className="flex-container-title">
            <h2>
              {type}
              <small>s</small>
            </h2>
          </div>
        </div>
      </section>
      <ContentDisplay movies={movies} type={type} quantity={20} />
      <div className="container">
        <div className="pagination-content">
          <Pagination defaultCurrent={page} total={500} onChange={onChange} />
        </div>
      </div>
    </>
  );
};

export default Moviespaginated;
