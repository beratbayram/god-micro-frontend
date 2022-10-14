import "./index.css";
import("./../../wc");

import("reactHost/MainRenderer").then((module) =>
  module.default(document.getElementById("reactHost"))
);

import("vueHost/AppRenderer").then((module) =>
  module.AppRenderer(document.getElementById("vueHost"))
);

function setCssVariable(variable: string, value: string) {
  document.documentElement.style.setProperty(variable, value);
}

window["setCssVariable"] = setCssVariable;

setCssVariable("--lit-button-text-color", "blue");
