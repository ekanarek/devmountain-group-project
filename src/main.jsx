import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { TokenProvider } from "./contexts/TokenContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import SlidersPage from "./pages/SlidersPage.jsx";
import ResultsPage from "./pages/ResultsPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/new-mood" element={<SlidersPage />} />
      <Route path="/results" element={<ResultsPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TokenProvider>
      <RouterProvider router={router} />
    </TokenProvider>
  </React.StrictMode>
);
