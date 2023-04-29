import React from 'react';
import { useLocation } from 'react-router-dom';

function Confirmation() {
  console.log(useLocation());
  const { state } = useLocation();
  return (
    <div>
        <h2>Thank you!</h2>
        <p>You signed in!</p>
    </div>
  )
}

export default Confirmation;