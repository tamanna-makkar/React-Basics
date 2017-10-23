var isProd = process.env.Node_ENV === 'production';
var bootstrapEntryPoints = require('./webpack.bootstrap.config');
var bootstrapConfig = isProd ? bootstrapEntryPoints.prod : bootstrapEntryPoints.dev; 

module.exports = {
   entry: {
       app : './src/main.js',
	   routingApp : './src/routing.js',
	   basics: './src/basics-3.js',
	   todo: './src/TodoMain.js',
       bootstrap: bootstrapConfig
   },
   output: {
		filename: '[name].bundle.js'	
   },
   devServer:{
		inline: true,
	    port: 3000
   }, 
   module: {
   	 loaders : [
		 {
		 	test:/\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			query : { 
				presets: ['es2015','react']
			} 
		 },
		 {
				test:/\.scss$/,
				loader:'style-loader!css-loader!sass-loader'
		 },
		 {
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=20000'
		 },
		 { 
			 test: /\.(woff2?|svg)$/, 
			 loader: 'url-loader?limit=10000' 
		 },
    	 { 
			 test: /\.(ttf|eot)$/, 
			 loader: 'file-loader' 
		 },
		 { 
		    test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, 
		    loader: 'imports-loader?jQuery=jquery' 
		 }
	 ]
   }	
};