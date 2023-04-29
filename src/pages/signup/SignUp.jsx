import "../../index.css";
import React, {useState, useRef} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSignup } from "../../hooks/useSignup";
 
const Signup = ({user}) => {
    const navigate = useNavigate();
    const emailRef = useRef();

    console.log("SignedUP: ", user)


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, signup} = useSignup();
  
   
    const handleSubmit = (e) => {
      e.preventDefault();
      signup(email, password);
      navigate("/confirmed", { state: {email: useRef.current.email}})
    }
  
    return (
      <div className="container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Sign up</h2>

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
          <button className='btn'>Sign up</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    );
             
}

export default Signup;