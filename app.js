import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import React from 'react';  
import step2 from './Step2';  
 
import 'src/css/step2.css'; // Optional: Import your main CSS styles  
import DesktopStep2sliders from 'src/pages/Step2.jsx'; // Adjust the path as necessary  

function App() {  
  return (  
    <div className="App">  
      <header className="App-header">  
        <h1>Create Mood App</h1>  
      </header>  
      <main>  
        <DesktopStep2sliders />  
      </main>  
      <footer>  
        <p>© 2023 Your Company Name</p>  
      </footer>  
    </div>  
  );  
}  

export default App;