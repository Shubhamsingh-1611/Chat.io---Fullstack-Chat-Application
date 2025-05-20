import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/DB.js" // Your MongoDB connection
// import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Allow JSON payloads

// app.use("/api/auth", authRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDB();
});
