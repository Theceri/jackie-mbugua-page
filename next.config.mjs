/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pexels.com',
                port: '',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'pixabay.com',
                port: '',
                search: '',
            },
            {
                protocol: 'https',
                hostname: 'img.freepik.com',
                port: '',
                search: '',
            },
        ],
    },
};

export default nextConfig;
