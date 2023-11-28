/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	images: {
		domains: ["raw.githubusercontent.com"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "pokeapi.co",
				port: "",
				pathname: "/api/v2/pokemon/**",
			},
		],
	},
};
