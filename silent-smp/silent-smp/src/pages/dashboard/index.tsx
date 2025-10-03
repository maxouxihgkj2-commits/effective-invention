import { useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import Layout from '../../../components/Layout';
import ServerCard from '../../../components/ServerCard';

const Dashboard = () => {
  const { user, loading } = useAuth();
  const [servers, setServers] = useState([]);

  useEffect(() => {
    if (user) {
      // Fetch user's servers from the API
      const fetchServers = async () => {
        const response = await fetch('/api/server/status');
        const data = await response.json();
        setServers(data.servers);
      };

      fetchServers();
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Please log in to view your dashboard.</div>;

  return (
    <Layout>
      <h1>Welcome to your Dashboard, {user.username}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {servers.map((server) => (
          <ServerCard key={server.id} server={server} />
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;