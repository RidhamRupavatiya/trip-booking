import User from '../models/user.model.js';

// get User by Id
const getUserById = async(req,res)=>{
    const id = req.params.id;
    try {
        const user = await User.findById(id);

        res.status(200).json({
            success:true,
            message:'successfully get User..!',
            data:user
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:'not found..!'
        });
    }
}

// create new User
const createUser = async (req,res)=>{

    const newUser = new User(req.body)

    try {
        const savedUser = await newUser.save()

        res.status(200).json({
            success:true,
            message:'successfully created..!',
            data:savedUser
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:'failed to create try again..!'
        })
        
    }
}

// update user
const updateUser = async (req,res)=>{
    const id = req.params.id
    try {
        const updatedUser = await User.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true})

        res.status(200).json({
            success:true,
            message:'successfully updated..!',
            data:updatedUser
        });

    } catch (error) {
        res.status(500).json({
            success:false,
            message:'failed to update..!'
        });
    }
}

// delete User
const deleteUser = async (req,res)=>{
    const id = req.params.id
    try {
        await User.findByIdAndDelete(id);

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

export default {getUserById, createUser, updateUser, deleteUser}