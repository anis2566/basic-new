// C:\Users\Basic\Documents\monorepo\apps\web\next.config.mjs

// Remove this line: const { PrismaPlugin } = require('@prisma/nextjs-monorepo-workaround-plugin');
// And use this line instead:
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins.push(new PrismaPlugin());
    }
    return config;
  },
};

// Remove this line: module.exports = nextConfig;
// And use this line instead:
export default nextConfig;
