import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Hello from "./Hello.js";
import * as serviceWorker from "./serviceWorker";
import "tachyons";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <Hello greeting={"ok this is greeting"} />,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
