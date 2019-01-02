/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./application/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./application/imports.js":
/*!********************************!*\
  !*** ./application/imports.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_myFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/myFunction */ \"./application/modules/myFunction.js\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules */ \"./application/modules/index.js\");\n\n  /*\n    import defaultExport from \"module-name\";\n    import * as name from \"module-name\";\n    import { export } from \"module-name\";\n    import { export as alias } from \"module-name\";\n    import { export1 , export2 } from \"module-name\";\n    import { export1 , export2 as alias2 } from \"module-name\";\n    import defaultExport, * as name from \"module-name\";\n    import \"module-name\";\n  */\n\n  /*\n    import defaultExport from \"module-name\";\n  */\n\n  \n\n  myFunction2();\n\n  // import Container, * as superFunc from './modules/trashContainer';\n  // console.log( Container, superFunc );\n\n  \n\n  // import $ from 'jquery';\n  // $('html').html('<h1>Hello!</h1>');\n\n\n  /* harmony default export */ __webpack_exports__[\"default\"] = (\"Default export string\");\n\n\n//# sourceURL=webpack:///./application/imports.js?");

/***/ }),

/***/ "./application/index.js":
/*!******************************!*\
  !*** ./application/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _imports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imports */ \"./application/imports.js\");\n/*\n  Модули в JS\n  https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/import\n\n  Так как для экспорта и импорта нету родной поддержки в браузерах, то\n  нам понадобится сборщик или транспалер который это умеет делать.\n  -> babel, webpack, rollup\n\n  На сегодняшний день - самое полулярное решение, это вебпак!\n\n  npm i webpack webpack-cli\n\n  Установка и config-less настройка\n\n  \"scripts\": {\n    \"cli\": \"webpack ./application/index.js --output-path ./public/js --output-filename bundle.js --mode development --color --watch\"\n  }\n*/\n\n  `webpack\n      ./application/index.js\n      --output-path ./public/js\n      --output-filename bundle.js\n      --mode development\n      --color\n      --watch\n  `;\n\n/*\n\n  npm run cli\n  Затестим - в консоли наберем команду webpack\n\n*/\n\n  \n\n  console.log('WEBPACK WORKING!')\n\n\n//# sourceURL=webpack:///./application/index.js?");

/***/ }),

/***/ "./application/modules/combined.js":
/*!*****************************************!*\
  !*** ./application/modules/combined.js ***!
  \*****************************************/
/*! exports provided: mArray, mObj, User, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mArray\", function() { return mArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mObj\", function() { return mObj; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return User; });\nconst mArray = ['1','2','3'];\nconst mObj = {\n  data: ['...']\n};\n\nclass User {\n  constructor(name)  {\n    this.name = name;\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n\n//# sourceURL=webpack:///./application/modules/combined.js?");

/***/ }),

/***/ "./application/modules/index.js":
/*!**************************************!*\
  !*** ./application/modules/index.js ***!
  \**************************************/
/*! exports provided: KEY, TO, LEARNING, IS, DO, THINGS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEY\", function() { return KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TO\", function() { return TO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LEARNING\", function() { return LEARNING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IS\", function() { return IS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DO\", function() { return DO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"THINGS\", function() { return THINGS; });\n/* harmony import */ var _manyExports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manyExports */ \"./application/modules/manyExports.js\");\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ \"./application/modules/object.js\");\n/* harmony import */ var _combined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./combined */ \"./application/modules/combined.js\");\n/* harmony import */ var _myFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myFunction */ \"./application/modules/myFunction.js\");\n\n\n\n\n\nconst KEY = \"KEY\";\nconst TO = \"TO\";\nconst LEARNING = \"LEARNING\";\nconst IS = \"IS\";\nconst DO = \"DO\";\nconst THINGS = \"THINGS\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  manyExports: _manyExports__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  object: _object__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  combined: _combined__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  func: _myFunction__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n\n\n//# sourceURL=webpack:///./application/modules/index.js?");

/***/ }),

/***/ "./application/modules/manyExports.js":
/*!********************************************!*\
  !*** ./application/modules/manyExports.js ***!
  \********************************************/
/*! exports provided: chorus1, chorus2, chorus3, chorus4, chorus5, chorus6, verse1, verse2, verse3, verse4, StairwayToHeaven, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chorus1\", function() { return chorus1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chorus2\", function() { return chorus2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chorus3\", function() { return chorus3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chorus4\", function() { return chorus4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chorus5\", function() { return chorus5; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chorus6\", function() { return chorus6; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verse1\", function() { return verse1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verse2\", function() { return verse2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verse3\", function() { return verse3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verse4\", function() { return verse4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StairwayToHeaven\", function() { return StairwayToHeaven; });\n\nconst chorus1 = \"There's a feeling I get\";\nconst chorus2 = \"When I look to the west\";\nconst chorus3 = \"And my spirit is crying for leaving\";\nconst chorus4 = \"In my thoughts I have seen\";\nconst chorus5 = \"Rings of smoke through the trees\";\nconst chorus6 = \"And the voices of those who standing looking\";\n\nconst verse1 = \"And if you listen very hard\";\nconst verse2 = \"The tune will come to you at last\";\nconst verse3 = \"To be a rock and not to roll\";\nconst verse4 = \"And she's buying the stairway to heaven\";\n\n\nconst StairwayToHeaven = ( type =  \"verse\" ) => {\n  if( type === \"verse\"){\n    return `\n      ${verse1}\n      ${verse2}\n      ${verse3}\n      ${verse4}\n    `;\n  } else {\n    return `\n      ${chorus1}\n      ${chorus2}\n      ${chorus3}\n      ${chorus4}\n      ${chorus5}\n      ${chorus6}\n    `\n  }\n}\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StairwayToHeaven);\n\n\n//# sourceURL=webpack:///./application/modules/manyExports.js?");

/***/ }),

/***/ "./application/modules/myFunction.js":
/*!*******************************************!*\
  !*** ./application/modules/myFunction.js ***!
  \*******************************************/
/*! exports provided: myFunction, myFunction2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myFunction\", function() { return myFunction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"myFunction2\", function() { return myFunction2; });\nconst myFunction = () => {\n  console.log('My Super Function was exported and used!');\n}\n\nconst myFunction2 = () => {\n  console.log('myFunction2');\n}\n\nconsole.log('fooooo');\n\n\n\n//# sourceURL=webpack:///./application/modules/myFunction.js?");

/***/ }),

/***/ "./application/modules/object.js":
/*!***************************************!*\
  !*** ./application/modules/object.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet myObj = {\n  name: 'Frodo',\n  age: '39'\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (myObj);\n\n\n//# sourceURL=webpack:///./application/modules/object.js?");

/***/ })

/******/ });