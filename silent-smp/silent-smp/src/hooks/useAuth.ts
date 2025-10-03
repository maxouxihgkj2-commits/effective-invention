import { useEffect, useState } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch('/api/auth/user');
            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
            }
            setLoading(false);
        };

        fetchUser();
    }, []);

    const login = async () => {
        window.location.href = '/api/auth/discord';
    };

    const logout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        setUser(null);
    };

    return { user, loading, login, logout };
};

export default useAuth;