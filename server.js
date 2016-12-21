/**
 * Created by Wes on 8/15/2016.
 */
const express = require('express'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpackHotMiddleware = require('webpack-hot-middleware'),
	webpack = require('webpack'),
	webpackConfig = require('./webpack.config'),
	app = express(),
	compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

app.use(webpackDevMiddleware(compiler, {
	hot: true,
	filename: 'bundle.js',
	publicPath: '/',
	stats: {
		colors: true
	},
	historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler, {
	log: console.log,
	path: '/__webpack_hmr',
	heartbeat: 10 * 1000
}));

const server = app.listen(3000, function () {
	const host = server.address().address,
		port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});