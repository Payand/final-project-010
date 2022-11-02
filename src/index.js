import React from "react";
import ReactDOM from "react-dom/client";

import "swiper/css/bundle";
import "antd/dist/antd.min.css";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<RouterProvider router={router} />);
