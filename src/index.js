import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "swiper/css/bundle";
import "antd/dist/antd.css";
import "./index.css";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <>
    <App />
  </>
);
