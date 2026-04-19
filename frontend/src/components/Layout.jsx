import React, { useContext } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { AuthContext } from '../context/AuthContext';

const Layout = ({ children }) => {
    const { user } = useContext(AuthContext);

    return (
        <div className="app-container">
            <Sidebar role={user?.role} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <Topbar user={user} />
                <main className="main-content" style={{ background: 'var(--bg-color)', position: 'relative' }}>
                    {/* Add some subtle light spheres to the background of dashboards */}
                    <div style={{
                        position: 'absolute', top: '10%', left: '5%', width: '30rem', height: '30rem', 
                        background: 'radial-gradient(circle, rgba(59,130,246,0.03) 0%, rgba(0,0,0,0) 70%)', borderRadius: '50%', zIndex: 0, pointerEvents: 'none'
                    }}></div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
