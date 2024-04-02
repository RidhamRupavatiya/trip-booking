import express from 'express';

import { verifyUser } from '../utils/verifyToken.js'
import bookingController from '../controllers/bookingController.js';

const router = express.Router();


router.post('/', verifyUser, bookingController.createBooking);

router.get('/:id', verifyUser, bookingController.getBooking);

router.put('/:id', verifyUser, bookingController.updateBooking);

router.delete('/:id', verifyUser, bookingController.deleteBooking);

export default router;