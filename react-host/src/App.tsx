import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";

import "./index.css";
const Main = lazy(() => import("./Main"));

export default function App() {
  return (
    <Suspense fallback={<div>Loading ReactAppContent...</div>}>
      <Main />
    </Suspense>
  );
}
ReactDOM.render(<App />, document.getElementById("reactHost"));
