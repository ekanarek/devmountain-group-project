import React, { useState } from 'react';

function moodSlider() {
    const [value, setValue] = useState(1);

    const handleSliderChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <input
             type="range"
             min="0"
             // make sure to confirm what the values should be here :) // 
             max="10"
             value={value}
             onChange={handleSliderChange}
             />
        </div>
    );
}

export default moodSlider;