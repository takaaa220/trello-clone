import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import Board from "./components/Board";

const App = () => (
  <React.Fragment>
    <Header />
    <Board />
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById("root"));
