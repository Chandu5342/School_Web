import dotenv from "dotenv";
import dns from "dns";
dotenv.config();

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const env = {
    PORT:process.env.PORT,
    NODE_ENV:process.env.NODE_ENV,
    MONGO_URI:process.env.MONGO_URI,
    JWT_SECRET:process.env.JWT_SECRET,
    JWT_EXPIRE:process.env.JWT_EXPIRE,
    FRONTEND_URL:process.env.FRONTEND_URL,
    ADMIN_URL:process.env.ADMIN_URL,
    CLOUDINARY_CLOUD_NAME:process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET:process.env.CLOUDINARY_API_SECRET,
    MAILTRAP_HOST:process.env.MAILTRAP_HOST,
    MAILTRAP_PORT:process.env.MAILTRAP_PORT,
    MAILTRAP_USERNAME:process.env.MAILTRAP_USERNAME,
    MAILTRAP_PASSWORD:process.env.MAILTRAP_PASSWORD,
    STRIPE_API_KEY:process.env.STRIPE_API_KEY,
    STRIPE_PUBLISHABLE_KEY:process.env.STRIPE_PUBLISHABLE_KEY
};

export default env;