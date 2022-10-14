import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Main from "./Main";

export default function MainRenderer(root: HTMLElement) {
  ReactDOM.render(<Main />, root);
}
