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
// Public: Get all active job vacancies
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const jobs = yield db_1.default.jobVacancy.findMany({
            where: { isActive: true },
            orderBy: { createdAt: 'desc' }
        });
        res.json(jobs);
    }
    catch (error) {
        console.error('Fetch jobs error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Protected: Create a new job vacancy (Admin only)
router.post('/', auth_1.authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, department, type, location, description } = req.body;
        if (!title || !department || !type || !location) {
            res.status(400).json({ error: 'Missing required fields' });
            return; // Explicit return to perform check
        }
        const job = yield db_1.default.jobVacancy.create({
            data: {
                title,
                department,
                type,
                location,
                description
            }
        });
        res.status(201).json(job);
    }
    catch (error) {
        console.error('Create job error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
// Protected: Delete a job vacancy (Admin only)
router.delete('/:id', auth_1.authenticateToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield db_1.default.jobVacancy.delete({
            where: { id }
        });
        res.json({ success: true, message: 'Job deleted successfully' });
    }
    catch (error) {
        console.error('Delete job error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
exports.default = router;
