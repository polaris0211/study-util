import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "./router/provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider />
  </React.StrictMode>
);
