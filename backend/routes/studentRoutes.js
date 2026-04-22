 import express from 'express';
import { getStudentProfile, getMyAttendance, getMyResults, getMyTimetable } from '../controllers/studentController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.use(authorize('Student', 'Admin')); // allow admin for testing

router.route('/profile').get(getStudentProfile);
router.route('/attendance').get(getMyAttendance);
router.route('/results').get(getMyResults);
router.route('/timetable').get(getMyTimetable);

export default router;
