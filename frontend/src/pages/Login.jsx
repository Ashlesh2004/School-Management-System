import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import axios from '../api/axios';
import { School, LogIn, Mail, Lock } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const { data } = await axios.post('/auth/login', { email, password });
            login(data, data.token);

            // Redirect based on role
            if (data.role === 'Admin') navigate('/admin');
            else if (data.role === 'Teacher') navigate('/teacher');
            else navigate('/student');

        } catch (err) {
            setError(err.response?.data?.message || 'Failed to login');
        }
    };

    return (
        <div className="login-container" style={{
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            width: '100vw',
            background: 'linear-gradient(135deg, var(--bg-color) 0%, #1e1b4b 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            
            {/* Background decorative elements */}
            <div style={{
                position: 'absolute', top: '-10%', left: '-10%', width: '40rem', height: '40rem', 
                background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%'
            }}></div>
            <div style={{
                position: 'absolute', bottom: '-10%', right: '-10%', width: '40rem', height: '40rem', 
                background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%'
            }}></div>

            <div className="glass-panel" style={{
                padding: '3rem', 
                width: '100%', 
                maxWidth: '420px', 
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ 
                        background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))',
                        padding: '1rem',
                        borderRadius: '50%',
                        boxShadow: 'var(--shadow-glow)'
                    }}>
                        <School color="white" size={32} />
                    </div>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0 }}>Welcome Back</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textAlign: 'center' }}>
                        Sign in to the School Management System to access your dashboard.
                    </p>
                </div>

                {error && (
                    <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger-color)', padding: '0.75rem', borderRadius: '8px', fontSize: '0.875rem', textAlign: 'center', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div className="input-group" style={{ margin: 0 }}>
                        <label className="input-label" htmlFor="email">Email Address</label>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                            <Mail size={18} color="var(--text-secondary)" style={{ position: 'absolute', left: '1rem' }} />
                            <input 
                                id="email"
                                type="email" 
                                className="input-field" 
                                placeholder="admin@school.com" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ width: '100%', paddingLeft: '2.75rem' }}
                                required
                            />
                        </div>
                    </div>

                    <div className="input-group" style={{ margin: 0 }}>
                        <label className="input-label" htmlFor="password">Password</label>
                        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                            <Lock size={18} color="var(--text-secondary)" style={{ position: 'absolute', left: '1rem' }} />
                            <input 
                                id="password"
                                type="password" 
                                className="input-field" 
                                placeholder="••••••••" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ width: '100%', paddingLeft: '2.75rem' }}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary" style={{ marginTop: '1rem', width: '100%', padding: '0.875rem' }}>
                        <LogIn size={20} />
                        Sign In
                    </button>
                    
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', textAlign: 'center', marginTop: '0.5rem' }}>
                        Use <strong style={{color: 'var(--text-primary)'}}>admin@school.com</strong> / <strong style={{color: 'var(--text-primary)'}}>password123</strong> for testing.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
