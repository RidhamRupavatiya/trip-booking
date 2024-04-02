import mongoose from 'mongoose';

// database connection
mongoose.set("strictQuery", false);
const dbConnect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log(`mongoDB database connected..!`);
    } catch (error) {
        console.log(`mongoDb datbase not connected..!`);
    }
}

export default dbConnect;