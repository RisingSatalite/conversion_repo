import React, { useState } from 'react';

export function Input2(){
    // State variable to store the input value
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the inputValue state when the input value changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to access the entered value
  const getValueFromInput = () => {
    // You can use the inputValue state variable here
    console.log('Entered value:', inputValue);
  };

  return (
    <div>
      <label htmlFor="inputField">Enter a value:</label>
      <input
        type="text"
        id="inputField"
        placeholder='From Unit'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={getValueFromInput}>Get Value</button>
    </div>
  );
}