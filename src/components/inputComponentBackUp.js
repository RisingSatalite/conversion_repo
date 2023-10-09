// components/InputConverter.js
import React, { useState, useEffect } from 'react';
import { CelsiusToFahrenheit,FahrenheitToCelsius,kmToMiles,MilesTokm,kgToLb,LbTokg } from './converterFormula';

function InputConverter({ buttonFunction }) {
  const [inputText, setInputText] = useState('');
  const [convertedText, setConvertedText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    if (buttonFunction === 'CelsiusToFahrenheit') {
      // Perform the "newFunction" action
      // Replace this logic with your custom functionality
      const newConvertedText = CelsiusToFahrenheit(inputText);
      setConvertedText(newConvertedText);
    } else {
      // Perform the default action (or any other function)
      // Replace this logic with your default functionality
      const defaultConvertedText = inputText.toUpperCase();
      setConvertedText(defaultConvertedText);
    }
  };

  useEffect(() => {
    // You can use useEffect to handle any side-effects related to buttonFunction
    // For example, if you need to do something when buttonFunction changes
  }, [buttonFunction]);

  return (
    <div>
      <input
        class="text-black"
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Convert</button>
      <label>{convertedText}</label>
    </div>
  );
}

export default InputConverter;
