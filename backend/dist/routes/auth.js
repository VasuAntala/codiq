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
const jose_1 = require("jose");
const db_1 = __importDefault(require("../db"));
const router = (0, express_1.Router)();
const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'default_secret_key_change_me');
// Register Endpoint
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password, name } = req.body;
        const existingUser = yield db_1.default.user.findUnique({ where: { email } });
        if (existingUser) {
            res.status(409).json({ error: 'User already exists' });
            return;
        }
        // Create new user (role defaults to "USER" based on schema)
        const user = yield db_1.default.user.create({
            data: {
                email,
                password, // In production, hash this!
                name
            }
        });
        const token = yield new jose_1.SignJWT({ email: user.email, role: user.role })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('2h')
            .sign(secret);
        res.json({ success: true, token, role: user.role });
    }
    catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield db_1.default.user.findUnique({ where: { email } });
        let isValid = false;
        if (user) {
            // In production, use bcrypt.compare
            isValid = password === user.password;
        }
        else if (email === 'admin@codiq.com' && password === 'admin123') {
            // Hardcoded fallback admin (if not in DB yet)
            isValid = true;
        }
        if (!isValid) {
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }
        // Payload now includes role
        const role = (user === null || user === void 0 ? void 0 : user.role) || 'ADMIN';
        const token = yield new jose_1.SignJWT({ email, role })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('2h')
            .sign(secret);
        // Return token to client so they can set cookie
        res.json({ success: true, token, role });
    }
    catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}));
exports.default = router;
