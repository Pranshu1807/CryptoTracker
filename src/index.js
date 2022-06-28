import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
const Index = () => {
  return (
    <div>
      <App></App>
    </div>
  );
};

ReactDOM.render(<Index></Index>, document.getElementById("root"));
