/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	async headers() {
		return [
			{
				source: "/login",
				headers: [
					{
						key: "Cross-Origin-Embedder-Policy",
						value: "unsafe-none",
					},
				],
			},
		];
	},
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
