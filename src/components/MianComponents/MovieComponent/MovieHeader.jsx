import React from "react";

const MoviesHeader = () => {
  return (
    <section>
      <div className="container">
        <div className="flex-container-title">
          <h2>Movies</h2>
          <span>
            Show All<i className="fa-solid fa-circle-play"></i>
          </span>
        </div>
      </div>
    </section>
  );
};

export default MoviesHeader;
