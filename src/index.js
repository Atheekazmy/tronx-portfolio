import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
// css
import "swiper/css/swiper.css"; // scss
import "swiper/swiper.scss"; // less
import "swiper/swiper.less";
import "./index.css";
import "./animate.css";
import CustomThemeProvider from "./themes/customThemeProvider";

ReactDOM.render(
  <CustomThemeProvider>
    <CssBaseline />
    <App />
  </CustomThemeProvider>,
  document.querySelector("#root")
);
