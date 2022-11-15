import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";
import Content from "./Content";

customElements.define(
  "content-wc",
  reactToWebComponent(Content, React, ReactDOM)
);
