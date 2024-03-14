import React, { useState } from 'react';

const NumberInput = ({ onSubmit }) => {
  const [guess, setGuess] = useState('');

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(guess);
    setGuess('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={guess}
        onChange={handleChange}
        placeholder="Enter your guess"
        className='inputfield'
      />
      <button type="submit" className='button'>Submit</button>
    </form>
  );
};

export default NumberInput;
