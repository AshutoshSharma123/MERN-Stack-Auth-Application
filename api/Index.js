import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

// mongoose.connect('mongodb+srv://aashusharma375:ashutosh@authentication.vol8rrr.mongodb.net/?retryWrites=true&w=majority&appName=authentication').then(() => {
//     console.log('connected to mongodb');
// }).catch((err) => {
//     console.log(err);
// });
mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to mongodb');
}).catch((err) => {
    console.log(err);
});


const app = express();

app.listen(3000, () => {
    console.log('listening on port 3000');
});
