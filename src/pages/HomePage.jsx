import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';
// import planningPoker from "../images/planningPoker.png"

function HomePage() {
  return (
    <div className="container">
        <div>
            {/* <h2>Welcome to Planning Poker!</h2> */}
            {/* <img src={planningPoker} alt="planningPoker" srcset="" />      */}
        </div>
       
        <div className="button-container">
            <p>Choose your role:</p>
          <div>
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
