import path from 'path';
import webpack from 'webpack';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
  target: 'web',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false,
        parallel: false,
        cache: true,
        uglifyOptions: {
          output: {
            beautify: false
          },
          mangle: {
            keep_fnames: true
          },
          compress: {
            keep_fnames: true,
            warnings: true,
            reduce_vars: false
          }
        }
      })
    ]
  },
  node: {
    fs: 'empty'
  },
  mode: 'production',
  entry: {
    stepper: path.join(__dirname, 'src', 'stepper.js')
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      src: path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js)$/i,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, '../node_modules')
      },
      {
        test: /\.styl$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'stylus-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(js)$/i,
        loader: 'babel-loader',
        exclude: path.join(__dirname, '../node_modules'),
        options: {
          babelrc: false,
          plugins: [
            '@babel/plugin-transform-async-to-generator',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-object-rest-spread'
          ],
          presets: [
            [
              '@babel/preset-env',
              {
                modules: false
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
};
