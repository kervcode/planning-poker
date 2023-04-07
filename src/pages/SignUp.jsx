import "../index.css";
import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSignup } from "../hooks/useSignup";
 
const Signup = () => {
    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, signup} = useSignup();
   
    const handleSubmit = (e) => {
      e.preventDefault();
      signup(email, password);
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
          {error && <p>{error}</p>}
        </form>
      </div>
    );
             
}

export default Signup;