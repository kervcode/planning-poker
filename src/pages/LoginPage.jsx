import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  onAuthStateChanged, getAuth  } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
import '../styles/LoginPage.css';

function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password)
  }

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          <span>email:</span>
          <input 
            type="email" 
            onChange = {(e) => setEmail(e.target.value)}
            value={email}
          />          
        </label>
        <label>
          <span>password:</span>
          <input 
            type="password"
            onChange = {(e) => setPassword(e.target.value)}
            value={password}
            />            
        </label>
        <button className='btn'>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
