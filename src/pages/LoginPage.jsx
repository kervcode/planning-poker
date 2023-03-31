import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  onAuthStateChanged, getAuth  } from 'firebase/auth';
import { auth } from '../firebase';
import '../styles/LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentUser = auth.currentUser;

    onAuthStateChanged(auth, (user) => {
              if(email === currentUser.email){
                console.log(currentUser)
                navigate("/admin")
              } else {
                setErrorMessage("Please sign in.")
              }

            })
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={handleEmailChange} required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
        <button type="submit">Sign In</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
