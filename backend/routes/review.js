import express from 'express';
import reviewController from '../controllers/reviewController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/:tourId', verifyUser, reviewController.createReview);

export default router;