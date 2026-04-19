import express from 'express';
import { authUser, getUserProfile } from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';
import { check } from 'express-validator';

const router = express.Router();

router.post(
    '/login',
    [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ],
    authUser
);

router.get('/profile', protect, getUserProfile);

export default router;
