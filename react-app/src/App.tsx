import React from "react";
import ReactDOM from "react-dom";
import Content from "./Content";
import "./ContentWc";

import "./index.css";

const App = () => (
  <>
    <Content name="normal" onClick={alert}/>
    <content-wc name="wc" onClick={() => alert("wc")}/>
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
