import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/index.css";
import App from "./components/App";
import ButtonHola from "./components/Button";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ButtonHola />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Busca en el HTML el root y pinta los componentes de APP.js
