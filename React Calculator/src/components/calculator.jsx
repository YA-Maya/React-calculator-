// Import the required hooks from React
import React, { useState } from 'react';

// Calculator component
const Calculator = () => {
  // State to hold the input value
  const [input, setInput] = useState('');

  // Function to handle button clicks and update the input value
  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to handle the '=' button click and calculate the result
  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  // Function to handle the 'C' button click and clear the input
  const handleClear = () => {
    setInput('');
  };

  return (
    <div className="calculator">
      {/* Input field to display the current input value */}
      <input type="text" value={input} readOnly />


      {/* Operator buttons */}
      <div className="operator outer">
        <button className='inner' onClick={() => handleButtonClick('+')}>+</button>
        <button className='inner' onClick={() => handleButtonClick('-')}>-</button>
        <button className='inner' onClick={() => handleButtonClick('/')}>/</button>
        <button className='inner' onClick={() => handleButtonClick('*')}>*</button>
        <button className='inner' onClick={handleClear}>C</button>
      </div>

      {/* Numeric and other buttons */}
      <div className="buttons outer">
        <button className='inner' onClick={() => handleButtonClick('7')}>7</button>
        <button className='inner' onClick={() => handleButtonClick('8')}>8</button>
        <button className='inner' onClick={() => handleButtonClick('9')}>9</button>
        <button className='inner' onClick={() => handleButtonClick('4')}>4</button>
        <button className='inner' onClick={() => handleButtonClick('5')}>5</button>
        <button className='inner' onClick={() => handleButtonClick('6')}>6</button>
        <button className='inner' onClick={() => handleButtonClick('1')}>1</button>
        <button className='inner' onClick={() => handleButtonClick('2')}>2</button>
        <button className='inner' onClick={() => handleButtonClick('3')}>3</button>
        <button className='inner' onClick={() => handleButtonClick('0')}>0</button>
        <button className='inner' onClick={() => handleButtonClick('.')}>.</button>
        <button className='inner' onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

// Export the Calculator component
export default Calculator;
