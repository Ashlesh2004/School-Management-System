import React, { useContext } from 'react';
import { Bell, Search, UserCircle, LogOut } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';

const Topbar = ({ user }) => {
    const { logout } = useContext(AuthContext);

    return (
        <header className="topbar" style={{
            height: '70px',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 2rem',
            position: 'sticky',
            top: 0,
            zIndex: 10
        }}>
            <div className="search-bar" style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-color)', padding: '0.5rem 1rem', borderRadius: '12px', width: '300px' }}>
                <Search size={18} color="var(--text-muted)" />
                <input 
                    type="text" 
                    placeholder="Search anything..." 
                    style={{ border: 'none', background: 'transparent', outline: 'none', marginLeft: '0.5rem', width: '100%', color: 'var(--text-color)' }}
                />
            </div>
            
            <div className="topbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <button style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative', color: 'var(--text-muted)' }}>
                    <Bell size={22} />
                    <span style={{ position: 'absolute', top: 0, right: 0, width: '8px', height: '8px', background: 'var(--danger-color)', borderRadius: '50%' }}></span>
                </button>
                
                <div style={{ width: '1px', height: '24px', background: 'var(--border-color)' }}></div>
                
                <div className="user-profile" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>
                        {user?.name?.charAt(0) || <UserCircle size={24} />}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontWeight: '600', fontSize: '0.875rem', color: 'var(--text-color)' }}>{user?.name || 'User'}</span>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{user?.role || 'Guest'}</span>
                    </div>
                </div>

                <button 
                    onClick={logout}
                    style={{ 
                        background: 'transparent', 
                        border: '1px solid var(--border-color)', 
                        padding: '0.5rem', 
                        borderRadius: '8px', 
                        cursor: 'pointer', 
                        color: 'var(--danger-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.2s ease'
                    }}
                    title="Logout"
                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)' }}
                    onMouseOut={(e) => { e.currentTarget.style.background = 'transparent' }}
                >
                    <LogOut size={18} />
                </button>
            </div>
        </header>
    );
};

export default Topbar;
