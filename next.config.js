/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    skipMiddlewareUrlNormalize: true,
    skipTrailingSlashRedirect: true
}

module.exports = nextConfig
