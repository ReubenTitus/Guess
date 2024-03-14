import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NumberInput from './components/NumberInput';
import ResultMessage from './components/ResultMessage';
import Button from './components/Button';
import './App.css';

const App = () => {
  const maxCount = 5;
  const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);
  const [won, setWon] = useState(false);

  useEffect(() => {
    if (count === maxCount || won) {
      if (won) {
        document.body.style.backgroundColor = 'green'; // Change background color to green when won
      } else {
        document.body.style.backgroundColor = ''; // Reset background color when max attempts reached
      }
    }
  }, [count, maxCount, won]);

  const handleGuess = (value) => {
    if (value.trim() === '') {
      setMessage('Please enter a number.');
      return;
    }
    const guessNum = parseInt(value);
    if (guessNum === secretNumber) {
      setMessage('Congratulations! You guessed it right!');
      setWon(true);
    } else {
      const remainingAttempts = maxCount - count - 1; // Subtract 1 to account for the current attempt
      setCount(count + 1);
      if (remainingAttempts === 0) {
        setMessage(`Sorry! You've used all your attempts. The correct number was ${secretNumber}.`);
      } else if (guessNum < secretNumber) {
        setMessage(`You guessed too low. Try again! Remaining attempts: ${remainingAttempts}`);
      } else {
        setMessage(`You guessed too high. Try again! Remaining attempts: ${remainingAttempts}`);
      }
    }
  };

  const restartGame = () => {
    document.body.style.backgroundColor = ''; // Reset background color
    setSecretNumber(generateRandomNumber());
    setMessage('');
    setCount(0);
    setWon(false);
  };

  function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
  }

  return (
    <>
      <Header />
      <div className={`container ${won ? 'won' : ''}`}>
        <div className="card">
          <div className="content">
            <NumberInput onSubmit={count < maxCount && !won ? handleGuess : null} />
            <ResultMessage message={message} />
            {(count === maxCount || won) && (
              <Button onClick={restartGame} text="Restart Game" />
            )}
            {!won && count !== maxCount && (
              <div className="attempts">
                <p>Remaining attempts: {maxCount - count}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
