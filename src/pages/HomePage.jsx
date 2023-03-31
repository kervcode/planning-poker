import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  return (
    <div className="container">
      <div className="card">
        <h2>Welcome to Planning Poker!</h2>
        <p>Choose your role:</p>
        <div className="button-container">
          <Link to="/vote" className="button">
            Voter
          </Link>
          <Link to="/login" className="button">
            Admin
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
