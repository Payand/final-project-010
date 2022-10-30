import React from "react";

const TvHeader = () => {
  return (
    <section>
      <div className="container-movies">
        <div className="flex-container-tv">
          <h2 id="tv">TV-Shows</h2>
          <span>
            Show All<i className="fa-solid fa-circle-play"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default TvHeader;
