
import { Router } from 'express';
import prisma from '../db';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// Public: Get all active job vacancies
router.get('/', async (req, res) => {
    try {
        const jobs = await prisma.jobVacancy.findMany({
            where: { isActive: true },
            orderBy: { createdAt: 'desc' }
        });
        res.json(jobs);
    } catch (error) {
        console.error('Fetch jobs error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Public: Get a single job vacancy
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const job = await prisma.jobVacancy.findUnique({
            where: { id }
        });

        if (!job) {
            res.status(404).json({ error: 'Job not found' });
            return;
        }

        res.json(job);
    } catch (error) {
        console.error('Fetch job error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Protected: Create a new job vacancy (Admin only)
router.post('/', authenticateToken, async (req, res) => {
    try {
        const { title, department, type, location, description } = req.body;

        if (!title || !department || !type || !location) {
            res.status(400).json({ error: 'Missing required fields' });
            return; // Explicit return to perform check
        }

        const job = await prisma.jobVacancy.create({
            data: {
                title,
                department,
                type,
                location,
                description
            }
        });
        res.status(201).json(job);
    } catch (error) {
        console.error('Create job error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Protected: Delete a job vacancy (Admin only)
router.delete('/:id', authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.jobVacancy.delete({
            where: { id }
        });
        res.json({ success: true, message: 'Job deleted successfully' });
    } catch (error) {
        console.error('Delete job error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
