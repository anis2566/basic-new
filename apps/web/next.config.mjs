const { PrismaPlugin } = require("@prisma/nextjs-monorepo-workaround-plugin");

const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins.push(new PrismaPlugin());
    }
    return config;
  },
};

export default nextConfig;
