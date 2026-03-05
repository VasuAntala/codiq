import { Router } from "express";
import prisma from "../db";
import multer from "multer";
import path from "path";

const router = Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = [".pdf", ".doc", ".docx"];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error("Only .pdf, .doc and .docx files are allowed"));
    }
  },
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// Public: Submit a career application
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, experience, description } = req.body;

    if (!name || !email || !phone || !experience || !req.file) {
      res.status(400).json({ error: "Missing required fields or resume file" });
      return;
    }

    const resumeLink = `/uploads/${req.file.filename}`;

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
  } catch (error: any) {
    console.error("Career application error:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
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