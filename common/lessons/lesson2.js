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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lessons/lesson_2/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lessons/lesson_2/homeworks/zoo.js":
/*!*******************************************!*\
  !*** ./lessons/lesson_2/homeworks/zoo.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\n  Задание - используя классы и (или) прототипы создать программу, которая будет\n  распределять животных по зоопарку.\n\n  Zoo ={\n    name: '',\n    AnimalCount: 152,\n    zones: {\n      mammals: [],\n      birds: [],\n      fishes: [],\n      reptile: [],\n      others: []\n    },\n    addAnimal: function(animalObj){\n      // Добавляет животное в зоопарк в нужную зону.\n      // зона берется из класса который наследует Animal\n      // если у животного нету свойства zone - то добавлять в others\n    },\n    removeAnimal: function('animalName'){\n      // удаляет животное из зоопарка\n      // поиск по имени\n    },\n    getAnimal: function(type, value){\n      // выводит информацию о животном\n      // поиск по имени или типу где type = name/type\n      // а value значение выбраного типа поиска\n    },\n    countAnimals: function(){\n      // функция считает кол-во всех животных во всех зонах\n      // и выводит в консоль результат\n    }\n  }\n\n  Есть родительский класс Animal у которого есть методы и свойства:\n  Animal {\n    name: 'Rex', // имя животного для поиска\n    phrase: 'woof!',\n    foodType: 'herbivore' | 'carnivore', // Травоядное или Плотоядное животное\n    eatSomething: function(){ ... }\n  }\n\n  Дальше будут классы, которые расширяют класс Animal - это классы:\n  - mammals\n  - birds\n  - fishes\n  - pertile\n\n  каждый из них имеет свои свойства и методы:\n  в данном примере уникальными будут run/speed. У птиц будут методы fly & speed и т.д\n  Mammals = {\n    zone: mamal, // дублирует название зоны, ставиться по умолчанию\n    type: 'wolf', // что за животное\n    run: function(){\n      console.log( wolf Rex run with speed 15 km/h );\n    },\n    speed: 15\n  }\n\n  Тестирование:\n    new Zoo('name');\n    var Rex = new Mammal('Rex', 'woof', 'herbivore', 15 );\n    your_zooName.addAnimal(Rex);\n      // Добавит в your_zooName.zones.mamals новое животное.\n    var Dex = new Mammal('Dex', 'woof', 'herbivore', 11 );\n    your_zooName.addAnimal(Dex);\n      // Добавит в your_zooName.zones.mamals еще одно новое животное.\n\n    your_zooName.get('name', 'Rex'); -> {name:\"Rex\", type: 'wolf' ...}\n    your_zooName.get('type', 'wolf'); -> [{RexObj},{DexObj}];\n\n    Программу можно расширить и сделать в виде мини игры с интерфейсом и сдать\n    как курсовую работу!\n    Идеи:\n    - Добавить ранжирование на травоядных и хищников\n    - добавив какую-то функцию которая иммитирует жизнь в зоопарке. Питание, движение, сон животных и т.д\n    - Условия: Если хищник и травоядный попадает в одну зону, то хищник сьедает травоядное и оно удаляется из зоопарка.\n    - Графическая оболочка под программу.\n*/\nconsole.log('zoo before'); // debugger\n\nconsole.log('zoo after');\n\n//# sourceURL=webpack:///./lessons/lesson_2/homeworks/zoo.js?");

/***/ }),

/***/ "./lessons/lesson_2/script.js":
/*!************************************!*\
  !*** ./lessons/lesson_2/script.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homeworks_zoo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeworks/zoo */ \"./lessons/lesson_2/homeworks/zoo.js\");\n/* harmony import */ var _homeworks_zoo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homeworks_zoo__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./lessons/lesson_2/script.js?");

/***/ })

/******/ });