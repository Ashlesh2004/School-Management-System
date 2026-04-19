import React from 'react';
import { Users, BookOpen, GraduationCap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', students: 400, teachers: 24 },
  { name: 'Feb', students: 410, teachers: 24 },
  { name: 'Mar', students: 425, teachers: 25 },
  { name: 'Apr', students: 440, teachers: 26 },
  { name: 'May', students: 460, teachers: 28 },
  { name: 'Jun', students: 480, teachers: 30 },
];

const StatCard = ({ icon, title, value, color }) => (
    <div style={{
        background: 'var(--card-bg)',
        padding: '1.5rem',
        borderRadius: '16px',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        border: '1px solid var(--border-color)'
    }}>
        <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: `${color}15`,
            color: color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {icon}
        </div>
        <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>{title}</p>
            <h3 style={{ color: 'var(--text-color)', fontSize: '1.75rem', fontWeight: '700' }}>{value}</h3>
        </div>
    </div>
);

const AdminDashboard = () => {
    return (
        <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-color)', marginBottom: '0.5rem' }}>Admin Dashboard</h1>
                <p style={{ color: 'var(--text-muted)' }}>Welcome back! Here's an overview of the school.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <StatCard icon={<Users size={28} />} title="Total Students" value="480" color="#3B82F6" />
                <StatCard icon={<GraduationCap size={28} />} title="Total Teachers" value="30" color="#8B5CF6" />
                <StatCard icon={<BookOpen size={28} />} title="Total Classes" value="12" color="#10B981" />
            </div>

            <div style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: 'var(--text-color)' }}>Growth Overview</h3>
                <div style={{ height: '350px', width: '100%' }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#6B7280'}} dx={-10} />
                            <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }} />
                            <Line type="monotone" dataKey="students" stroke="#3B82F6" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
                            <Line type="monotone" dataKey="teachers" stroke="#8B5CF6" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
