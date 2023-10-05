/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    images: {
        remotePatterns: [
          // for gmail login avatar picture
          {
            hostname: 'lh3.googleusercontent.com',
            pathname: '**',
            port: '',
            protocol: 'https',
          },
          // for temporary placeholder image
          {
            hostname: 'cdn.freecodecamp.org',
            pathname: '**',
            port: '',
            protocol: 'https'
          },
          // uploaded images
          {
            hostname: 'fpyz1dyfygyrju25.public.blob.vercel-storage.com',
            pathname: '**',
            port: '',
            protocol: 'https'
          }
        ],
      },
};

module.exports = nextConfig;
