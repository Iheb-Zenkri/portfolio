// pages/api/logs.ts
import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'your-mongodb-uri-here';

const LogSchema = new mongoose.Schema({
    ip: String,
    userAgent: String,
    timestamp: { type: Date, default: Date.now },
});

const Log = mongoose.models.Log || mongoose.model('Log', LogSchema);

async function connectToDatabase() {
    if (mongoose.connections[0].readyState) {
        return;
    }

    await mongoose.connect(MONGODB_URI);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();

    const visitorIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];
    const timestamp = new Date().toISOString();

    try {
        const logEntry = new Log({
            ip: visitorIp,
            userAgent,
            timestamp,
        });

        await logEntry.save();

        res.status(200).json({ message: 'Visitor logged to MongoDB' });
    } catch (error) {
        console.error('Error saving log:', error);
        res.status(500).json({ error: 'Failed to log visitor' });
    }
}
