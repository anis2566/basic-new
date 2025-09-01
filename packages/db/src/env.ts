import { config } from 'dotenv';
import path from 'path';

// Load .env from the db package directory
const envPath = path.resolve(__dirname, '../.env');
config({ path: envPath });

console.log(`🔍 DB Package: Loading .env from: ${envPath}`);
console.log(`✅ DB Package: DATABASE_URL loaded: ${!!process.env.DATABASE_URL}`);

if (!process.env.DATABASE_URL) {
    throw new Error(`❌ DATABASE_URL not found. Check file exists at: ${envPath}`);
}