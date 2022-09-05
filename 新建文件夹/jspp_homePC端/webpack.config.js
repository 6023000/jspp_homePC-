const path = require('path'),
      Uglify = require('uglifyjs-webpack-plugin'),
      Autoprefixer = require('autoprefixer'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const config = {
  mode: 'production',
  entry: {
  	index: path.resolve(__dirname, './src/js/index.js'),
    list: path.resolve(__dirname, './src/js/list.js'),
    error: path.resolve(__dirname, './src/js/error.js')
  },
  output: {
  	path: path.resolve(__dirname + '/public'),
  	filename: 'js/[name].js',
    publicPath: '/'
  },
  module: {
  	rules: [
      {
      	test: /\.js$/,
      	loader: 'babel-loader',
      	exclude: [
          path.resolve(__dirname, 'node_modules')
      	]
      },

      {
      	test: /\.tpl$/,
      	loader: 'ejs-loader'
      },

      {
        test: /\.scss$/,
        use: [

          {
          	loader: MiniCssExtractPlugin.loader,
          	options: {
          		hmr: process.env.NODE_ENV === 'development'
          	}
          },

          'css-loader',

          {
          	loader: 'postcss-loader',
          	options: {
          		plugin () {
          			return [ autoprefixer('last 5 versions') ];
          		}
          	}
          },

          'sass-loader'
        ]
      },

      {
        test: /\.css$/,
        use: [

          {
          	loader: MiniCssExtractPlugin.loader,
          	options: {
          		hmr: process.env.NODE_ENV === 'development'
          	}
          },

          'css-loader',

          {
          	loader: 'postcss-loader',
          	options: {
          		plugin () {
          			return [ autoprefixer('last 5 versions') ];
          		}
          	}
          }
        ]
      },

      {
      	test: /\.(png|jpg|jpeg|gif|ico)$/i,
      	loader: [
          'url-loader?limit=2048&name=img/[name]-[hash:16].[ext]'
      	]
      },

      {
      	test: /\.(woff2?|eot|ttf|oft|svg)(\?.*)?$/i,
      	loader: [
          'url-loader?name=fonts/[name].[ext]'
      	]
      },
  	]
  },

  plugins: [
    new Uglify(),
    new OptimizeCssAssetsPlugin({}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ],

  devServer: {
  	watchOptions: {
  		ignoreed: /node_modules/
  	},
  	host: 'localhost',
  	port: 3300
  }
} 

module.exports = config; 





