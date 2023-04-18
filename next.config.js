/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["images.prismic.io"],
		formats: ["image/webp"],
		unoptimized: true,
	},
	compiler: {
		styledComponents: true,
	},
}

module.exports = nextConfig
