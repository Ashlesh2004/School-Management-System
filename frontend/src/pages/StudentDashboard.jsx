import React from 'react';
import { Target, CheckSquare, Clock } from 'lucide-react';

const StudentDashboard = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-color)', marginBottom: '0.5rem' }}>Student Dashboard</h1>
                <p style={{ color: 'var(--text-muted)' }}>Welcome back! Here's your academic overview.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)', padding: '1.5rem', borderRadius: '16px', color: '#fff', boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                        <div>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>Overall Attendance</p>
                            <h3 style={{ fontSize: '2rem', fontWeight: '700' }}>85%</h3>
                        </div>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <CheckSquare size={24} />
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.3)', borderRadius: '3px' }}>
                        <div style={{ width: '85%', height: '100%', background: '#fff', borderRadius: '3px' }}></div>
                    </div>
                </div>

                <div style={{ background: 'linear-gradient(135deg, #10B981, #059669)', padding: '1.5rem', borderRadius: '16px', color: '#fff', boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.5)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                        <div>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>Latest Grade</p>
                            <h3 style={{ fontSize: '2rem', fontWeight: '700' }}>A-</h3>
                        </div>
                        <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Target size={24} />
                        </div>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.9)' }}>Mathematics Mid-term</p>
                </div>
            </div>

            <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Clock size={20} color="var(--primary-color)" /> Up Next
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                        { time: '11:00 AM', subject: 'Physics', room: 'Lab 3', teacher: 'Mr. Anderson' },
                        { time: '12:30 PM', subject: 'Lunch Break', room: 'Cafeteria', teacher: '-' },
                        { time: '01:30 PM', subject: 'English', room: 'Room 204', teacher: 'Ms. Smith' }
                    ].map((cls, idx) => (
                        <div key={idx} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '1.5rem', alignItems: 'center', padding: '1rem', background: 'var(--bg-color)', borderRadius: '12px' }}>
                            <div style={{ fontWeight: '600', color: 'var(--primary-color)' }}>{cls.time}</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h4 style={{ fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.25rem' }}>{cls.subject}</h4>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{cls.room} • {cls.teacher}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
