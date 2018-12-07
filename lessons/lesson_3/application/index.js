/*

  Модули в JS
  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import

  Так как для экспорта и импорта нету родной поддержки в браузерах, то
  нам понадобится сборщик или транспалер который это умеет делать.
  -> babel, webpack, rollup

  На сегодняшний день - самое полулярное решение, это вебпак!

  npm i webpack webpack-cli

  Установка и config-less настройка

  "scripts": {
    "cli": "webpack ./application/index.js --output-path ./public/js --output-filename bundle.js --mode development --color --watch"
  }

*/
  `webpack
      ./application/index.js
      --output-path ./public/js
      --output-filename bundle.js
      --mode development
      --color
      --watch
  `;

/*

  npm run cli
  Затестим - в консоли наберем команду webpack

*/

  // import imports from './imports';

  console.log('WEBPACK WORKING!')
