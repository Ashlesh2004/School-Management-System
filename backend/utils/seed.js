import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Class from '../models/Class.js';
import Subject from '../models/Subject.js';
import connectDB from '../config/db.js';

dotenv.config();

const seedData = async () => {
    try {
        await connectDB();

        // Clear existing data
        await User.deleteMany();
        await Class.deleteMany();
        await Subject.deleteMany();

        // Create Admin
        const adminUser = new User({
            name: 'System Admin',
            email: 'admin@school.com',
            password: 'password123',
            role: 'Admin'
        });
        await adminUser.save();

        // Create Default Classes
        const classes = [
            { name: '10th Grade', section: 'A' },
            { name: '10th Grade', section: 'B' },
            { name: '12th Grade', section: 'Science' }
        ];
        await Class.insertMany(classes);

        // Create Default Subjects
        const subjects = [
            { name: 'Mathematics', code: 'MATH101' },
            { name: 'Science', code: 'SCI101' },
            { name: 'English', code: 'ENG101' }
        ];
        await Subject.insertMany(subjects);

        console.log('Database Seeded Successfully!');
        console.log('Admin Email: admin@school.com | Password: password123');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedData();
