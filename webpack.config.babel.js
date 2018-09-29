/* eslint "flowtype/require-valid-file-annotation": 0 */

import path from 'path'
import webpack from 'webpack'
import Clean from 'clean-webpack-plugin'
import UglifyJsPlugin from 'uglifyjs-webpack-plugin'
import Copy from 'copy-webpack-plugin'

const MODE = process.env.NODE_ENV || 'development'

export default {
  mode: MODE,
  devtool: 'inline-source-map',
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true
  },
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new Clean(['dist']),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new Copy([
      {
        from: 'public/index.html'
      }
    ])
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true
        }
      }
    },
    minimizer:
      MODE === 'production'
        ? [
            new UglifyJsPlugin({
              uglifyOptions: {
                minimize: true,
                sourceMap: false,
                compressor: {
                  warnings: false
                },
                output: {
                  comments: false
                }
              }
            })
          ]
        : []
  }
}
