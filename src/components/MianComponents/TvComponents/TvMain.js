import React from "react";

import TvHeader from "./TvHeader";
import ContentDisplayTv from "./ContentDisplayTv";
import { useState, useEffect } from "react";
import axios from "axios";

const TvMain = () => {
  const [shows, setShows] = useState([]);

  const getTV = async (termOne, termTwo) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${termOne}/${termTwo}?api_key=b39a6d50962ff85858b03b950b6d3958`
    );
    setShows(data.results);
  };

  useEffect(() => {
    getTV("tv", "popular");
  }, []);
  return (
    <>
      <TvHeader />
      <ContentDisplayTv shows={shows} />
    </>
  );
};

export default TvMain;
