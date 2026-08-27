import {v2 as cloudinary} from 'cloudinary';
import evn from "./env.js";

cloudinary.config({
    cloud_name: evn.CLOUDINARY_CLOUD_NAME,
    api_key: evn.CLOUDINARY_API_KEY,
    api_secret: evn.CLOUDINARY_API_SECRET,
});

export default cloudinary;