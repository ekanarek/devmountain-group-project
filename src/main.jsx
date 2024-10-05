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