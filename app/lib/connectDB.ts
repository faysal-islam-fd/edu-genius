
import mongoose from "mongoose";


const connection: {isConnected?: number} = {}

async function connectDB() {
    if (connection.isConnected) {
        // Use existing database connection
        console.log("Using existing connection")
        return
    }
    if(process.env.MONGO_URI === undefined) {
        console.error("MONGO_URI is not defined")
        return
    }
    const db = await mongoose.connect(process.env.MONGO_URI)
    console.log("DB Connected")
    connection.isConnected = db.connections[0].readyState
    

}

export default connectDB