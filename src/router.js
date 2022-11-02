import { createBrowserRouter } from "react-router-dom";
import App from "./components/App";
import MovieMain from "./components/MianComponents/MovieComponent/MovieMain";
import TvMain from "./components/MianComponents/TvComponents/TvMain";
import MovieSingle from "./components/SingleComponents/MovieSingle";
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
        path: "/movie/:id",
        element: <MovieSingle />,
      },
    ],
  },
]);
export default router;
