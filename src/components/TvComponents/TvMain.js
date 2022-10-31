import React from "react";

import TvHeader from "./TvHeader";
import ContentDisplayTv from "./ContentDisplayTv";
const TvMain = (shows) => {
  return (
    <>
      <TvHeader />
      <ContentDisplayTv {...shows} />
    </>
  );
};

export default TvMain;
