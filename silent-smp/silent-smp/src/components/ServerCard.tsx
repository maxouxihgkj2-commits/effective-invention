import React from 'react';

interface ServerCardProps {
    server: {
        id: string;
        name: string;
        status: string;
        players: number;
        maxPlayers: number;
    };
}

const ServerCard: React.FC<ServerCardProps> = ({ server }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold">{server.name}</h2>
            <p>Status: {server.status}</p>
            <p>
                Players: {server.players}/{server.maxPlayers}
            </p>
            <button className="mt-2 bg-blue-500 text-white py-1 px-3 rounded">
                Manage Server
            </button>
        </div>
    );
};

export default ServerCard;