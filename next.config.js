const SITE = require('./src/config.js').SITE;

/** @type {import('next').NextConfig} */
module.exports = {
  /* output: 'export', */
  reactStrictMode: true,

  trailingSlash: SITE.trailingSlash,

  swcMinify: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.jp',
      },
      {
        protocol: 'https',
        hostname: 'cdn.mariachici.com',
        port: '',
        pathname: '/media/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.mariachici.com',
        port: '',
        pathname: '/videos/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.mariachici.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'opengraph.b-cdn.net',
        port: '',
        pathname: '/production/images/**',
      },
      {
        protocol: 'https',
        hostname: 'api.mariachici.com',
        port: '',
        pathname: '/api/**',
      },
    ],
  },
  /* async headers() {
    return [
      {
        // matching all API routes
        source: "/*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
          { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  } */
};
