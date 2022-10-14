import React, { lazy, Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import "./index.css";

const ReactAppContent = lazy(() => import("reactApp/Content"));
const VueAppContentWrapper = lazy(() => import("./VueAppContentWrapper"));
const VanillaAppContentWrapper = lazy(() => import("./VanillaAppWrapper"));
const AngularWcWrapper = lazy(() => import("./AngularWcWrapper"));

export default function Main() {
  return (
    <>
      <div>
        <h1>ReactHost</h1>
        <p>(:3000)</p>
        <lit-button />
        <button>hello</button>
      </div>
      <div></div>
      <Suspense fallback={<div>Loading ReactAppContent...</div>}>
        <ErrorBoundary>
          <ReactAppContent />
        </ErrorBoundary>
      </Suspense>
      <Suspense fallback={<div>Loading VueAppContentWrapper...</div>}>
        <ErrorBoundary>
          <VueAppContentWrapper />
        </ErrorBoundary>
      </Suspense>
      <Suspense fallback={<div>Loading VanillaAppContentWrapper...</div>}>
        <ErrorBoundary>
          <VanillaAppContentWrapper />
        </ErrorBoundary>
      </Suspense>
      <Suspense fallback={<div>Loading VanillaAppContentWrapper...</div>}>
        <ErrorBoundary>
          <AngularWcWrapper />
        </ErrorBoundary>
      </Suspense>
    </>
  );
}
