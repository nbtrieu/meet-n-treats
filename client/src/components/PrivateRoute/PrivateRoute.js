import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Auth from '../../utils/auth';

const PrivateRoute = () => {
    
    // Determine if authorized
    const isLoggedIn = Auth.loggedIn();
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;