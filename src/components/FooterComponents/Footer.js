import React from "react";

const Footer = () => {
  return (
    <section id="about us">
      <div className="container">
        <div className="footer-display">
          <div className="footer-container">
            <h3>Links</h3>
            <ul>
              <li>Movies</li>
              <li>Tv shows</li>
              <li>Top IMDB</li>
            </ul>
          </div>
          <div className="footer-container">
            <h3>about us</h3>
            <p>
              <strong>TodayWatch</strong> is top of{" "}
              <strong>free streaming website</strong>, where to watch movies
              online free without registration required. With a big database and
              great features, we're confident TodayWatch is the best free movies
              online website in the space that you can't simply miss! TodayWatch
              movies, TodayWatch tv shows, TodayWatch online, TodayWatch movies
              online
            </p>
            <div className="icon-flex">
              <div className="icon-sort">
                <div className="icon-display">
                  <p>
                    <i className="fa-solid fa-crown"></i>
                    High qulity
                  </p>
                </div>
                <div className="icon-display">
                  <p>
                    <i className="fa-solid fa-closed-captioning"></i>
                    Multi Subtitle
                  </p>
                </div>
              </div>
              <div className="icon-sort">
                <div className="icon-display">
                  <p>
                    <i className="fa-solid fa-play"></i>
                    Free Forever
                  </p>
                </div>
                <div className="icon-display">
                  <p>
                    <i className="fa-solid fa-bolt-lightning"></i>
                    Fast Load
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
