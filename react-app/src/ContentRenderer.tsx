import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Main from "./Content";

export default function ContentRenderer(root: HTMLElement,props) {
  ReactDOM.render(<Main {...props}/>, root);
}
