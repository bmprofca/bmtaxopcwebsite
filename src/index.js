import React from "react";
import ReactDOM from "react-dom/client";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// react-snap pre-renders static HTML into #root, so we hydrate instead of
// re-rendering from scratch when that markup is already present.
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  ReactDOM.createRoot(rootElement).render(app);
}
