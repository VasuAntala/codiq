import { Request, Response, NextFunction } from 'express';

const secret = new TextEncoder().encode(
    process.env.JWT_SECRET
);

if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables');
}

export async function authenticateToken(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

    if (!token) {
        res.status(401).json({ error: 'Unauthorized: No token provided' });
        return;
    }

    try {
        const { jwtVerify } = await import('jose');
        const { payload } = await jwtVerify(token, secret);
        (req as any).user = payload;
        next();
    } catch (err) {
        res.status(403).json({ error: 'Forbidden: Invalid token' });
    }
}
