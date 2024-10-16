import React from 'react';  
import ReactDOM from 'react-dom/client';  
import { RouterProvider, createBrowserRouter } from 'react-router-dom';  
import App from './App';  

import LandingPage from './pages/LandingPage';  
import Step2Page from './pages/Step2Page'; // Ensure this is correct  
import './index.css'; // Optional: global styles  

// Define routes  
const router = createBrowserRouter([  
  {   
    path: "/",   
    element: <App />,   
    children: [  
      { path: "/", element: <LandingPage /> },  
      { path: "Step2Page", element: <Step2Page /> } // Ensure Step2Page is imported correctly  
    ]  
  }  
]);  

// Create a root for the app and render the RouterProvider  
const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(  
  <React.StrictMode>  
    <RouterProvider router={router} />  
  </React.StrictMode>  
);
