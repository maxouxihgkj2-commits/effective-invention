import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '../components/Layout';
import { useAuth } from '../hooks/useAuth';
import { motion } from 'framer-motion';

const Home = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [loading, user, router]);

  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>Welcome to Silent SMP</h1>
        <p>Your adventure starts here!</p>
        {user && <p>Hello, {user.name}!</p>}
      </motion.div>
    </Layout>
  );
};

export default Home;