/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	experimental: {
		appDir: true,
	},
	compiler: {
		styledComponents: true,
	},
	images: {
		domains: ["images.unsplash.com"],
	},
	env: {
		NEXT_PUBLIC__APIKEY: process.env.NEXT_PUBLIC__APIKEY, },
	},
};

module.exports = nextConfig;
