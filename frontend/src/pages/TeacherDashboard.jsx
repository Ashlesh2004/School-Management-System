import React from 'react';
import { Calendar, Users, FileText } from 'lucide-react';

const TeacherDashboard = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-color)', marginBottom: '0.5rem' }}>Teacher Dashboard</h1>
                <p style={{ color: 'var(--text-muted)' }}>Welcome back! Here's your schedule for today.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: 'var(--text-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar size={20} color="var(--primary-color)" /> Today's Classes
                    </h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {[
                            { time: '09:00 AM - 10:30 AM', subject: 'Mathematics', grade: 'Grade 10 - A' },
                            { time: '11:00 AM - 12:30 PM', subject: 'Physics', grade: 'Grade 11 - B' },
                            { time: '01:30 PM - 03:00 PM', subject: 'Mathematics', grade: 'Grade 12 - A' },
                        ].map((cls, idx) => (
                            <li key={idx} style={{ 
                                padding: '1rem', 
                                borderLeft: '4px solid var(--primary-color)', 
                                background: 'var(--bg-color)', 
                                marginBottom: '1rem', 
                                borderRadius: '0 8px 8px 0',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <div>
                                    <h4 style={{ fontWeight: '600', color: 'var(--text-color)', marginBottom: '0.25rem' }}>{cls.subject}</h4>
                                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{cls.grade}</p>
                                </div>
                                <span style={{ fontWeight: '500', color: 'var(--text-color)', background: 'var(--card-bg)', padding: '0.5rem 0.75rem', borderRadius: '8px', fontSize: '0.875rem' }}>{cls.time}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Users size={28} />
                        </div>
                        <div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>Pending Attendance</p>
                            <h3 style={{ color: 'var(--text-color)', fontSize: '1.5rem', fontWeight: '700' }}>2 Classes</h3>
                        </div>
                    </div>
                    
                    <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FileText size={28} />
                        </div>
                        <div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>Assignments to Grade</p>
                            <h3 style={{ color: 'var(--text-color)', fontSize: '1.5rem', fontWeight: '700' }}>34</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;
