import express from 'express';
import { getDashboardStats, getUsers, createUser } from '../controllers/adminController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// All routes here are protected and restricted to Admin
router.use(protect);
router.use(authorize('Admin'));

router.route('/stats').get(getDashboardStats);
router.route('/users').get(getUsers).post(createUser);

export default router;
