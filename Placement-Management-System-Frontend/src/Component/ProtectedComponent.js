// ProtectedComponent.js

import React from "react";
import { useAuth } from './AuthContext';

const ProtectedComponent = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Protected Component</h1>
      <p>Welcome, {user ? user.email : "Guest"}!</p>
    </div>
  );
};

export default ProtectedComponent;
