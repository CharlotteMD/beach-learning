// document.addEventListener("DOMContentLoaded", function(event) {
//   const element = document.createElement("h1");
//   element.innerHTML = "Hello World";
//   document.body.appendChild(element);
// });

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import { App } from "./App";
// ReactDOM.render(<App />, document.getElementById("root"));

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Home } from "./Home";

class App extends Component {
  render() {
    return (
      <div>
        <Home />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
