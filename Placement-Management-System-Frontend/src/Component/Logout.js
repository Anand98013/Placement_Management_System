// Logout.js

import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login or homepage after logout
    navigate('/');
  }, [navigate]);
}

export default Logout;
