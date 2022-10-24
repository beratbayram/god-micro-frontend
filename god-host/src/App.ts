import "./index.css";
import("./../../wc");

declare global {
  interface Window {
    _YTE_: {
      reactRenderer: (props) => void;
      vueRenderer: (props) => void;
    };
    setCssVariable: (variable: string, value: string | null) => void;
    handleMainInputChange: (newValue: string) => void;
  }
}
window._YTE_ = {
  reactRenderer: (props) => {
    throw "reactRenderer undefined";
  },
  vueRenderer: (props) => {
    throw "vueRenderer is undefined";
  },
};

// @ts-ignore
import("reactHost/MainRenderer").then((module) => {
  const reactHost = document.getElementById("reactHost");
  let _props = {};
  window._YTE_.reactRenderer = (setState) => {
    _props = setState(_props);
    module.default(reactHost, _props);
  };

  window._YTE_.reactRenderer(() =>({msg: "Hello"}));
});

// @ts-ignore
import("vueHost/AppRenderer").then((module) => {
  const vueHost = document.getElementById("vueHost");
  let _props = {};
  window._YTE_.vueRenderer = (setState) => {
    _props = setState(_props);
    module.AppRenderer(vueHost, _props);
  };
  window._YTE_.vueRenderer(() =>({msg: "Hello"}));
});

window.setCssVariable = (variable: string, value: string | null) => {
  document.documentElement.style.setProperty(variable, value);
};
window.setCssVariable("--lit-button-text-color", "blue");

const angularWc = document.getElementById("root-angular-wc");

window.handleMainInputChange = (newValue: string) => {
  angularWc?.setAttribute("msg", newValue);
  window._YTE_.reactRenderer(props => ({...props, msg: newValue }));
  window._YTE_.vueRenderer(props => ({...props, msg: newValue }));
};
