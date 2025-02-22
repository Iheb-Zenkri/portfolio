// pages/api/logs.ts
import { NextApiRequest, NextApiResponse } from 'next';
import mongoose from 'mongoose';

interface IpLocation {
    country: string;
    region: string;
    city: string;
    lat: number;
    lon: number;
    googleMapsUrl: string;
}


const MONGODB_URI = process.env.MONGODB_URI || 'your-mongodb-uri-here';
const GEOLOCATION_API = 'http://ip-api.com/json/';


const LogSchema = new mongoose.Schema({
    ip: String,
    userAgent: String,
    location: {
        country: String,
        region: String,
        city: String,
        lat: Number,
        lon: Number,
    },
    googleMapsUrl: String,
    timestamp: { type: Date, default: Date.now },
});

const Log = mongoose.models.Log || mongoose.model('Log', LogSchema);

async function connectToDatabase() {
    if (mongoose.connections[0].readyState) {
        return;
    }

    await mongoose.connect(MONGODB_URI);
}

async function getIpLocation(ip: string | string[]): Promise<IpLocation | null> {
    try {
        const response = await fetch(`${GEOLOCATION_API}${ip}`);
        const data = await response.json();
        if (data.status === 'fail') return null;
        return {
            country: data.country,
            region: data.regionName,
            city: data.city,
            lat: data.lat,
            lon: data.lon,
            googleMapsUrl: `https://www.google.com/maps?q=${data.lat},${data.lon}`,
        };
    } catch (error) {
        console.error('Error fetching IP location:', error);
        return null;
    }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();

    const visitorIp = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || req.socket.remoteAddress;
    const userAgent = req.headers['user-agent'];

    const location = visitorIp ? await getIpLocation(visitorIp) : null;

    try {
        const logEntry = new Log({
            ip: visitorIp,
            userAgent,
            location,
            googleMapsUrl: location ? location.googleMapsUrl : null,
        });

        await logEntry.save();
        res.status(200).json({ message: 'Visitor logged to MongoDB', location });
    } catch (error) {
        console.error('Error saving log:', error);
        res.status(500).json({ error: 'Failed to log visitor' });
    }
}
