/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    serverActions: true,
    },
    env: {
        apiKey: ''
    }
}

module.exports = nextConfig
