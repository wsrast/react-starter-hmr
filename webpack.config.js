var path = require('path'),
	webpack = require('webpack'),
	config = {
		"_comment1": "This is the path to your client-side JS folder. Must be absolute path.",
		context: path.join(__dirname, 'src'),
		"_comment2": "This is the entry point for your application",
		entry: [
			'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
			'./main.js'
		],
		output: {
			path: path.join(__dirname, 'www'),
			filename: 'bundle.js'
		},
		module: {
			"_comment3": "This section specifies how each file should be processed before it is combined into the bundle",
			loaders: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loaders: ['react-hot', 'babel']
				}
			]
		},
		"_comment4": "Where Webpack should look for loaders, like the Babel loader above.",
		resolveLoader: {
			root: [
				path.join(__dirname, 'node_modules')
			]
		},
		"_comment5": "Where Webpack should look for files referenced by an import or require() statement.",
		resolve: {
			root: [
				path.join(__dirname, 'node_modules')
			]
		},
		plugins: [
			new webpack.optimize.OccurenceOrderPlugin(),
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoErrorsPlugin()
		]
	};

module.exports = config;

