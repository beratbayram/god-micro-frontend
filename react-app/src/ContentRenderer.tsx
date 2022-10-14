import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Main from "./Content";

export default function ContentRenderer(root: HTMLElement) {
  ReactDOM.render(<Main />, root);
}
