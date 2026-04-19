import Attendance from '../models/Attendance.js';
import Result from '../models/Result.js';
import Timetable from '../models/Timetable.js';
import Student from '../models/Student.js';

// @desc    Get student profile
// @route   GET /api/student/profile
// @access  Private/Student
export const getStudentProfile = async (req, res) => {
    try {
        const studentRecord = await Student.findOne({ user: req.user._id }).populate('class');
        res.json({
            user: {
                _id: req.user._id,
                name: req.user.name,
                email: req.user.email
            },
            studentDetails: studentRecord
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get student attendance
// @route   GET /api/student/attendance
// @access  Private/Student
export const getMyAttendance = async (req, res) => {
    try {
        // The attendance is stored per class with an array of records.
        // We'll search for attendances where the records array contains our student ID.
        // To do this properly, we first need to get the student's ID.
        const studentRecord = await Student.findOne({ user: req.user._id });
        if(!studentRecord) {
            return res.status(404).json({ message: 'Student record not found' });
        }

        const attendances = await Attendance.find({ 'records.student': studentRecord._id });
        
        // Filter out only this student's records from the class attendances
        const studentAttendance = attendances.map(att => {
            const record = att.records.find(r => r.student.toString() === studentRecord._id.toString());
            return {
                date: att.date,
                class: att.class,
                status: record.status
            };
        });

        res.json(studentAttendance);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get student results
// @route   GET /api/student/results
// @access  Private/Student
export const getMyResults = async (req, res) => {
    try {
        const studentRecord = await Student.findOne({ user: req.user._id });
        if(!studentRecord) return res.status(404).json({ message: 'Student not found' });

        const results = await Result.find({ student: studentRecord._id }).populate('subject').populate('class');
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Get student timetable
// @route   GET /api/student/timetable
// @access  Private/Student
export const getMyTimetable = async (req, res) => {
    try {
        const studentRecord = await Student.findOne({ user: req.user._id });
        if(!studentRecord) return res.status(404).json({ message: 'Student not found' });

        const timetables = await Timetable.find({ class: studentRecord.class }).populate('subject').populate('teacher');
        res.json(timetables);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
