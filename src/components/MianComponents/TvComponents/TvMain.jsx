import React from "react";
import TvHeader from "./TvHeader";
import ContentDisplay from "../MovieComponent/ContentDisplay";
import { useState, useEffect } from "react";
import { theMoviedb } from "../../../config";

const TvMain = () => {
  const [shows, setShows] = useState([]);

  const getTV = async (termOne, termTwo) => {
    const { data } = await theMoviedb.get(`${termOne}/${termTwo}`);
    setShows(data.results);
  };
  useEffect(() => {
    getTV("tv", "popular");
  }, []);
  return (
    <>
      <TvHeader />
      <ContentDisplay movies={shows} type="tv" quantity={12} />
    </>
  );
};

export default TvMain;
