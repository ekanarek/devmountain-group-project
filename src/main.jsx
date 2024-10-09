<<<<<<< HEAD
import React from 'react';  
import ReactDOM from 'react-dom/client';  
import App from './App'; // Update the path if App is located elsewhere  
import './index.css'; // Optional: global styles  

// Create a root for the app  
const root = ReactDOM.createRoot(document.getElementById('root'));  

// Render the App component  
root.render(  
    <React.StrictMode>  
        <App />  
    </React.StrictMode>  
);
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
>>>>>>> 61820587f06738ad575fad7b6fc72f5138475f81
