const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;

module.exports = (env) => {
  console.log('env', env);
  return {
    mode: "development",
    entry: "./src/index.js",
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      pathinfo: false,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: '学习webpack',
        template: 'index.html',
      }),
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
             MiniCssExtractPlugin.loader,
              'css-loader'
          ]
        },
        {
            test: /\.less$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'less-loader'
            ],
        },
        {
          test: /\.(t|j)s$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
        },
        {
          test: /\.vue$/,
          include: path.resolve(__dirname, 'src'),
          use: [
              'vue-loader',
          ]
      }
      ],
    },
    optimization: {
      moduleIds: 'deterministic',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    }
  };
}