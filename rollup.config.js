//import includePaths from 'rollup-plugin-includepaths';
import nodeResolve from "@rollup/plugin-node-resolve";

const includePathOptions = {
	extensions: [".js"],
	paths: ["node_modules", "Scripts"]
};

export default {
	input: "main.js",
	output: {
		file: "index.js",
		format: "iife",
	},
	plugins: [
		//includePaths(includePathOptions),
		nodeResolve({
			"extensions": [".js"],
			"moduleDirectories": ["node_modules", "Scripts"],
			"modulesOnly": true
		})
	],
};

