import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        // Simulate checking server status
        const serverStatus = {
            online: true,
            players: 10,
            maxPlayers: 20,
            message: 'Server is running smoothly!',
        };

        res.status(200).json(serverStatus);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch server status' });
    }
}