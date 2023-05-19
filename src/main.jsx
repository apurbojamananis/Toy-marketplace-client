import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./components/Routes/Routes.jsx";

import { RouterProvider } from "react-router-dom";
import AuthProviders from "./components/Providers/AuthProviders";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={Router} />
    </AuthProviders>
  </React.StrictMode>
);
