import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'


mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to mongodb');
}).catch((err) => {
    console.log(err);
});


const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('listening on port 3000');
});


app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)
