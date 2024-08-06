import React from 'react';
import { useAuth } from './AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated  } = useAuth();
   
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // if(!isRegister){
    //      return <Navigate to="/register"/>
    // }

    return children;
};

export default ProtectedRoute;
