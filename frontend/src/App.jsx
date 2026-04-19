import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';

const RoleBasedRedirect = () => {
    const { user, token, loading } = useContext(AuthContext);

    if (loading) return <div>Loading...</div>;

    if (!token || !user) {
        return <Navigate to="/login" replace />;
    }

    switch(user.role) {
        case 'Admin': return <Navigate to="/admin" replace />;
        case 'Teacher': return <Navigate to="/teacher" replace />;
        case 'Student': return <Navigate to="/student" replace />;
        default: return <Navigate to="/login" replace />;
    }
};

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        {/* Redirect root to dashboard based on role */}
        <Route path="/" element={<RoleBasedRedirect />} />

        {/* Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={['Admin']} />}>
            <Route path="/admin" element={<AdminDashboard />} />
            {/* Add more admin routes here */}
        </Route>

        {/* Teacher Routes */}
        <Route element={<ProtectedRoute allowedRoles={['Teacher']} />}>
            <Route path="/teacher" element={<TeacherDashboard />} />
            {/* Add more teacher routes here */}
        </Route>

        {/* Student Routes */}
        <Route element={<ProtectedRoute allowedRoles={['Student']} />}>
            <Route path="/student" element={<StudentDashboard />} />
            {/* Add more student routes here */}
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
    return (
        <AuthProvider>
            <AppRoutes />
        </AuthProvider>
    );
}

export default App;
