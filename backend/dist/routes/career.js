"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../db"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
// Multer configuration
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "-" + uniqueSuffix + path_1.default.extname(file.originalname));
    },
});
const upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowedTypes = [".pdf", ".doc", ".docx"];
        const ext = path_1.default.extname(file.originalname).toLowerCase();
        if (allowedTypes.includes(ext)) {
            cb(null, true);
        }
        else {
            cb(new Error("Only .pdf, .doc and .docx files are allowed"));
        }
    },
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});
// Public: Submit a career application
router.post("/", upload.single("resume"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone, experience, description } = req.body;
        if (!name || !email || !phone || !experience || !req.file) {
            res.status(400).json({ error: "Missing required fields or resume file" });
            return;
        }
        const resumeLink = `/uploads/${req.file.filename}`;
        const application = yield db_1.default.career.create({
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
    }
    catch (error) {
        console.error("Career application error:", error);
        res.status(500).json({ error: error.message || "Internal Server Error" });
    }
}));
// Protected: Get all applications (Admin only)
const auth_1 = require("../middleware/auth");
router.get("/", auth_1.authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const applications = yield db_1.default.career.findMany({
            orderBy: { createdAt: "desc" },
        });
        res.json(applications);
    }
    catch (error) {
        console.error("Fetch career applications error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}));
exports.default = router;
