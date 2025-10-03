import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function callback(req: NextApiRequest, res: NextApiResponse) {
    const session = await getSession({ req });

    if (!session) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    // Process the user data from the session
    const user = session.user;

    // Here you can handle the user data, such as saving it to your database

    res.redirect('/dashboard'); // Redirect to the dashboard after successful authentication
}