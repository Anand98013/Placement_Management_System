import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

// Define a protected route component
const ProtectedRoute = ({ element, ...rest }) => {
  const [cookies] = useCookies(['user']);

  // Check if the user is authenticated
  const isAuthenticated = cookies.user;

  // If the user is authenticated, render the provided element
  // Otherwise, redirect to the login page
  if (isAuthenticated) {
    return <Route {...rest} element={element} />;
  } else {
    // Store the intended route in local storage
    localStorage.setItem("intendedRoute", rest.path);
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
