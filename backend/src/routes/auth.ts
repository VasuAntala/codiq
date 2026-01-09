import { Router } from 'express';
import { SignJWT } from 'jose';
import prisma from '../db';

const router = Router();


const secret = new TextEncoder().encode(
    process.env.JWT_SECRET || 'default_secret_key_change_me'
);

// Register Endpoint
router.post('/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            res.status(409).json({ error: 'User already exists' });
            return;
        }

        // Create new user (role defaults to "USER" based on schema)
        const user = await prisma.user.create({
            data: {
                email,
                password, // In production, hash this!
                name
            }
        });

        const token = await new SignJWT({ email: user.email, role: user.role })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('2h')
            .sign(secret);

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

        if (user) {
            // In production, use bcrypt.compare
            isValid = password === user.password;
        } else if (email === 'admin@codiq.com' && password === 'admin123') {
            // Hardcoded fallback admin (if not in DB yet)
            isValid = true;
        }

        if (!isValid) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }

        // Payload now includes role
        const role = user?.role || 'ADMIN';
        const token = await new SignJWT({ email, role })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('2h')
            .sign(secret);

        // Return token to client so they can set cookie
        res.json({ success: true, token, role });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
