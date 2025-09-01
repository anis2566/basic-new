import { config } from 'dotenv';
import path from 'path';

// Load environment variables from db package
const envPath = path.resolve(__dirname, '../db/.env');
const result = config({ path: envPath });

if (result.error) {
    console.error(`Failed to load .env from ${envPath}:`, result.error);
}

console.log(`🔍 Loading .env from: ${envPath}`);
console.log(`✅ DATABASE_URL loaded: ${!!process.env.DATABASE_URL}`);

if (!process.env.DATABASE_URL) {
    throw new Error(`❌ DATABASE_URL not found. Check file exists at: ${envPath}`);
}