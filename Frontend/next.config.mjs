/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,

    // Updated experimental options:
    serverExternalPackages: ['@prisma/client', 'bcrypt'], // Previously serverComponentsExternalPackages

    // Remove deprecated options:
    experimental: {
        // Only include current experimental features you need
    },

    // Keep other configurations
    poweredByHeader: false,
    generateEtags: false,
};

export default nextConfig;