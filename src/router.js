import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Footer from "./components/FooterComponents/Footer";
import HeaderNav from "./components/HeaderComponents/HeaderNav";
import MovieMain from "./components/MianComponents/MovieComponent/MovieMain";
import TvMain from "./components/MianComponents/TvComponents/TvMain";
import MovieSingle from "./components/SingleComponents/MovieSingle";
import { api } from "./config";
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: [
          <>
            <MovieMain />
            <TvMain />
          </>,
        ],
      },
    ],
  },
  {
    path: "/movie/:id",
    element: (
      <>
        <header>
          <HeaderNav nav={api.Header.nav} />
        </header>

        <MovieSingle type="movie" />
        <div className="router-footer">
          <Footer />
        </div>
      </>
    ),
  },
  {
    path: "/tv/:id",
    element: (
      <>
        <header>
          <HeaderNav nav={api.Header.nav} />
        </header>
        <MovieSingle type="tv" />
        <div className="router-footer">
          <Footer />
        </div>
      </>
    ),
  },
]);
export default router;
