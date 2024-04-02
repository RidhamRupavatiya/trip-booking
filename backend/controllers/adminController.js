import Tour from '../models/tour.model.js';
import User from '../models/user.model.js';
import Booking from '../models/booking.model.js';


/* -------------Tour----------------*/

// create new Tour
const createTour = async (req,res)=>{

    const newTour = new Tour(req.body)

    try {
        const savedTour = await newTour.save()

        res.status(200).json({
            success:true,
            message:'successfully created..!',
            data:savedTour
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'failed to create try again..!'
        })
        
    }
}

// update tour
const updateTour = async (req,res)=>{
    const id = req.params.id
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true})

        res.status(200).json({
            success:true,
            message:'successfully updated..!',
            data:updatedTour
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:'failed to update..!'
        });
    }
}

// delete tour
const deleteTour = async (req,res)=>{
    const id = req.params.id
    try {
        await Tour.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:'successfully deleted..!'
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:'failed to delete..!'
        });
    }
}


/*-------------------User----------------------*/

// get all user
const getAllUser = async(req,res)=>{

    try {
        const users = await User.find({})

        res.status(200).json({
            success:true,
            message:'successfully get All Users..!',
            data:users
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'not found..!'
        });
    }
}


/* ------------------ Bookings ------------------*/

const GetAllBooking = async (req,res)=>{

    try {
        const bookings = await Booking.find({});

        res.status(200).json({
            success: true,
            message: 'Successful',
            data: bookings,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Not Found!'
        });
    }
};

export default {createTour, updateTour, deleteTour, getAllUser, GetAllBooking};