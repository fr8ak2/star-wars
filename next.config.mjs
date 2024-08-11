import path from 'path';
import { fileURLToPath } from 'url';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'standalone',
    sassOptions: {
        includePaths: [path.join(path.dirname(fileURLToPath(import.meta.url)), 'styles')],
    },
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

export default nextConfig;
