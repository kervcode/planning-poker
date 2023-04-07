import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/VotingPage.css';

function VotingPage() {
  const [selectedValue, setSelectedValue] = useState('');
  const navigate = useNavigate();

  const handleCardSelection = (value) => {
    setSelectedValue(value);
  };

  const handleVote = () => {
    // TODO: Handle vote submission
    navigate('/');
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Vote</h2>
        <div className="card-selection">
          <button
            className={`card-value ${selectedValue === '1' ? 'selected' : ''}`}
            onClick={() => handleCardSelection('1')}
          >
            1
          </button>
          <button
            className={`card-value ${selectedValue === '2' ? 'selected' : ''}`}
            onClick={() => handleCardSelection('2')}
          >
            2
          </button>
          <button
            className={`card-value ${selectedValue === '3' ? 'selected' : ''}`}
            onClick={() => handleCardSelection('3')}
          >
            3
          </button>
          <button
            className={`card-value ${selectedValue === '5' ? 'selected' : ''}`}
            onClick={() => handleCardSelection('5')}
          >
            5
          </button>
          <button
            className={`card-value ${selectedValue === '8' ? 'selected' : ''}`}
            onClick={() => handleCardSelection('8')}
          >
            8
          </button>
          <button
            className={`card-value ${selectedValue === '13' ? 'selected' : ''}`}
            onClick={() => handleCardSelection('13')}
          >
            13
          </button>
          <button
            className={`card-value ${selectedValue === '20' ? 'selected' : ''}`}
            onClick={() => handleCardSelection('20')}
          >
            20
          </button>
          <button
            className={`card-value ${selectedValue === '40' ? 'selected' : ''}`}
            onClick={() => handleCardSelection('40')}
          >
            40
          </button>
          <button
            className={`card-value ${selectedValue === '100' ? 'selected' : ''}`}
            onClick={() => handleCardSelection('100')}
          >
            100
          </button>
        </div>
        <button className="vote-button" onClick={handleVote} disabled={!selectedValue}>
          Vote
        </button>
      </div>
    </div>
  );
}

export default VotingPage;
