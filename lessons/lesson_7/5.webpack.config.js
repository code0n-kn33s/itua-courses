const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    darkSide: './source/darkSide.js',
    lightSide: './source/lightSide.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'my-first-webpack.bundle.js'
  },
  mode: 'development',
  module:{
    // Массив с правилами обработки тех или иных файлов
    rules: [
      {
        // На какие файлы будет работать
        test:/\.js$/,
        // исключить папку
        exclude: /(node_modules)/,
        /*
          лоудеры - подпрограммы которые позволяют вебпаку обрабатывать
          не только js файлы но и другие.
          Так же расширают функцонал и добавляют специфичекую обработку для
          этого типа файлов
        */
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      },
      {
        test: /\.css$/,
        /*
          Если мы хотим добавить возможность обрабатывать и другие типы данных,
          таких как стили например. Нам понадобиться возможность выделить их
          в отдельный файл. Для этого нам понадобиться специальный плагин
          ExtractTextPlugin.

          Теперь мы используем правило use для того что бы указать какой плагин
          мы хотим использовать.

        */
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        // Добавим еще поддержку LESS
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // Порядок лоудеров в случае с фаллбеками читается справа на лево
          use: [
            'css-loader',
            'less-loader'
          ]
        })
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./css/[name].css'),
    new HtmlWebpackPlugin({
       filename: 'darkSide.html',
       title: 'Dark side of the moon',
       // chunk: ['darkSide', 'common'],
       template: './source/templates/dark.html'
     }),
    new HtmlWebpackPlugin({
      filename: 'lightSide.html',
      title: 'Light side of the moon',
      // chunk: ['lightSide', 'common'],
      // excludeChanks: ['darkSide'],
      template: './source/templates/light.html'
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common'
    // })
  ]
};
