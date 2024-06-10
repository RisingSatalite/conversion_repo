import React, { useState } from 'react';
import { conversionFunctions } from './calculations/converterFormula';

function InputConverter({ buttonFunction }) {
  const [inputText, setInputText] = useState('');
  const [convertedText, setConvertedText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    const convertFunction = conversionFunctions[buttonFunction];
    if (convertFunction) {
      const inputs = inputText.split(" ");
      const answer = inputs.map(input => convertFunction(input)).join(" ");
      setConvertedText(answer);
    } else {
      setConvertedText("Error, internal error");
    }
  };

  return (
    <div>
      <input
        className="text-black"
        type="text"
        placeholder="Enter text"
        value={inputText}
        onChange={handleInputChange}
      />
      <br/>
      <button className='bg-orange-400 hover:bg-orange-700 text-black' onClick={handleButtonClick}>
        Convert
      </button>
      <br/>
      <label>{convertedText}</label>
    </div>
  );
}

export default InputConverter;
