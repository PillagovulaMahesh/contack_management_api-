import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

export const DB_URL = process.env.DATABASE_URL || '';
export const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
export const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '1h';
export const EMAIL_USER = process.env.EMAIL_USER || ''; // Email sender account (e.g., Gmail)
export const EMAIL_PASS = process.env.EMAIL_PASS || ''; // Email sender password or app-specific password
export const RATE_LIMIT_WINDOW = parseInt(process.env.RATE_LIMIT_WINDOW || '15'); // Rate limit window (in minutes)
export const RATE_LIMIT_MAX = parseInt(process.env.RATE_LIMIT_MAX || '100'); // Max requests per window

export const uploadDirectory = 'uploads/'; // Directory for uploaded files

export const dbConfig = {
  url: DB_URL,
  options: {
    dialect: 'postgres',
    logging: false, // Disable SQL query logs (optional)
  },
};
