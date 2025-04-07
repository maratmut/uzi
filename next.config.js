/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    // Отключаем middleware для статической экспортации
    skipMiddlewareUrlNormalize: true,
    skipTrailingSlashRedirect: true
}

module.exports = nextConfig
