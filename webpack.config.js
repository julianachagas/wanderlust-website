const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  target: ['web', 'es5'],
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
    assetModuleFilename: 'assets/[name][ext]'
  },
  devtool: false,
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    'autoprefixer',
                    {
                      // Options
                    }
                  ]
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: 'src/favicon.ico',
      filename: 'index.html',
      template: 'src/template.html'
    }),
    new HtmlWebpackPlugin({
      favicon: 'src/favicon.ico',
      filename: 'destination.html',
      template: 'src/destination.html'
    }),
    new HtmlWebpackPlugin({
      favicon: 'src/favicon.ico',
      filename: 'plans.html',
      template: 'src/plans.html'
    }),
    new HtmlWebpackPlugin({
      favicon: 'src/favicon.ico',
      filename: 'contact.html',
      template: 'src/contact.html'
    }),
    new HtmlWebpackPlugin({
      favicon: 'src/favicon.ico',
      filename: 'subscribe.html',
      template: 'src/subscribe.html'
    }),
    new BundleAnalyzerPlugin()
  ]
};
