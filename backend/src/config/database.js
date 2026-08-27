import {connect,connection} from 'mongoose';
import env from "./env.js";

const connectDB = async () => {
    try {
        await connect(env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected successfully : ${connection.host}:${connection.port}`);
        return connection;
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error;
    }
};

export default connectDB;