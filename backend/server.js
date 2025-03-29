import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './config/mongodb.js';
import adminRouter from './routes/adminRoute.js';
import connectCloudinary from './config/cloudinary.js';


//app config
const app = express();
const port = process.env.PORT || 3000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json())
app.use(cors())


//api endpointes
app.use("/api/admin", adminRouter)

app.listen(port, () => {
    console.log(`app is running successfully on port: ${port}`)
})