import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import '../styles/AdminPage.css';

function AdminPage() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Admin Page</h2>
        <button className="signout-button" onClick={handleSignOut}>
          Sign out
        </button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default AdminPage;
