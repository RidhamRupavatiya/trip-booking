import Booking from '../models/booking.model.js';

// Create Booking
const createBooking = async(req,res)=>{
    const newBooking = new Booking(req.body)
    try {
        const savedBooking = await newBooking.save();
        res.status(200).json({
            success: true,
            message:"Your tour is booked.",
            data: savedBooking
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message:"Internal Server error..!"
        })
    }
} 

// get a single Booking
const getBooking = async (req,res)=>{
    const id = req.params.id

    try {
        const book = await Booking.findById(id)
        res.status(200).json({
            success: true,
            message:"successful",
            data: book
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message:"Not Found..!"
        })
    }
}

// update Booking Details
const updateBooking = async (req,res)=>{
    const id = req.params.id
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(id,{
            $set: req.body
        })

        res.status(200).json({
            success:true,
            message:'successfully updated..!',
            data:updatedBooking
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:'failed to update..!'
        });
    }
}

// delete Booking Details
const deleteBooking = async (req,res)=>{
    const id = req.params.id
    try {
        const deletedBooking = await Booking.findByIdAndDelete(id);

        res.status(200).json({
            success:true,
            message:'successfully deleted..!',
            data:deletedBooking
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:'failed to delete..!'
        });
    }
}


export default {createBooking, getBooking, updateBooking, deleteBooking};