import React from "react"
import ReactDOM from "react-dom/client"
import { Router } from "../../router/src"
import { routeConfig } from "./routeConfig"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router routeConfig={routeConfig} />
  </React.StrictMode>
)
