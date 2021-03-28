import nodeResolve from "@rollup/plugin-node-resolve";

export default {
	input: "main.js",
	output: {
		file: "dist/index.js",
		format: "iife",
	},
	plugins: [
		nodeResolve({
			"extensions": [".js"],
			"moduleDirectories": ["node_modules", "Scripts"],
			"modulesOnly": false//should be true, but Lit 3.0 pre-release breaks it. Try again later
		})
	],
};
