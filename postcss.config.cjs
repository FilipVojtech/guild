const config = {
	plugins: [
		require('postcss-nested'),
		require('autoprefixer'),
		require('cssnano'),
	],
};

module.exports = config;
