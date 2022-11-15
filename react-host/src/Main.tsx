import React, { lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./index.css";

const ReactAppContent = lazy(() => import("reactApp/Content"));
const VueAppContentWrapper = lazy(() => import("./VueAppContentWrapper"));
const VanillaAppContentWrapper = lazy(() => import("./VanillaAppWrapper"));
const AngularWcWrapper = lazy(() => import("./AngularWcWrapper"));

interface Props {
  msg: string;
}

export default function Main({ msg }: Props) {
  return (
    <>
      <div>
        <h1>ReactHost</h1>
        <p>(:3000)</p>
        <lit-button />
        <button>hello</button>
        <input disabled value={msg}/>
      </div>
      <Suspense fallback={<div>Loading ReactAppContent...</div>}>
        <ErrorBoundary>
          <ReactAppContent msg={msg} />
        </ErrorBoundary>
      </Suspense>
      <Suspense fallback={<div>Loading VueAppContentWrapper...</div>}>
        <ErrorBoundary>
          <VueAppContentWrapper msg={msg}/>
        </ErrorBoundary>
      </Suspense>
      <Suspense fallback={<div>Loading VanillaAppContentWrapper...</div>}>
        <ErrorBoundary>
          <VanillaAppContentWrapper msg={msg}/>
        </ErrorBoundary>
      </Suspense>
      <Suspense fallback={<div>Loading VanillaAppContentWrapper...</div>}>
        <ErrorBoundary>
          <AngularWcWrapper msg={msg}/>
        </ErrorBoundary>
      </Suspense>
    </>
  );
}
