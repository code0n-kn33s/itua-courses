const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
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
    library: 'home' // переносим весь bungle в переменную
  },

  //для меньшей задержки перед зборкой
  watchOptions: {
    aggregateTimeout: 100
  },
  
  // watch: true
  watch: NODE_ENV == 'development',

  // для удобной отладки
  devtool: NODE_ENV == 'development' ? 'source-map' : false, 

  plugins: [],

  //babel
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }

  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 9000
  // }
};

/*
  - Настроить чанки(чтобы все библиотеки подключались автоматом)
  - Установить dev server
  - Установить sass
  - Установить pug

  ----------
  "start": "webpack-dev-server --env development",
  "build": "webpack --env production",
  "serv": "static build",
  "test:lint": "eslint . --cache"
*/