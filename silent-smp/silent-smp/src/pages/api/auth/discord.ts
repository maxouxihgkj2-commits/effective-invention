import { NextApiRequest, NextApiResponse } from 'next';
import { getDiscordAuthUrl } from '../../../lib/discord';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const discordAuthUrl = getDiscordAuthUrl();
    res.redirect(discordAuthUrl);
}