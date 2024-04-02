import express from 'express';
import adminController from '../controllers/adminController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

/*--------- tours ---------*/
//create new Tour
router.post('/tours', verifyAdmin, adminController.createTour);

// update Tour
router.put('/tours/:id', verifyAdmin, adminController.updateTour);

// delete Tour 
router.delete('/tours/:id', verifyAdmin, adminController.deleteTour);


/*--------------- User --------------*/
// Get All User
router.get('/users', verifyAdmin, adminController.getAllUser);


/*------------- Bookings ----------*/
// Get All Booking
router.get('/bookings', verifyAdmin, adminController.GetAllBooking);


export default router