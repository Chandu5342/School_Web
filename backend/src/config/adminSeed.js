import bcrypt from 'bcryptjs';
import AdminModel from '../models/admin.model.js';
const DEFAULT_ADMIN = {
    firstName: 'Ernest',
    lastName: 'Achiever',
    email: 'admin@gmail.com',
    password: '123456',
    role: 'admin',
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
};

const seedAdmin = async () => {
    try {
        // Check whether admin already exists
        const existingAdmin = await AdminModel.findOne({
            email: DEFAULT_ADMIN.email,
        });

        if (existingAdmin) {
            console.log(
                `👤 Admin already exists: ${existingAdmin.email}`
            );

            return existingAdmin;
        }

        // Hash the default admin password
        const hashedPassword = await bcrypt.hash(
            DEFAULT_ADMIN.password,
            10
        );

        // Create admin
        const admin = await AdminModel.create({
            ...DEFAULT_ADMIN,
            password: hashedPassword,
        });

        console.log(
            `👤 Admin seeded successfully: ${admin.email}`
        );

        return admin;
    } catch (error) {
        console.error(
            '❌ Failed to seed admin:',
            error.message
        );

        throw error;
    }
};

export default seedAdmin;