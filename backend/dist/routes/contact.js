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
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Public: Submit a contact message
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, subject, message } = req.body;
        if (!name || !email || !message) {
            res.status(400).json({ error: 'Missing required fields' });
            return;
        }
        const submission = yield db_1.default.contactSubmission.create({
            data: {
                name,
                email,
                subject,
                message,
            },
        });
        res.status(201).json({ success: true, data: submission });
    }
    catch (error) {
        console.error('Contact submission error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Protected: Get all messages (Admin only)
router.get('/', auth_1.authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const submissions = yield db_1.default.contactSubmission.findMany({
            orderBy: { createdAt: 'desc' },
        });
        res.json(submissions);
    }
    catch (error) {
        console.error('Fetch submissions error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
exports.default = router;
