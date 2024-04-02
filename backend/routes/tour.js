import express from 'express';
import tourController from '../controllers/tourController.js';

const router = express.Router();

// get all Tour
router.get('/', tourController.getAllTour);

//get tour by id
router.get('/:id', tourController.getTourById);

// get all tours
router.get('/search/getTourBySearch', tourController.getTourBySearch);
router.get('/search/getFeaturedTours', tourController.getFeaturedTour);
router.get('/search/getTourCount', tourController.getTourCount);

export default router;