/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'imviylxjncalgzqebxsf.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/cabin-images/**',
            search: '',
          },
        ],
      },
      // output:"export", // by doing this, we are exporting our entire site as a static site (only possible when there is no dynamic rendering)
};
export default nextConfig;
