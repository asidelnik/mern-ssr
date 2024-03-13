/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: [{
    //   protocol: 'https',
    //   hostname: 'upload.wikimedia.org',
    //   pathname: '*',
    // }]
    domains: ['upload.wikimedia.org'],
  },
};

export default nextConfig;
