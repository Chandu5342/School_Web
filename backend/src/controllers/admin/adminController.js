import bcrypt from 'bcryptjs';
import AdminModel from '../../models/admin.model.js';
import jwt from 'jsonwebtoken';
import ENV from '../../config/env.js';
// Serialize admin data
// This prevents sensitive information like password
// from being sent to the frontend.
const serializeAdmin = (admin) => ({
    id: admin._id,
    firstName: admin.firstName,
    lastName: admin.lastName,
    email: admin.email,
    photo: admin.photo,
    role: admin.role,
    isActive: admin.isActive,
    createdAt: admin.createdAt,
    updatedAt: admin.updatedAt,
});

// Admin Login
const loginAdmin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                message: 'Email and password are required',
            });
        }

        // Find admin by email
        // +password is required because password is normally hidden
        const admin = await AdminModel.findOne({ email }).select('+password');

        // Admin not found
        if (!admin) {
            return res.status(401).json({
                message: 'Invalid email or password',
            });
        }

        // Compare entered password with hashed password
        const isMatch = await bcrypt.compare(
            password,
            admin.password
        );

        // Password incorrect
        if (!isMatch) {
            return res.status(401).json({
                message: 'Invalid email or password',
            });
        }

        // Check whether admin account is active
        if (!admin.isActive) {
            return res.status(403).json({
                message: 'Account is deactivated. Contact support.',
            });
        }

        // Create JWT token
        const token = jwt.sign(
            { id: admin._id },
            ENV.JWT_SECRET,
            {
                expiresIn: ENV.JWT_EXPIRES_IN,
            }
        );

        // Send response
        res.json({
            message: 'Admin login successful',
            token,
            admin: serializeAdmin(admin),
        });
    } catch (error) {
        next(error);
    }
};

export { loginAdmin, serializeAdmin };