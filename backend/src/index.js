import express from "express";
import cors from "cors";
import ENV from "./config/env.js";
import connectDB from "./config/database.js";
import { notFound, errorHandler } from "./middleware/error.middleware.js";
const app = express();

app.use(cors({
    origin: [ENV.FRONTEND_URL, ENV.ADMIN_URL],
    credentials: true,
}))

app.use(express.json());
app.get("/api/health", (req, res) => {
    res.status(200).json({
        message: "Server is healthy",
        status: "success",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        version:"1.0.0",
    })
});

//api endpoints
app.use("api/admin",adminRoutes);
app.use("api/user",userRoutes);
app.use("api/teacher",teacherRoutes);
//last routes
app.use(notFound);
app.use(errorHandler);
const startServer = async () => {
    try {
        const conn=await connectDB();
        if(conn.readyState === 1) {
            console.log("Database connection established successfully.");
            app.listen(ENV.PORT, () => {
                console.log(`Server is running on port ${ENV.PORT}`);
            });
        }else{
            console.error("Database connection is not ready. Exiting...");
            process.exit(1); // Exit the process with an error code
        }
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        process.exit(1); // Exit the process with an error code
    }
}

startServer();