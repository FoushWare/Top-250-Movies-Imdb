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
};

module.exports = nextConfig;
