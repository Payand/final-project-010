import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import Footer from "./components/FooterComponents/Footer";
import HeaderNav from "./components/HeaderComponents/HeaderNav";
import MovieMain from "./components/MianComponents/MovieComponent/MovieMain";
import TvMain from "./components/MianComponents/TvComponents/TvMain";
import MovieSingle from "./components/SingleComponents/MovieSingle";
import { Toaster } from "react-hot-toast";
import { api } from "./config";
import HeaderSearch from "./components/HeaderComponents/SearchBox/HeaderSearch";
import HeaderLogo from "./components/HeaderComponents/HeaderLogo";
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
      {
        path: "/movies",
        element: [<MovieMain />],
      },
    ],
  },
  {
    path: "/movie/:id",
    element: (
      <>
        <header>
          <HeaderNav nav={api.Header.nav} />
          <Toaster
            toastOptions={{
              className: "toaster",
              duration: 5000,
              success: {
                style: {
                  background: "blue",
                  color: "white",
                  fontWeight: "600",
                },
              },
              error: {
                style: { background: "red", color: "black", fontWeight: "900" },
              },
            }}
          />
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
  {
    path: "search",
    element: (
      <>
        {" "}
        <HeaderLogo />
        <HeaderSearch />
      </>
    ),
  },
]);
export default router;
