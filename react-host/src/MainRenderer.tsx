import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Main from "./Main";

interface Props {
  msg: string;
}

export default function MainRenderer(root: HTMLElement,props: Props) {
  ReactDOM.render(<Main {...props}/>, root);
}
