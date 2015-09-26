module.exports = {
	context: __dirname + "/",
    entry: "./client/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
    	loaders: [
		    {
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel'
		    }
		]
    }
}