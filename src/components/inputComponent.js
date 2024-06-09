// components/InputConverter.js
import React, { useState, useEffect } from 'react';
import { CelsiusToFahrenheit,FahrenheitToCelsius,kmToMiles,MilesTokm,kgToLb,LbTokg,KelvinToCelsius,CelsiusToKelvin } from './converterFormula';

function InputConverter({ buttonFunction }) {
  const [inputText, setInputText] = useState('');
  const [convertedText, setConvertedText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    if (buttonFunction === 'CelsiusToFahrenheit') {
      let inputs = inputText.split(" ");
      let answer = "";
      for (const input of inputs) {
        const newCalculatedUnit = CelsiusToFahrenheit(input);
        console.log(newCalculatedUnit);
        answer += " " + newCalculatedUnit;
      }
      console.log(answer);
      setConvertedText(answer);
    } else if (buttonFunction === 'FahrenheitToCelsius') {
      let inputs = inputText.split(" ");
      let answer = "";
      for (const input of inputs) {
        const newCalculatedUnit = FahrenheitToCelsius(input);
        console.log(newCalculatedUnit);
        answer += " " + newCalculatedUnit;
      }
      console.log(answer);
      setConvertedText(answer);
    } else if (buttonFunction === 'kmToMiles') {
      let inputs = inputText.split(" ");
      let answer = "";
      for (const input of inputs) {
        const newCalculatedUnit = kmToMiles(input);
        console.log(newCalculatedUnit);
        answer += " " + newCalculatedUnit;
      }
      console.log(answer);
      setConvertedText(answer);
    } else if (buttonFunction === 'MilesTokm') {
      let inputs = inputText.split(" ");
      let answer = "";
      for (const input of inputs) {
        const newCalculatedUnit = MilesTokm(input);
        console.log(newCalculatedUnit);
        answer += " " + newCalculatedUnit;
      }
      console.log(answer);
      setConvertedText(answer);
    } else if (buttonFunction === 'kgToLb') {
      let inputs = inputText.split(" ");
      let answer = "";
      for (const input of inputs) {
        const newCalculatedUnit = kgToLb(input);
        console.log(newCalculatedUnit);
        answer += " " + newCalculatedUnit;
      }
      console.log(answer);
      setConvertedText(answer);
    } else if (buttonFunction === 'LbTokg') {
      let inputs = inputText.split(" ");
      let answer = "";
      for (const input of inputs) {
        const newCalculatedUnit = LbTokg(input);
        console.log(newCalculatedUnit);
        answer += " " + newCalculatedUnit;
      }
      console.log(answer);
      setConvertedText(answer);
    } else if (buttonFunction === 'CelsiusToKelvin') {
      let inputs = inputText.split(" ");
      let answer = "";
      for (const input of inputs) {
        const newCalculatedUnit = CelsiusToKelvin(input);
        console.log(newCalculatedUnit);
        answer += " " + newCalculatedUnit;
      }
      console.log(answer);
      setConvertedText(answer);
    } else if (buttonFunction === 'KelvinToCelsius') {
      let inputs = inputText.split(" ");
      let answer = "";
      for (const input of inputs) {
        const newCalculatedUnit = KelvinToCelsius(input);
        console.log(newCalculatedUnit);
        answer += " " + newCalculatedUnit;
      }
      console.log(answer);
      setConvertedText(answer);
    } else {
      setConvertedText("Error, internal error");
    }
  };

  useEffect(() => {
    // You can use useEffect to handle any side-effects related to buttonFunction
    // For example, if you need to do something when buttonFunction changes
  }, [buttonFunction]);

  return (
    <div>
      <input
        class="text-black "
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={handleInputChange}
      />
      <br/>
      <button class="" className='bg-orange-400 hover:bg-orange-700 text-black' onClick={handleButtonClick}>Convert</button>
      <br/>
      <label>{convertedText}</label>
    </div>
  );
}

export default InputConverter;