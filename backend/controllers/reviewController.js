import Tour from '../models/tour.model.js';
import Review from '../models/review.model.js';

const createReview = async (req,res)=>{

    const tourId = req.params.tourId;
    const newReview = new Review({...req.body})

    try {

        const savedReview = await newReview.save()

        // after creating a new review now the review of the array
        await Tour.findByIdAndUpdate(tourId,{
            $push: {reviews: savedReview._id}
        })

        res.status(200).json({
            success:true,
            message: 'Review Submitted',
            data: savedReview
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'failed to Submitte review',
        })
    }
}


export default {createReview};