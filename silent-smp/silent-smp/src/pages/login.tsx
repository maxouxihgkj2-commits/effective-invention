import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to Discord OAuth login
    window.location.href = '/api/auth/discord';
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Redirecting to Discord...</h1>
    </div>
  );
};

export default Login;