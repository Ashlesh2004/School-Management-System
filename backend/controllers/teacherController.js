import Student from '../models/Student.js';
import ClassModel from '../models/Class.js'; // renamed variable
import Attendance from '../models/Attendance.js';
import Result from '../models/Result.js';

// @desc    Fetch teacher details with assigned classes
// @route   GET /api/teacher/profile
// @access  Private/Teacher
export const fetchTeacherProfile = async (req, res) => {
    try {
        // get classes assigned to logged-in teacher
        const assignedClasses = await ClassModel.find({ teacher: req.user._id });

        return res.status(200).json({
            teacher: {
                id: req.user._id,
                name: req.user.name,
                email: req.user.email
            },
            assignedClasses
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// @desc    Create attendance entry
// @route   POST /api/teacher/attendance
// @access  Private/Teacher
export const createAttendance = async (req, res) => {
    try {
        const { classId, records, date } = req.body;

        const attendanceData = new Attendance({
            class: classId,
            records,
            date: date ? date : new Date()
        });

        const savedAttendance = await attendanceData.save();

        return res.status(201).json({
            message: 'Attendance recorded successfully',
            data: savedAttendance
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

// @desc    Save student results
// @route   POST /api/teacher/results
// @access  Private/Teacher
export const addStudentResult = async (req, res) => {
    try {
        const {
            studentId,
            classId,
            subjectId,
            examType,
            marksObtained,
            totalMarks
        } = req.body;

        const resultEntry = new Result({
            student: studentId,
            class: classId,
            subject: subjectId,
            examType,
            marksObtained,
            totalMarks
        });

        const savedResult = await resultEntry.save();

        return res.status(201).json({
            message: 'Result uploaded successfully',
            result: savedResult
        });
    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
