import { Router } from 'express';
import prisma from '../db';
import { authenticateToken } from '../middleware/auth';

const router = Router();


// Public: Submit a contact message
router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !message) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }

        const submission = await prisma.contactSubmission.create({
            data: {
                name,
                email,
                subject,
                message,
            },
        });

        res.status(201).json({ success: true, data: submission });
    } catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Protected: Get all messages (Admin only)
router.get('/', authenticateToken, async (req, res) => {
    try {
        const submissions = await prisma.contactSubmission.findMany({
            orderBy: { createdAt: 'desc' },
        });
        res.json(submissions);
    } catch (error) {
        console.error('Fetch submissions error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
