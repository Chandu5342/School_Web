import { Schema, model } from 'mongoose'

const adminSchema = new Schema({
    firstName: {
        type: String, required: true, trim: true,
        maxLength: [50, 'First name should be less than 50 characters']
    },
    lastName: {
        type: String, required: true, trim: true,
        maxLength: [50, 'Last name should be less than 50 characters']
    },
    photo: { type: String, trim: true },
    email: {
        type: String, required: true, unique: true, trim: true,
        maxLength: [100, 'Email should be less than 100 characters'], lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password: {
        type: String, required: true, trim: true,
        minLength: [8, 'Password should be at least 8 characters'], select: false
    },
    phone: {
        type: String, required: true, trim: true,
        maxLength: [20, 'Phone number should be less than 20 characters']
    },
    role: {
        type: String, enum: { values: ['admin', 'superadmin'] },
        message: 'Role must be either admin or superadmin', default: 'admin'
    },
    isActive: { type: Boolean, default: true },
}, { timestamps: true });

const Admin = model('Admin', adminSchema);
export default Admin;