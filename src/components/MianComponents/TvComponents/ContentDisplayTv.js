import React from "react";

const ContentDisplayTv = ({ shows }) => {
  return (
    <section>
      <div className="container-movies">
        {shows.map((show) => {
          return (
            <div key={show.id} className="flex-movies-container">
              <img
                className="img-card"
                src={`https://image.tmdb.org/t/p/w300/${show.poster_path}`}
                alt={show.name}
                title={show.name}
              />
              <div className="quality">HD</div>
              <div className="flex-card-box">
                <p>
                  {show.name.length > 18
                    ? show.name.substring(0, 10) + "..."
                    : show.name}
                </p>
                <div className="flex-card-box-details">
                  <span>
                    {parseInt(show.first_air_date)}
                    <i className="fa-solid fa-circle"></i>
                    <i className="fa-solid fa-star"></i>
                    {show.vote_average}
                  </span>
                  <span>TV</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ContentDisplayTv;
