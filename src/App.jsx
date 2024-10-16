import React from "react";  
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routing  
import './css/step2.css'; // Ensure this is the correct path for CSS  

function App() {  
  return (  
    <div className="App">  
   
      <main>  
        <Outlet /> {/* This Outlet will render the matched route's element */}  
      </main>  
      {/* <footer>  
        <p>© 2023 Your Company Name</p>  
      </footer>   */}
    </div>  
  );  
}  

export default App;
