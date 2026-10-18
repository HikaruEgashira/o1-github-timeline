const repoName = "o1-github-timeline";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	output: "export",
	reactStrictMode: true,
	basePath: isProd ? `/${repoName}` : "",
	assetPrefix: isProd ? `/${repoName}/` : "",
	trailingSlash: true,
	images: {
		unoptimized: true,
	},
};

export default nextConfig;
