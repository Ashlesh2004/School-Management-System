import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Layout from './Layout';

const ProtectedRoute = ({ allowedRoles }) => {
    const { user, token, loading } = useContext(AuthContext);

    if (loading) {
        return <div style={{display: 'flex', justifyContent: 'center', alignItems:'center', height: '100vh'}}>Loading...</div>;
    }

    if (!token || !user) {
        return <Navigate to="/login" replace />;
    }

    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/unauthorized" replace />;
    }

    return (
        <Layout>
            <Outlet />
        </Layout>
    );
};

export default ProtectedRoute;
