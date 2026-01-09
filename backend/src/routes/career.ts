import { Router } from "express";
import prisma from "../db";

const router = Router();

// Public: Submit a career application
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, experience, resumeLink, description } = req.body;

    if (!name || !email || !phone || !experience || !resumeLink) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const application = await prisma.career.create({
      data: {
        name,
        email,
        phone,
        experience: Number(experience),
        resumeLink,
        description,
      },
    });

    res.status(201).json({ success: true, data: application });
  } catch (error) {
    console.error("Career application error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Protected: Get all applications (Admin only)
import { authenticateToken } from '../middleware/auth';

router.get("/", authenticateToken, async (req, res) => {
  try {
    const applications = await prisma.career.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(applications);
  } catch (error) {
    console.error("Fetch career applications error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;