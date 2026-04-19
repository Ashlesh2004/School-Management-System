import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpen, Clock, CheckSquare, Settings, LogOut, FileText } from 'lucide-react';

const Sidebar = ({ role }) => {
    
    // Define links based on roles
    const adminLinks = [
        { path: '/', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { path: '/users', name: 'Manage Users', icon: <Users size={20} /> },
        { path: '/classes', name: 'Classes', icon: <BookOpen size={20} /> },
    ];

    const teacherLinks = [
        { path: '/', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { path: '/attendance', name: 'Mark Attendance', icon: <CheckSquare size={20} /> },
        { path: '/results', name: 'Upload Marks', icon: <FileText size={20} /> },
    ];

    const studentLinks = [
        { path: '/', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
        { path: '/my-attendance', name: 'My Attendance', icon: <CheckSquare size={20} /> },
        { path: '/my-results', name: 'My Results', icon: <FileText size={20} /> },
        { path: '/timetable', name: 'Timetable', icon: <Clock size={20} /> },
    ];

    let links = [];
    if (role === 'Admin') links = adminLinks;
    if (role === 'Teacher') links = teacherLinks;
    if (role === 'Student') links = studentLinks;

    return (
        <aside className="sidebar" style={{
            width: '260px',
            background: 'var(--card-bg)',
            borderRight: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            padding: '1.5rem',
            zIndex: 10
        }}>
            <div className="sidebar-brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2.5rem' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--primary-color)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    <BookOpen size={24} />
                </div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-color)' }}>EduSync</h2>
            </div>
            
            <nav className="sidebar-nav" style={{ flex: 1 }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {links.map((link) => (
                        <li key={link.name}>
                            <NavLink 
                                to={link.path}
                                className={({isActive}) => isActive ? 'sidebar-link active' : 'sidebar-link'}
                                style={({isActive}) => ({
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '0.875rem 1rem',
                                    borderRadius: '12px',
                                    color: isActive ? '#fff' : 'var(--text-muted)',
                                    background: isActive ? 'var(--primary-color)' : 'transparent',
                                    textDecoration: 'none',
                                    fontWeight: isActive ? '600' : '500',
                                    transition: 'all 0.2s ease',
                                    boxShadow: isActive ? '0 4px 12px rgba(59, 130, 246, 0.25)' : 'none'
                                })}
                            >
                                {link.icon}
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            
            <div className="sidebar-footer" style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.875rem 1rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
                    <Settings size={20} />
                    <span style={{ fontWeight: '500' }}>Settings</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
