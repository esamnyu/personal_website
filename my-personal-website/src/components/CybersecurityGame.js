import React, { useState } from 'react';

function CybersecurityGame() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const checkPassword = () => {
    if (input.toLowerCase() === 'password') {
      setResult('Correct! You cracked the password.');
    } else {
      setResult('Incorrect, try again.');
    }
  };

  return (
    <div className="game-section">
      <h2>Cybersecurity Challenge</h2>
      <p>Try to crack the password using the hints provided. Good luck!</p>
      <p>Hint: The password is a common word used in cybersecurity.</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={checkPassword}>Submit</button>
      <p>{result}</p>
    </div>
  );
}

export default CybersecurityGame;
