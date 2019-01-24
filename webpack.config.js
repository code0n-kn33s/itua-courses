const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    lesson1: './lessons/lesson_1/script.js',
    lesson2: './lessons/lesson_2/script.js',
    lesson3: './lessons/lesson_3/script.js',
    lesson4: './lessons/lesson_4/script.js',
    lesson5: './lessons/lesson_5/script.js',
    lesson6: './lessons/lesson_6/script.js',
    lesson7: './lessons/lesson_7/script.js',
    lesson8: './lessons/lesson_8/script.js'
  },
  output: {
    path: path.resolve(__dirname, 'common/lessons/'),
    filename: '[name].js',
  },

  //для меньшей задержки перед зборкой
  watchOptions: {
    aggregateTimeout: 100
  },

  watch: true,

  plugins: [
    new CleanWebpackPlugin('./common/lessons', {}),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
};
