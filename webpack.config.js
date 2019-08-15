const webpack = require('webpack');
const path = require('path');
var BrotliGzipPlugin = require('brotli-gzip-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	devtool: 'cheap-module-source-map',
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader'
			},
		}, ],
	},
	output: {
		path: __dirname + '/public',
		filename: 'app.js',
	},
	plugins: [
		new BrotliGzipPlugin({
			asset: '[path].br[query]',
			algorithm: 'brotli',
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8,
			quality: 11
		}),
		new BrotliGzipPlugin({
			asset: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"'
   }),
	]
};