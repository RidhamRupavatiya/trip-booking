import express from 'express';
import userController from '../controllers/userController.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// get user By Id
router.get('/:id', verifyUser, userController.getUserById);

// update User
router.put('/:id', verifyUser ,userController.updateUser);

// delete User
router.delete('/:id', verifyUser ,userController.deleteUser);

export default router