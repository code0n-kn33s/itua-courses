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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lessons/lesson_2/homeworks/zoo.js":
/*!*******************************************!*\
  !*** ./lessons/lesson_2/homeworks/zoo.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\n\r\n  Задание - используя классы и (или) прототипы создать программу, которая будет\r\n  распределять животных по зоопарку.\r\n\r\n  Zoo ={\r\n    name: '',\r\n    AnimalCount: 152,\r\n    zones: {\r\n      mammals: [],\r\n      birds: [],\r\n      fishes: [],\r\n      reptile: [],\r\n      others: []\r\n    },\r\n    addAnimal: function(animalObj){\r\n      // Добавляет животное в зоопарк в нужную зону.\r\n      // зона берется из класса который наследует Animal\r\n      // если у животного нету свойства zone - то добавлять в others\r\n    },\r\n    removeAnimal: function('animalName'){\r\n      // удаляет животное из зоопарка\r\n      // поиск по имени\r\n    },\r\n    getAnimal: function(type, value){\r\n      // выводит информацию о животном\r\n      // поиск по имени или типу где type = name/type\r\n      // а value значение выбраного типа поиска\r\n    },\r\n    countAnimals: function(){\r\n      // функция считает кол-во всех животных во всех зонах\r\n      // и выводит в консоль результат\r\n    }\r\n  }\r\n\r\n  Есть родительский класс Animal у которого есть методы и свойства:\r\n  Animal {\r\n    name: 'Rex', // имя животного для поиска\r\n    phrase: 'woof!',\r\n    foodType: 'herbivore' | 'carnivore', // Травоядное или Плотоядное животное\r\n    eatSomething: function(){ ... }\r\n  }\r\n\r\n  Дальше будут классы, которые расширяют класс Animal - это классы:\r\n  - mammals\r\n  - birds\r\n  - fishes\r\n  - pertile\r\n\r\n  каждый из них имеет свои свойства и методы:\r\n  в данном примере уникальными будут run/speed. У птиц будут методы fly & speed и т.д\r\n  Mammals = {\r\n    zone: mamal, // дублирует название зоны, ставиться по умолчанию\r\n    type: 'wolf', // что за животное\r\n    run: function(){\r\n      console.log( wolf Rex run with speed 15 km/h );\r\n    },\r\n    speed: 15\r\n  }\r\n\r\n  Тестирование:\r\n    new Zoo('name');\r\n    var Rex = new Mammal('Rex', 'woof', 'herbivore', 15 );\r\n    your_zooName.addAnimal(Rex);\r\n      // Добавит в your_zooName.zones.mamals новое животное.\r\n    var Dex = new Mammal('Dex', 'woof', 'herbivore', 11 );\r\n    your_zooName.addAnimal(Dex);\r\n      // Добавит в your_zooName.zones.mamals еще одно новое животное.\r\n\r\n    your_zooName.get('name', 'Rex'); -> {name:\"Rex\", type: 'wolf' ...}\r\n    your_zooName.get('type', 'wolf'); -> [{RexObj},{DexObj}];\r\n\r\n    Программу можно расширить и сделать в виде мини игры с интерфейсом и сдать\r\n    как курсовую работу!\r\n    Идеи:\r\n    - Добавить ранжирование на травоядных и хищников\r\n    - добавив какую-то функцию которая иммитирует жизнь в зоопарке. Питание, движение, сон животных и т.д\r\n    - Условия: Если хищник и травоядный попадает в одну зону, то хищник сьедает травоядное и оно удаляется из зоопарка.\r\n    - Графическая оболочка под программу.\r\n*/\nconsole.log('zoo before'); // debugger\n\nconsole.log('zoo after');\n\n//# sourceURL=webpack:///./lessons/lesson_2/homeworks/zoo.js?");

/***/ }),

/***/ "./lessons/lesson_2/script.js":
/*!************************************!*\
  !*** ./lessons/lesson_2/script.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeworks_zoo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeworks/zoo */ \"./lessons/lesson_2/homeworks/zoo.js\");\n/* harmony import */ var _homeworks_zoo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homeworks_zoo__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./lessons/lesson_2/script.js?");

/***/ }),

/***/ 1:
/*!******************************************!*\
  !*** multi ./lessons/lesson_2/script.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lessons/lesson_2/script.js */\"./lessons/lesson_2/script.js\");\n\n\n//# sourceURL=webpack:///multi_./lessons/lesson_2/script.js?");

/***/ })

/******/ });