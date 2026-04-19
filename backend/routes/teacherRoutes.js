import express from 'express';
import { getTeacherProfile, markAttendance, uploadResults } from '../controllers/teacherController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect);
router.use(authorize('Teacher', 'Admin')); // allow admin as well for testing

router.route('/profile').get(getTeacherProfile);
router.route('/attendance').post(markAttendance);
router.route('/results').post(uploadResults);

export default router;
