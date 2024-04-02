import Tour from '../models/tour.model.js';

// get Tour by Id
const getTourById = async(req,res)=>{
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id)
        .populate("reviews")

        res.status(200).json({
            success:true,
            message:'successfully get Tour..!',
            data:tour
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:'not found..!'
        });
    }
}

// get all tour
const getAllTour = async(req,res)=>{

    // for pagination
    const page = parseInt(req.query.page);

    try {
        const tours = await Tour.find({})
        .populate("reviews")
        .skip(page*8)
        .limit(8);

        res.status(200).json({
            success:true,
            count: tours.length,
            message:'successfully get All Tours..!',
            data:tours
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'not found..!'
        });
    }
}

//get tour by search 
const getTourBySearch = async (req,res)=>{
    const city = new RegExp(req.query.city,'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try {

        //gte means greater than equal
        const tours = await Tour.find(
            {
                city, 
                distance:{$gte:distance},
                maxGroupSize:{$gte:maxGroupSize}
            })

        res.status(200)
        .json({
            success:true,
            message:"Successful",
            data:tours,
        });
    } catch (error) {
        res.status(404)
        .json({
            success:false,
            message:"not found"
        })
    }
}

// get featured tour 
const getFeaturedTour = async(req,res)=>{
    
    try {
        const tours = await Tour.find({featured:true})
        .populate("reviews")
        .limit(8);

        res.status(200).json({
            success:true,
            count: tours.length,
            message:'successfully get All Tours..!',
            data:tours
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'not found..!'
        });
    }
};

// get tour counts
const getTourCount = async(req,res)=>{
    try {
        const tourCount = await Tour.estimatedDocumentCount()

        res.status(200).json({
            success:true,
            data:tourCount
        })
    } catch (error) {
        res.status(500).json({
            success:false, 
            message:'failed to fetch'
        });
    }
};


export default {getTourById, getAllTour, getTourBySearch, getFeaturedTour, getTourCount};