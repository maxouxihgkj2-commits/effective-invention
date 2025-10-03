import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';
import { fetchServerDetails } from '../../../lib/api'; // Assume this function is defined to fetch server details

const ServerDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [server, setServer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            const getServerDetails = async () => {
                const data = await fetchServerDetails(id);
                setServer(data);
                setLoading(false);
            };
            getServerDetails();
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!server) {
        return <div>Server not found</div>;
    }

    return (
        <Layout>
            <h1>{server.name}</h1>
            <p>{server.description}</p>
            {/* Add more server details as needed */}
        </Layout>
    );
};

export default ServerDetails;