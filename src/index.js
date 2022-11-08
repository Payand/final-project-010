import React from "react";
import ReactDOM from "react-dom/client";

import "swiper/css/bundle";
import "antd/dist/antd.min.css";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./router";
import UserProvider from "./components/context/UserContext";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <UserProvider>
    <RouterProvider router={router} />
  </UserProvider>
);
