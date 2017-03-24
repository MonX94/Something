'use strict';

const webpack = require('webpack');

module.exports = {
	module: {
		loaders: [
			{
				test: /(\.js|\.jsx)/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				enforce: 'pre',
				test: /(\.js|\.jsx)/,
				exclude: /(node_modules|bower_components)/,
				loader: 'eslint-loader'
			}
		],
	},
	watchOptions: {
		aggregateTimeout: 100
	},
	entry: {
		index: './scripts/index.jsx',
		cart: './scripts/cart_page.jsx'
	},
	output: {
		filename: '[name].js'
	},
	watch: true,
	devtool: 'eval',
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: false
			}
		})
	]

};
