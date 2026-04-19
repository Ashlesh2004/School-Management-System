import Student from '../models/Student.js';
import Class from '../models/Class.js';
import Attendance from '../models/Attendance.js';
import Result from '../models/Result.js';

// @desc    Get teacher profile and assigned classes
// @route   GET /api/teacher/profile
// @access  Private/Teacher
export const getTeacherProfile = async (req, res) => {
    try {
        // Find classes where this teacher is assigned
        const classes = await Class.find({ teacher: req.user._id });
        res.json({
            user: {
                _id: req.user._id,
                name: req.user.name,
                email: req.user.email
            },
            classes
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Mark attendance for a class
// @route   POST /api/teacher/attendance
// @access  Private/Teacher
export const markAttendance = async (req, res) => {
    const { classId, records, date } = req.body; 
    // records is an array of { studentId, status }
    try {
        const attendance = await Attendance.create({
            class: classId,
            date: date || Date.now(),
            records
        });
        res.status(201).json(attendance);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Upload marks / results
// @route   POST /api/teacher/results
// @access  Private/Teacher
export const uploadResults = async (req, res) => {
    const { studentId, classId, subjectId, examType, marksObtained, totalMarks } = req.body;
    try {
        const result = await Result.create({
            student: studentId,
            class: classId,
            subject: subjectId,
            examType,
            marksObtained,
            totalMarks
        });
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
