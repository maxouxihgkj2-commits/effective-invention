// This file declares TypeScript types and interfaces used throughout the application.

export interface User {
    id: string;
    username: string;
    discriminator: string;
    avatar: string | null;
    accessToken: string;
}

export interface Server {
    id: string;
    name: string;
    ownerId: string;
    status: 'online' | 'offline';
}

export interface Payment {
    id: string;
    userId: string;
    amount: number;
    currency: string;
    status: 'pending' | 'completed' | 'failed';
}

export interface Session {
    id: string;
    userId: string;
    createdAt: Date;
    expiresAt: Date;
}