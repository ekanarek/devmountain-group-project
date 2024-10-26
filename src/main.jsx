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
import { TokenProvider } from "./contexts/TokenSliderContext.jsx";
import HomePage from "./pages/HomePage.jsx";
import GenrePage from "./pages/GenrePage.jsx";
import SlidersPage from "./pages/SlidersPage.jsx";
import ResultsPage from "./pages/ResultsPage.jsx";
import MoodsPage from "./pages/MoodsPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />
      <Route path="/genre" element={<GenrePage />} />
      <Route path="/sliders" element={<SlidersPage />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/moods" element={<MoodsPage />} />
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
