// import React, { useState } from 'react';

// export default function MoodSlider() {
//     const [value, setValue] = useState(1);

//     const handleSliderChange = (event) => {
//         setValue(event.target.value);
//     };

//     return (
//         <div>
//             <input
//              type="range"
//              min="0"
//              // uhh 
//              max="10"
//              value={value}
//              onChange={handleSliderChange}
//              />
//         </div>
//     );
// }

import React, { useState } from 'react';  
import '../css/moodSlider.css';  // Import the CSS file for styling  


export default function MoodSlider() {  
    const [value, setValue] = useState(1);  

    const handleSliderChange = (event) => {  
        setValue(event.target.value);  
    };  

    return (  
        <div className="mood-slider">  
            <input  
                type="range"  
                min="0"  
                max="10"  
                value={value}  
                onChange={handleSliderChange}  
                className="slider" // Add a class to your slider  
            />  
        </div>  
    );  
}
