import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Txt from "./Components/Txt";
import * as serviceWorker from "./serviceWorker";
import Msg from "./Components/Msg";
ReactDOM.render(
  <React.StrictMode>
    <Msg />
    <Txt />
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
