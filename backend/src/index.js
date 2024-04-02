import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dbConnect from '../DB/dbConnect.js';
import tourRoute from '../routes/tour.js';
import userRoute from '../routes/user.js';
import authRoute from '../routes/auth.js';
import reviewRoute from '../routes/review.js';
import bookingRoute from '../routes/booking.js';

import adminRoute from '../routes/admin.js';

dotenv.config();

const app = express()
const port = process.env.PORT || 3003

const corsOptions = {
    origin: true,
    credentials: true
}


app.get('/',(req,res)=>{
    res.send("api is working!");
})

// middleware
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use('/api/v1/tours', tourRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/review', reviewRoute)
app.use('/api/v1/booking', bookingRoute)

app.use('/api/v1/admin', adminRoute)

app.listen(port,()=>{
    dbConnect();
    console.log(`Server Started at port 3003 or http://localhost:3003`);
})