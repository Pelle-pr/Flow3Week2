import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const info = [
  { id: "rendering", title: "Rendering with React", info: "Prutfis" },
  { id: "components", title: "components", info: "Baby baby baby" },
  { id: "props-v-state", title: "Props v. State", info: "Add some text here" },
  { id: "HTML", title: "Learn HTML", info: "Learn Learn" },
];

ReactDOM.render(
  <React.StrictMode>
    <App info={info} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
