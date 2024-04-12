/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
      },
      // {
      //   protocol: 'https',
      //   hostname: 'pagina de amazon'
      // },
    ]
  }
};

export default nextConfig;
