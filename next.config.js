const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  register: true,
  swcMinify: true,
  skipWaiting: true,
  reloadOnOnline: true,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  workboxOptions: { disableDevLogs: true },
  disable: process.env.NODE_ENV === 'development'
})

module.exports = withPWA({
  images: {
    remotePatterns: [{ protocol: 'https', hostname: '**' }]
  }
})
