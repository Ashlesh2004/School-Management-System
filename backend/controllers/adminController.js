import User from '../models/User.js';
import Student from '../models/Student.js';
import Teacher from '../models/Teacher.js';
import ClassModel from '../models/Class.js'; // renamed variable

// @desc    Fetch dashboard statistics
// @route   GET /api/admin/stats
// @access  Private/Admin
export const fetchDashboardStats = async (req, res) => {
    try {
        // using Promise.all for better performance
        const [students, teachers, classes, users] = await Promise.all([
            Student.countDocuments(),
            Teacher.countDocuments(),
            ClassModel.countDocuments(),
            User.countDocuments()
        ]);

        return res.status(200).json({
            totalStudents: students,
            totalTeachers: teachers,
            totalClasses: classes,
            totalUsers: users
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// @desc    Retrieve all users
// @route   GET /api/admin/users
// @access  Private/Admin
export const fetchAllUsers = async (req, res) => {
    try {
        const userList = await User.find().select('-password');
        return res.status(200).json({ count: userList.length, data: userList });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// @desc    Add a new user
// @route   POST /api/admin/users
// @access  Private/Admin
export const addUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'Email already registered' });
        }

        const newUser = new User({ name, email, password, role });
        const savedUser = await newUser.save();

        return res.status(201).json({
            id: savedUser._id,
            name: savedUser.name,
            email: savedUser.email,
            role: savedUser.role
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
