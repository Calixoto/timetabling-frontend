/** @type {import('next').NextConfig} */
const nextConfig = {
  // compiler: {
  //   removeConsole: process.env.NODE_ENV === "production",
  // },
  // optimizeFonts: true,
  // reactStrictMode: true,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
