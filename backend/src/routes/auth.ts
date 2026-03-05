import { Router } from 'express';
import bcrypt from 'bcryptjs';
import prisma from '../db';

const router = Router();

const getSecret = () => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET is not defined in environment variables');
    }
    return new TextEncoder().encode(secret);
};

// Register Endpoint
router.post('/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            res.status(409).json({ error: 'User already exists' });
            return;
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user (role defaults to "USER" based on schema)
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name
            }
        });

        const { SignJWT } = await import('jose');
        const token = await new SignJWT({ email: user.email, role: user.role })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('2h')
            .sign(getSecret());

        res.json({ success: true, token, role: user.role });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({ where: { email } });
        let isValid = false;
        let role = 'USER';

        if (user) {
            isValid = await bcrypt.compare(password, user.password);
            role = user.role;
        } else if (
            email === (process.env.ADMIN_EMAIL || 'admin@codiq.com') &&
            password === (process.env.ADMIN_PASSWORD || 'admin123')
        ) {
            // Handled as static admin
            isValid = true;
            role = 'ADMIN';
        }

        if (!isValid) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }

        const { SignJWT } = await import('jose');
        const token = await new SignJWT({ email, role })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('2h')
            .sign(getSecret());

        // Return token to client so they can set cookie
        res.json({ success: true, token, role });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
