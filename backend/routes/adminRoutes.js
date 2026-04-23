import express from 'express';
import {
  getDashboardStats,
  getUsers,
  createUser
} from '../controllers/adminController.js';

import {
  protect,
  authorize
} from '../middleware/authMiddleware.js';

const router = express.Router();

// Apply authentication middleware to all admin routes
router.use(protect);

// Restrict access to Admin role only
router.use(authorize('Admin'));

// Dashboard statistics route
router.get('/stats', getDashboardStats);

// User management routes
router
  .route('/users')
  .get(getUsers)      // Fetch all users
  .post(createUser);  // Create a new user

export default router;
