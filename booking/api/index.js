import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import hotels from './routes/hotels.js';
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();
dotenv.config();
const connectDb = async () => {
    try {

        await mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGO);
        console.log('connected to MongoDb');
    } catch (error) {
        throw error;
    }

};
const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200
};
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/hotels', hotels);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

app.listen(8080, () => {
    connectDb();
    console.log('Connected to server');
});