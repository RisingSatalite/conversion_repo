import React, { useState, useEffect } from 'react';
import { whichFunction } from './converterFormula';

function InputWhichConverter({ buttonFunction }) {
  const [inputText, setInputText] = useState('');
  const [inputTextTo, setInputTextTo] = useState('');
  const [inputTextFrom, setInputTextFrom] = useState('');
  const [convertedText, setConvertedText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const handleInputChangeTo = (e) => {
    setInputTextTo(e.target.value);
  };
  const handleInputChangeFrom = (e) => {
    setInputTextFrom(e.target.value);
  };

  const handleButtonClick = () => {
    if (buttonFunction === 'whichFunction') {
      let inputs = inputText.split(" ");
      let answer = "";
      for (const input of inputs) {
        console.log(inputTextFrom)
        console.log(inputTextTo)
        console.log(input)
        const newCalculatedUnit = whichFunction(inputTextFrom, inputTextTo, input);
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
        class="text-black"
        type="text"
        placeholder="From unit"
        value={inputTextFrom}
        onChange={handleInputChangeFrom}
      />
      <input
        class="text-black"
        type="text"
        placeholder="To unit"
        value={inputTextTo}
        onChange={handleInputChangeTo}
      />
      <input
        class="text-black"
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

export default InputWhichConverter;