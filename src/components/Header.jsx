import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default function 
() {
  return (
    <div className='header'>
       
        <div className="logo">
            <Link to="/">
                Logo here
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
  )
}
