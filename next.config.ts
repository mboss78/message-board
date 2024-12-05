import type { NextConfig } from 'next';
import { connectDB, syncDB } from './lib/db';

// Run database initialization
(async () => {
  try {
    await connectDB();
    await syncDB();
    console.log('Database connected and synchronized successfully!');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
})();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
  },
};

export default nextConfig;
