import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import cards from '../../images/cards.jpg';
import bg from '../../images/mitchell-luo-xREzOtWzDrQ-unsplash.jpg'

function HomePage() {
  return (
    <div className="container">
        <div className='left-side'>
            <h2>Welcome to Planning Poker!</h2>
            {/* <img src={cards} alt="planningPoker" srcset="" className='img'/>      */}
        </div>
       
        <div className="right-side button-container">
            <p className='desc'>Planning poker is a collaborative technique that teams use to estimate the effort required to complete a project or feature. It helps teams achieve consensus on estimates, reduce bias, and foster collaboration among team members. By combining the expertise of team members and encouraging discussion and debate, planning poker helps teams estimate more accurately.</p>

            <p className='choice'>Choose your role:</p>
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
