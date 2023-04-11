import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function 
() {
  return (
    <div className='header'> 
        <div className="wrapper">
            <div className="logo">
                <Link to="/">
                    Planning Poker
                    <img src="" alt="" />
                </Link>
            </div>

            <div className="menu">
                <Link to="/vote" className="listItem">
                    Voter
                </Link>
                <Link to="/signup" className="listItem">
                    Admin
                </Link>
            </div>
        </div>        
    </div>
  )
}
