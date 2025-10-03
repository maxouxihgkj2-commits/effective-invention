import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    Silent SMP
                </div>
                <div className="space-x-4">
                    <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link href="/login" className="text-gray-300 hover:text-white">Login</Link>
                    <Link href="/dashboard" className="text-gray-300 hover:text-white">Dashboard</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;