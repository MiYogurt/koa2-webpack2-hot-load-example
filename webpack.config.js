const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    	resolve(__dirname, 'client')
	],
	devtool: 'source-map',
	output: {
		path: resolve(__dirname),
		filename: 'bundle.js',
		publicPath: '/static'
	},
	module: {
		rules: [
			{
		       enforce: 'pre',
		       test: /\.js$/,
		       loader: "source-map-loader"
		     },
			{test: /\.js$/, loader: 'babel-loader'}
		]
	},
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NamedModulesPlugin()
	]

}