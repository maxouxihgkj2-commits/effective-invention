import React from 'react';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Silent SMP. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;