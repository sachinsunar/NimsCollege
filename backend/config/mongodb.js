import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("Database Connection Successfully")
    })

    await mongoose.connect(`${process.env.MONGODB_URL}/blog`)

}

export default connectDB